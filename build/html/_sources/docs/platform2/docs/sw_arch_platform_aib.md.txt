<table class="sphinxhide">
 <tr>
   <td align="center"><img src="../../media/xilinx-logo.png" width="30%"/><h1>Versal Prime -VMK180 Evaluation Kit PCIe TRD Tutorial</h1>
   </td>
 </tr>
 <tr>
 <td align="center"><h1> Software Architecture of the Platform </h1>

 </td>
 </tr>
</table>

Software Architecture of the Platform
======================================

Introduction
-------------------
 This document describes the software architecture of vmk180 pcie TRD.

Software Platform and Dependencies
-------------------------------------
An PS application running on the end receives control information using the PCIe BAR map memory and data through the QDMA. 2dfilter accelerater in the PL recieves this data, processes it and sends processed content back to the host.

Details on how the control information & data is interpreted between the x86 host and the target is shown in the following figure.

![Software Architecture](../../media/PCIe_ep_sw_Architecture.JPG)

Data is transferred between the host and the target using the QDMA. QDMA device drivers are installed on the host, are used to configure the QDMA IP on the endpoint and to initiate data transfer from the host.
The host reads the media file from the disk, sends control information to the endpoint, also sends the media file to the endpoint using DMA. After receiving filtered output back from the endpoint, the data is displayed on the host monitor.
At the device side, the OpenCL-based application is used to receive the data, filter it, and send the data back to the host.


Details on Software stack with Application layer, Middleware, kernel and hardware components from Host and device perspective is as follows.

Host Software components:
------------------------------
In the Host there is an application running, which interacts with DMA drivers which are provided as part of package to initiate DMA for Data transfer between HOST and device. A dedicated BAR is used to send control information between Host and the Device and vice-versa. After recieving the data from device, content is displayed on the monitor.

Device Software components:
------------------------------
In the device, there is an opencl based application which loads the xclbin file using XRT and gets control information with the help of EP pcie driver. Depending on the control information, uses ZOCL to allocate buffers of required size and requests for data transfer from the Host. After recieving the data it sends data through 2d filter( filter IP created using the Vitis™ flow in the PL) and sends back filtered content back to the Host. To achieve better performance instead of buffer copy, endpoint drivers uses DMA-BUF framework available in the linux kernel. With the help of DMA-BUF framework zero copy is achieved by just transferring buffer handles between different SW components.

![Software Stack](../../media/Software_flow_diagram_pcie.png)

**Next Step**

You can choose any of the following next steps:
* Read [Hardware Architecture of the Platform](hw_arch_platform_aib.md)
* Go back to the [VMK180 PCIe TRD start page](../platform2_landing.md)


**License**

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at
[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

<p align="center">Copyright&copy; 2021 Xilinx</p>
