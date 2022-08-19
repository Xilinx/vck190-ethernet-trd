
Creating a Vitis Platform
=========================

Introduction
--------------------

This tutorial shows how to build a Platform for applications running on VMK180 Evaluation Kit.

Prerequisites
--------------------

* Vitis Unified Software Platform 2021.1

Accessing the Tutorial Reference Files
-------------------------------------------
> **Note**: Skip the following steps if the design files have already been cloned and extracted to a working repository

1. To access the reference files, type the following into a terminal:

   ```
   git clone --recursive https://github.com/Xilinx/vmk180-trd.git
   ```

2. Navigate to the `vmk180-trd` which is the working directory.

Generating an Vitis Extensible platform
--------------------------------------------
1. Go to the working directory

   ```
   cd $working_dir/
   ```

2. To build the platform, run the following command. The Makefile calls a lower level Makefile to generate a platform. If an XSA is not already available it builds that as well.

   ```
   make platform PFM=<platform_name>
   ```

   Applications and their corresponding platforms are listed in the table below

   |Application |Platform name (PFM)|
   |----|----|
   |Multimedia TRD |vmk180_multimedia_platform|
   |PCIe TRD |vmk180_pcie_platform|

3. The generated platform will be located at

   ```
   $working_dir/platforms/xilinx_<platform_name>_<version_number>
   ```

   The xpfm file in the above directory will be used as input when building the Vitis accelerator projects. It exposes all the essential Platform Interfaces like Clock, Interrupts, Master AXI interfaces and Slave AXI interfaces for the accelerator to connect to.

> **Note**: The software components (boot, smp_linux etc) in this platform are empty. The software components will be generated later when building Petalinux.


**Next Step**

* [Integrating an overlay into the platform](build_accel.md)
* Go back to the [VMK180 Targeted Reference Designs start page](../index.html)

**References**

For more information on how to generate a Platform refer to Xilinx Vitis Unified Software Platform Documentation [UG1393](https://www.xilinx.com/support/documentation/sw_manuals/xilinx2020_2/ug1393-vitis-application-acceleration.pdf)

**License**

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at
[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

<p align="center">Copyright&copy; 2021 Xilinx</p>
