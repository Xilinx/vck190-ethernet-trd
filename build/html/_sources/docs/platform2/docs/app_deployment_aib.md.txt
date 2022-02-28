<table class="sphinxhide">
 <tr>
   <td align="center"><img src="../../media/xilinx-logo.png" width="30%"/><h1>Versal Prime -VMK180 Evaluation Kit PCIe TRD Tutorial</h1>
   </td>
 </tr>
 <tr>
 <td align="center"><h1>Setting up the Board and Application Deployment</h1>

 </td>
 </tr>
</table>

Setting up the Board and Application Deployment
=================================================

Introduction
----------------
This document shows how to set up the board and run the Multimedia TRD application.

Setting up the Board
-----------------------

### Flash the SD Card
 * Download  the `vmk180_pcie_trd_pre-built_2021.1.zip` package, unzip and save it on your computer. Alternatively, Go through tutorials section to build `petalinux-sdimage.wic` locally.
  
  * To uncompress wic file use following command 

	```
	cd vmk180_pcie_trd_prebuilt_2021.1
	xz -d -v petalinux-sdimage.wic.xz
	```

	This generates a output file named
	`petalinux-sdimage.wic`.
  
  * Connect the microSD to your computer.

  * Download the [Balena Etcher tool](https://www.balena.io/etcher/) (recommended; available for Window, Linux, and 
  macOS) required to flash the SD card.

  * Follow the instructions in the tool and select the downloaded image to flash onto your microSD card. 

    ![Balena Etcher](../../media/balena.png)

  * Eject the SD card from your computer.

    If you are looking for other OS specific tools to write the image to the SD card refer to [Setting up the SD Card Image](https://www.xilinx.com/products/som/kria/kv260-vision-starter-kit/kv260-getting-started/setting-up-the-sd-card-image.html)

### Board Setup:

   ![GitHub Logo](../../media/vmk180-setup-pcie.png)

  * **Board jumper and switch settings**
  
   This is a onetime setup and the board should have been delivered to you with this default settings, but it is good to double check for the first time when you get the board.

   * Make sure you remove J326 (7-8) jumper.
   * Setup SYSCTRL Boot mode switch SW11 to (ON,OFF,OFF,OFF) from switch bits 1 to 4 as shown in the above picture.
   * Setup Versal Boot Mode switch SW1 to (ON,OFF,OFF,OFF) from switch bits 1 to 4 as shown in the above picture.

  * **microSD**: Insert the SD card into slot at Versal microSD slot (top).
  
	Make sure you have the SYSCTRL uSD card inserted in the slot (bottom) and card has the SYSCTRL image. For Latest version of SYSCTRL image, refer to [Beam Tool Wiki Page](https://xilinx-wiki.atlassian.net/wiki/spaces/A/pages/972914749/BEAM+Tool+for+VMK180+Evaluation+Kit )

  * Monitor:

    Before booting, connect a 1080P/4K monitor to the board via either HDMI port.

    4K monitor is preferred to demonstrate at the maximum supported resolution.

  * **Serial console settings**: VMK180 comes with a USB-C connector for JTAG+UART, when connected three UART ports should be visible in Device Manager:

    * Versal UART0
    * Versal UART1 &
    * System Controller UART

  * Connect a USB-C cable to the USB-UART connector. In the terminal emulator choose Versal UART0 and use the following settings:
  
    * Baud Rate: 115200
    * Data: 8 bit
    * Parity: None
    * Stop: 1 bit
    * Flow Control: None

  * **Network connection**:

    Connect the Ethernet cable to your local network with DHCP enabled to run Jupyter Notebooks

### Host hardware setup:

   * Insert the board into a PCIe slot present on the host's motherboard either directly or using a PCIe extender cable
   * Connect a DP Monitor to the host via a DP port of a graphic card installed on host
   * Install Qt 5.9
   * Install OpenCV 3.4.11
  
### Power on the board, and boot the Linux image.
   
   Follow these steps to boot the board into Linux

    * Ensure all steps under the section ‘Board jumper and switch settings’ are verified.
    * Insert the prepared micro SD card into the Versal SD card slot (refer to the image VMK180 Board Setup)
    * Make physical connections to PCIe, UART and power as shown in the image.
    * Turn ON power switch SW13.
    * On Versal UART0 terminal, we would see the Versal device booting from the micro SD card starting with the message “Xilinx Versal Platform Loader and Manager”
    * In about 60 seconds boot is complete. Observe the Linux prompt root@xilinx-vmk180-es1-2020_2 and autostart of JupyterLab server as shown in the example below:

 ```
 root@xilinx-vmk180-2021_1:~#
[W 02:30:21.552 LabApp] JupyterLab server extension not enabled, manually loading...
[I 02:30:21.571 LabApp] JupyterLab extension loaded from /usr/lib/python3.5/site-packages/jupyterlab
[I 02:30:21.572 LabApp] JupyterLab application directory is /usr/share/jupyter/lab
[I 02:30:21.580 LabApp] Serving notebooks from local directory: /usr/share/notebooks
[I 02:30:21.581 LabApp] The Jupyter Notebook is running at:
[I 02:30:21.581 LabApp] http://172.19.1.246:8888/?token=c46d443a39d2648046afdbb9bc5821177ab7cd386c218103
[I 02:30:21.581 LabApp] Use Control-C to stop this server and shut down all kernels (twice to skip confirmation).
[C 02:30:23.092 LabApp]

 To access the notebook, open this file in a browser:
     file:///home/root/.local/share/jupyter/runtime/nbserver-1889-open.html
 Or copy and paste one of these URLs:
     http://172.19.1.246:8888/?token=c46d443a39d2648046afdbb9bc5821177ab7cd386c218103
 ```
Follow these steps to connect to the jupyter-server using Chrome browser on the laptop.

 > **Note**:  This demo is tested with Chrome browser only.

Copy the generated URL with token on the prompt of Versal target and paste it to the browser address bar of the laptop, for example:

```
http://172.19.1.246:8888/?token=c46d443a39d2648046afdbb9bc5821177ab7cd386c218103

```

  > **Note**: If for any reason target fails to grab an IP address from the network, Jupyter server would fail to issue an URL. In such a case user is recommended to fix an IP address and restart the jupyter server as shown below:

```

/etc/init.d/jupyterlab-server stop
/etc/init.d/jupyterlab-server start

```
To look up the jupyter server IP address and token on the target, run:

```
jupyter notebook list

```
In case of a private network, user may have to assign a static address within the subnet of the host laptop

Copy the generated URL with token on the prompt of Versal target and paste it to the browser address bar of the laptop, for example:

```

http://192.168.1.77:8888/?token=06cfb958c61eb0581bb759f40e3a4c3a6252cef3b7075449

```

### Run the Jupyter Notebooks

 This TRD includes the following jupyter notebooks:

1. **vmk180-trd-cpu.ipynb**: Demonstrates how to plot the CPU usage while running applications and pipelines.
2. **vmk180-trd-power.ipynb**: Demonstrates how to plot power consumption of multiple voltage rails throughout the board.
  
to run the notebooks, follow the below steps:

1. On the left pane of the browser, 2 notebooks are available under the folder VMK180 TRD.
2. Double click to open the notebook
3. Select ‘Kernel’ → ‘Restart Kernel and Run All Cells’ (This will reset kernel and run's all cells sequentially) from the top menu bar to run the demo. Scroll down to the end of the notebook to see the video output.

![BoardUI](../../media/jnbh_pcie.png)

4. Click the rectangular icon to interrupt the kernel and stop the video stream.

 ![Interrupt](../../media/platform2_interrupt.png)

5. Select ‘Kernel’ → ‘Shutdown Kernel’ → close the notebook tab and move to the next notebook.

> **NOTE** : Please follow ''step 3 to step 5'', without this you may observe incorrect behavior while moving to different notebook. 
 
Host Machine Software setup
--------------------------------
 **Directory and file description**

Following are the list of directories in `pcie_host_package` directory.

  * **apps**: QDMA User space application to configure and control QDMA
  * **docs**: Documentation for the Xilinx QDMA Linux Driver	
  * **driver/src**: Provides interfaces to manage the PCIe device and exposes character driver interface to perform QDMA transfers
  * **driver/libqdma**: QDMA library to configure and control the QDMA IP	
  * **scripts**: Sample scripts for perform DMA operations
  * **Makefile**: Makefile to compile the driver
  * **pcie_app**: This application receives frame buffer data from host, processes it and sends frame buffer to host using QDMA driver


> **NOTE** : Make sure, the VMK180 board is powered on before booting the HOST machine to enumerate VMK180 board as PCIe endpoint device successfully

* Power on the HOST machine

* Execute following command on HOST machine's terminal to check If the Board is linking up:

```
lspci -vd 10ee:
```

 On successful Linkup below entry appears followed by additional capabilities of VMK180 as endpoint: 
  
  ```
  03:00.0 RAM memory: Xilinx Corporation Device b03f
  ```

 If above entry is missing QDMA driver will not be able to recognized PCIe endpoint device. 
  
* if not already done, copy `pcie_host_package` directory to PCIe host machine. 

  
Updating the PCIe device ID (if needed)
---------------------------
Make sure that PCIe Device ID in the driver is matching to Device ID observed in linkup status. in above output `b03f` is device ID.

During the PCIe DMA IP customization in Vivado you can specify a PCIe Device ID. This Device ID must be recognized by the driver in order to properly identify the PCIe QDMA device. 

To Check/modify the PCIe Device ID in the driver, open the `$vmk180-trd/pcie_host_package/qdma/driver/src/pci_ids.h` file (line no : 320) from the driver source and search for the pcie_device_id struct. 
This struct defines the PCIe Device IDs that are recognized by the driver in the following format: 

```
{PCI_DEVICE (0x10ee, 0xb03f),}, 
```

Add, remove, or modify the PCIe Device IDs in this struct. The PCIe DMA driver will only recognize device IDs identified in this struct as PCIe QDMA devices. User can also remove PCIe Device IDs that are not be used in their solution.
On every modification, the driver must be un-installed and recompiled, if compiled previously.

 For additional information refer https://xilinx.github.io/dma_ip_drivers/master/QDMA/linux-kernel/html/build.html
 
  * follow below steps to Install the QDMA driver
> **NOTE** : Root permissions will be required to install qdma driver. 

```
cd pcie_host_package/qdma
make 
 ```
 
  * Install the QDMA driver
```
make install-mods

``` 

  * Configure the QDMA module paramters using following script:

```
./scripts/qdma_generate_conf_file.sh <bus_num> <num_pfs> <mode> <config_bar> <master_pf>` 

```
	
Ex: (Assuming PCIe BDF - 03:00.0)
	
```
./scripts/qdma_generate_conf_file.sh 0x03 1 0 1 0

```
	
  * For loading the driver, execute the following command: (This is required only First time, from next boot driver loads automatically)
```
modprobe qdma-pf
```
	
  * Setup and Enable Queues for H2C and C2H:  (Refer link in NOTE_1 for more details)
  Allocate the Queues to a function. QDMA IP supports maximum of 2048 queues. 
	By default, all functions have 0 queues assigned.
	qmax configuration parameter enables the user to update the number of queues for a PF. 
	This configuration parameter indicates “Maximum number of queues associated for the current pf”.
To set 1024 as qmax for PF0:

```
 echo 1024 > /sys/bus/pci/drivers/qdma-pf/$BDF/qdma/qmax
 
``` 

  * To Add a Queue:
	
```
 dma-ctl qdma<bbddf> q add idx <N> [mode <st|mm>] [dir <h2c|c2h|bi>] 
 
```
Ex: (Assuming PCIe BDF - 03:00.0)

```
dma-ctl qdma03000 q add idx 0 mode mm dir h2c
dma-ctl qdma03000 q add idx 1 mode mm dir c2h 
       
 ```

  * To start a Queue:

```
dma-ctl qdma<bbddf> q start idx <N> [dir <h2c|c2h|bi>]
```

Ex: (Assuming PCIe BDF - 03:00.0)

```
dma-ctl qdma03000 q start idx 0 dir h2c
dma-ctl qdma03000 q start idx 1 dir c2h  
   
```
	
  * Build host application:
  
```
cd pcie_app/

```
	
   * modify macros `H2C_DEVICE` , `C2H_DEVICE` , `REG_DEVICE_NAME` in pcie_host.cpp , using /dev/ nodes generated for  the pcie device based on its `Bus:Device:Function number`.
	
 Ex: Assuming PCIe BDF as `03:00.0` the above macros need to be set as:	
   * If H2C queue index is 0 device node is `/dev/qdma03000-MM-0`  (Queue index for H2C is set in above "Add a queue" step)
   * If C2H queue index is 1 device node is `/dev/qdma03000-MM-1`  (Queue index for C2H is set in above "Add a queue" step)
		
   REG_DEVICE_NAME is `/sys/bus/pci/devices/0000:03:00.0/resource0`

   * Modify pcie_app/app1.pro line no 35 and 39 for opencv library path and opencv include path before compilation

   * set `QMAKE_PATH` to installed QT qmake path

```
export QMAKE_PATH=/opt/Qt5.9/5.9/gcc_64/bin/qmake`
```

compile application:
``` 
./do_compile.sh

```

 Generate of Raw video Input file.
------------------------------------

> **Note**:: : Ensure that Gstreamer packages installed on the Linux PC. If using Ubuntu distribution, ensure that the version is atleast 16.04.

1. Download VP9 encoded sample file such as [Big_Buck_Bunny](https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c0/Big_Buck_Bunny_4K.webm/Big_Buck_Bunny_4K.webm.480p.vp9.webm)

2. Run following GST command to create 3840x2160 resolution raw file with YUY2 format with 30fps

```
gst-launch-1.0 filesrc location=<file_path>/Big_Buck_Bunny_4K.webm.480p.vp9.webm ! decodebin ! queue ! videoconvert ! videoscale ! videorate ! video/x-raw, width=3840, height=2160, format=YUY2, framerate=30/1 ! filesink location=<file_path>/4k30.yuv
```

* Run following GST command to create 1920x1080 resolution raw file with YUY2 format with 30fps

```
gst-launch-1.0 filesrc location=<file_path>/Big_Buck_Bunny_4K.webm.480p.vp9.webm ! decodebin ! queue ! videoconvert ! videoscale ! videorate ! video/x-raw, width=1920, height=1080, format=YUY2, framerate=30/1 ! filesink location=<file_path>/1080p30.yuv
```
		
Run Host and EP applications
----------------------------
> **Note:**  Make sure, HOST application is launched before starting EP application.


* Execute following command to run the Host application(pcie_host_app)

	```
	./pcie_host_app -i < input_file_name > -d < input_resolution > -t < filter_type >  
	```
	
	For 1080p, 30fps:
	``` 
   ./pcie_host_app -i file.yuy2 -d 1920x1080 -t 4 
   
    ```
  
	For 4K, 30fps: 
	``` 
   ./pcie_host_app -i file.yuy2 -d 3840x2160 -t 4 
   
   ```
Following Table lists the supported filter configuration in the design.

|Filter_type |Filter name|
   |----|----|
   |0 |No Filter-Pass through|
   |1 |Blur filter|
   |2 |Edge filter|
   |3 |Horizontal Edge filter| 
   |4 |Vertical Edge filter|      
   |5 |Emboss filter| 
   |6 |HGRAD filter|      
   |7 |VGRAD filter| 
   |8 |Identity filter|      
   |9 |Sharpe filter| 
   |10 |Horizontal Sobel filter| 
   |11 |Vertical Sobel filter|
   

* Execute following command on Target(EP) to start application(pcie-testapp)

 * login into UART Terminal with `root` user & `root` as password
 * set the following environment variable:
   ```
	export XILINX_XRT=/usr
	export XCL_BINDIR=/media/sd-mmcblk0p1/ 
   ```
   
 * execute following command to run EP Application
  ```	
  pcie-testapp 
  
  ```
A filter version of big buck bunny video will start playing on DP monitor.

**Next Steps**
* Go back to the [VMK180 PCIe TRD design start page](../platform2_landing.md)

**License**

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at
[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

<p align="center">Copyright&copy; 2021 Xilinx</p>
