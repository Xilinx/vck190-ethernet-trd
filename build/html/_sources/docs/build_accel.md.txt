<table class="sphinxhide">
 <tr>
   <td align="center"><img src="media/xilinx-logo.png" width="30%"/><h1> Versal Prime -VMK180 Evaluation Kit Tutorial</h1>
   </td>
 </tr>
 <tr>
 <td align="center"><h1>Integrating the overlay into the Platform</h1>

 </td>
 </tr>
</table>

Integrating the overlay into the Platform
================================================

Introduction:
--------------
This document provides the steps to integrate the overlay consisting of accelerated functions into the platform. 

Prerequisites:
--------------
* Vitis Unified Software Platform 2021.1

Accessing the Tutorial Reference Files
--------------------------------------
>**Note**: Skip the following steps if the design files have already been cloned and extracted to a working repository

1. To access the reference files, type the following into a terminal: 

   ```
   git clone --recursive https://github.com/Xilinx/vmk180-trd.git
   ```

2. Navigate to the `vmk180-trd` which is the working directory.

Integrating an overlay (accelerator functions) into a Vitis Extensible platform
-------------------------------------------------------------------------------------
1. Go to the working directory 

   ```
   cd $working_dir/
   ``` 

2. To compile and integrate the overlay into the platform, run the following command. The Makefile calls a lower level Makefile to run Vitis. If a platform is not already available it builds that as well. 

   ```
   make overlay PFM=<val> OVERLAY=<val> 
   ```

   Overlay currently supported are listed below

   |Application name |Platform name(PFM)| Overlay(OVERLAY) Supported |
   |----|----|----|
   |Multimedia TRD |vmk180_multimedia_platform| filter2d_pl |
   |PCIe TRD |vmk180_pcie_platform| filter2d_pl |
   


3. The generated XSA and xclbin will be located at 

   ```
   $working_dir/overlays/examples/filter2d_pl/binary_container_1.xsa 
   $working_dir/overlays/examples/filter2d_pl/binary_container_1.xclbin
   ```

   The xclbin and XSA generation may take couple of hours depending on the system specification. They will be used to build the Petaliunx image

**Next Step**

* [Building a Petalinux Image](build_petalinux.md)
* Go back to the [VMK180 Targeted Reference Designs start page](../index.html)

**References**

For more information on how to integrate an accelerator into a platform refer to Xilinx Vitis Unified Software Platform Documentation [UG1393](https://www.xilinx.com/support/documentation/sw_manuals/xilinx2020_2/ug1393-vitis-application-acceleration.pdf).

**License**

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at
[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)


Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

<p align="center">Copyright&copy; 2021 Xilinx</p>
