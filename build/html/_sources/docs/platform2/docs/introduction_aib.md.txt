<table class="sphinxhide">
 <tr>
   <td align="center"><img src="../../media/xilinx-logo.png" width="30%"/><h1> Versal Prime -VMK180 Evaluation Kit PCIe TRD Tutorial</h1>
   </td>
 </tr>
 <tr>
 <td align="center"><h1> Design Overview </h1>

 </td>
 </tr>
</table>

Design Overview
===============

Introduction
--------------

The PCIe based platform demonstrates the PCIe capabilities of Versal Devices. The Platform design demonstrates a video file being transferred from a x86 host machine (root complex) to the endpoint (VMK180 evaluation board) processes the data with a 2d filter and finally is displayed at the host machine. The design uses the CPM PCI Express (PCIe) Endpoint Hard block in an Gen3 x8 configuration along with QDMA for data transfers between the host system memory and the endpoint. The QDMA provides protocol conversion between PCIe transaction layer packets (TLPs) and AXI transactions.The DMA can transfer data between host and the memory controller (DDR) of Endpoint and from the Endpoint DDR to the host.The CPM has an AXI Bridge core for AXI-to-host communication. The downstream AXI4-Lite slaves include user-space registers, which are responsible for a hand-shaking mechanism between the host and the endpoint.

![Pipelines Supported](../../media/pipelines_aib.png)

The APU in the Processing Sytem (PS) consists of two Arm® Cortex®-A72 cores and is configured to run in symmetric multi-processing (SMP) Linux mode in the design. The application running on Linux is responsible for configuring and controlling the Data data path and accelerator.


The APU application controls the following video data paths implemented in a combination of the PS and PL:

* Input pipeline receives video frames into the DDR memory from CPM-QDMA host to card (H2C) Channel.

* Memory-to-memory (M2M) pipeline implementing 2D Filter. Captured video frames are read from DDR memory, processed by the filter, and then written back to memory.

* An output pipeline reads video frames from memory and sends the frames to host via QDMA's card to host (C2H) channel.

The host application on x86 host controls following operations:

* Sends video frames and metadata from a raw video file stored on the host machine to card via H2C Channel
* Recieves incoming processed video frames from card via C2H Channel
* Displays the received frames on a DP monitor connected to host machine by rendering a GUI.
  
The following figure shows an example end-to-end pipeline which could be host as video video source and 2D filter an a prcessor. The video frames are sent back to host and displayed on a DP monitor. The video format in the figure is the output format on each block. Jupyter notebooks are used to display power rail voltages of the device. Details are described in the [Hardware Architecture document](hw_arch_platform_aib.md).

![End to end example pipelines](../../media/end_to_end_pp_aib.png)


Design Components
------------------

<details>
 <summary><b>Hardware components</b></summary>

 * VMK180 Evaluation Kit 
 * A x86 server class host machine

</details>

<details>
 <summary><b>Interfaces and IP</b></summary>

* Video inputs 
   * File (on host)
* Video outputs 
   * DisplayPort (on host)
* Video processing
   * PL based 2D filter Accelerator

* Auxiliary Peripherals
   * QSPI
   * SD
   * I2C
   * UART
   * Ethernet
   * General purpose I/O (GPIO)

</details>

<details>
 <summary><b>Software components</b></summary>

* End Point Components
  * Operating system
     * APU: SMP Linux
  * Linux user space frameworks
     * Jupyter
     * Xilinx run-time (XRT)
* Host components
  * linux User space frameworks
    * QT
    * OpenCV
    * QDMA Driver

</details>

<details>
 <summary><b>Resolution and format supported</b></summary>

* Resolutions
   * 1080p30
   * 2160p30
* Pixel format
   * YUYV

</details>


**Next Steps**

* [Setting up the Board and Application Deployment Tutorial](app_deployment_aib.md)
* Go back to the [VMK180 PCIe TRD start page](../platform2_landing.md)


**References**

* VMK180 Evaluation Board User Guide ([UG1411](https://www.xilinx.com/support/documentation/boards_and_kits/vmk180/ug1411-vmk180-eval-bd.pdf))
* Versal Architecture and Product Data Sheet: Overview([DS950]( https://www.xilinx.com/support/documentation/data_sheets/ds950-versal-overview.pdf))

**License**

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at
[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

<p align="center">Copyright&copy; 2021 Xilinx</p>
