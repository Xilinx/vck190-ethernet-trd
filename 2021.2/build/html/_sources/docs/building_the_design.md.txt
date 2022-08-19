<table class="sphinxhide">
 <tr>
   <td align="center"><img src="media/xilinx-logo.png" width="30%"/><h1> Versal Prime -VMK180 Evaluation Kit Tutorial</h1>
   </td>
 </tr>
 <tr>
 <td align="center"><h1>Tool Flow Overview</h1>

 </td>
 </tr>
</table>

Tool Flow Overview
======================
## Introduction
 
This document provides an overview of how the hardware and software components are built for an application.

## Tool Flow

The overall tool flow is outlined in the figure below. Each step in the tool flow is explained in detail in subsequent build tutorials.

![Tool Flow](./media/tool-flow.jpg)

At a high level, the builds steps are as follows:

1. Vivado platform design: The Vivado design is augmented with platform parameters that describe the meta data and physical interfaces available to the Vitis compiler for stitching in PL kernels.

2. Platform creation: The XSCT utility is used to create an extensible platform whose main component is the XSA created by Vivado in step 1.

3. PL kernels: The Vitis compiler is used to compile PL accelerator kernels from C/C++ using high-level synthesis (HLS) or to package RTL kernels. The kernels are compiled into xo files and consumed by the Vitis linker in the next step.
Vitis linker and packager: The Vitis linker integrates the PL kernels into the platform and implements the design. It generates a new device image (bitfile) as well as xclbin file containing meta data information about the PL kernels. 

4. PetaLinux BSP: The PetaLinux BSP is a collection of yocto meta layers and recipes that are used to generate a bootable SD card image including boot image components (BOOT.BIN), Linux image (image.ub) and external rootf filesystem partition (rootfs). The rootfs contains a collection of software packages required to run the target applications. 

### Accessing the Tutorial Reference Files

1. To access the reference files, type the following into a terminal: 

  ```
  git clone --recursive https://github.com/Xilinx/vmk180-trd.git
  ```

## Directory Structure

The directory structure of the repository is shown below
<pre>
vmk180-trd
+-- Makefile
+-- overlays 
¦   +-- examples 
¦   ¦   +-- filter2d_pl
¦   +-- Vitis_Libraries
+-- pcie_host_package
¦   +-- qdma
+-- petalinux
¦   +-- xilinx-vmk180-trd
¦   +-- Makefile
+-- platforms
¦   +-- Makefile
¦   +-- scripts
¦   +-- vivado
¦   ¦   +-- vmk180_multimedia_platform
¦   ¦   +-- vmk180_pcie_platform
+-- README

</pre>

## Next Steps

  * [Building the Hardware design using Vivado](build_vivado_design.md)
  * Go back to the [VMK180 Targeted Reference Designs start page](../index.html)


## License

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at
[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

<p align="center">Copyright&copy; 2021 Xilinx</p>
