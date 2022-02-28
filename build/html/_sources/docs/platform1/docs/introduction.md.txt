<table class="sphinxhide">
 <tr>
   <td align="center"><img src="../../../../_images/xilinx-logo.png" width="30%"/><h1> Versal Prime -VMK180 Evaluation Kit Multimedia TRD Tutorial</h1>
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
------------

The Multimedia TRD application design built on VMK180 Evaluation Kit provides a framework for building and customizing video platforms that consist of three pipeline stages:

* Capture pipeline
* Accelerator/Processing pipeline
* Output pipeline

The design has a platform and integrated accelerator functions. The platform consists of Capture pipeline & Output pipeline. This approach makes the design leaner and provides maximum programmable logic (PL) for the accelerator development. The platform supports capture from MIPI single sensor device, a USB webcam and a file source. The output can be displayed on HDMI monitor or jupyter notebook interface.

The following example Processing functions can be run on this platform

* A user programmable 2D filter in PL
* VP9 decode and demux in application processing unit (APU)


The following figure shows the various pipelines supported by the design.

![Pipelines Supported](../../media/pipelines.png)

The APU in the Processing Sytem (PS) consists of two Arm&reg; Cortex&reg;-A72 cores and is configured to run in symmetric multi-processing (SMP) Linux mode in the  design. The application running on Linux is responsible for configuring and controlling the video pipeline and accelerators using Jupyter notebooks.


The APU application controls the following video data paths implemented in a combination of the PS and PL:

* Capture pipeline capturing video frames into DDR memory from
  * A file on a storage device such as an SD card
  * A USB webcam using the USB interface inside the PS
  * An image sensor connected via MIPI CSI-2 RX through the PL

* Memory-to-memory (M2M) pipeline implementing 2D Filter. Captured video frames are read from DDR memory, processed by the filter, and then written back to memory.

* An output pipeline reads video frames from memory and sends the frames to a sink.
* In this case the sink is a display or Jupyter notebook Application with display interface .
  

The following figure shows an example end-to-end pipeline which could be a single image sensor as the video source, filter 2D for processing. The processed frames are either  displayed via HDMI port or jupyter notebook, as the video sink. The video format in the figure is the output format on each block. Details are described in the [Hardware Architecture document](hw_arch_platform.md).

![End to end example pipelines](../../media/end_to_end_pp.png)

Design Components
------------------

<details>
 <summary><b>Hardware components</b></summary>

  * VMK180 Evaluation Kit
  * [Leopard IMX274 MIPI FMC Card](https://www.leopardimaging.com/product/csi-2-mipi-modules-i-pex/li-imx274mipi-fmc)
  * USB webcam (optional)


</details>

<details>
 <summary><b>Interfaces and IP</b></summary>

* Video inputs
   * File
   * USB webcam
   * MIPI CSI-2 Rx
* Video outputs
   * HDMI
   * File
   * Ethernet - Jupyter notebook
* Video processing
   * VP9 decode
   * PL based 2D filter Accelerator
* Auxiliary Peripherals
   * SD
   * I2C
   * UART
   * Ethernet
   * General purpose I/O (GPIO)

</details>

<details>
 <summary><b>Software components</b></summary>

* Operating system
   * APU: SMP Linux
* Linux kernel subsystems
   * Video source: Video4 Linux (V4L2)
   * Display: Direct Rendering Manager (DRM)/Kernel Mode Setting (KMS)
* Linux user space frameworks
   * Jupyter
   * GStreamer 
   * Xilinx run-time (XRT)

 </details>

 <details>
 <summary><b>Resolution and Format Supported</b></summary>

* Resolutions
   * MIPI: 1080p60,2160p60
   * USB Camera:720p,1080P (Whatever best the camera supports)
   * Lower resolution and lower frame rates for file I/O
* Pixel format
   * YUVY8 
 </details>
&nbsp;

**Next Steps**

* [Setting up the Board and Application Deployment](app_deployment.md)
* Go back to the [VMK180 TRD Multimedia TRD design start page](../platform1_landing.md)

**References**

* VMK180 Evaluation Board User Guide ([UG1411](https://www.xilinx.com/support/documentation/boards_and_kits/vmk180/ug1411-vmk180-eval-bd.pdf))
* Versal Architecture and Product Data Sheet: Overview([DS950]( https://www.xilinx.com/support/documentation/data_sheets/ds950-versal-overview.pdf))


**License**

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at
[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)


Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

<p align="center">Copyright&copy; 2021 Xilinx</p>
