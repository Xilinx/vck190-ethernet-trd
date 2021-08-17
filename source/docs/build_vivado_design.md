<table class="sphinxhide">
 <tr>
   <td align="center"><img src="media/xilinx-logo.png" width="30%"/><h1> Versal Prime-VCK190 Evaluation Kit Tutorial</h1>
   </td>
 </tr>
 <tr>
 <td align="center"><h1>Using Vivado to Build the Hardware Design</h1>

 </td>
 </tr>
</table>

Using Vivado to Build the Hardware Design
================================================

### Introduction
 
This tutorial shows how to build the hardware design for applications running on Versal VCK190.

### Prerequisites

* Vivado Design Suite 2021.1

### Accessing the Tutorial Reference Files

>**Note**: Skip the following steps if the design files have already been cloned and extracted to a working repository

1. Download the TRD package from web.

2. Navigate to the `vck190-ethernet-trd-2021.1` which is the working directory.

### Generating an XSA

1. Go to the platform directory specific to the application

   ```
   cd $working_dir/vivado/vck190_ethernet_platform
   ```

   Applications and their corresponding platform names are listed in the table below

   |Application |Platform name|
   |----|----|
   |Ethernet TRD |vck190_ethernet_platform|


2. To build the XSA, Source Vivado and run the following command. The Makefile uses scripts/main.tcl file to create a Vivado project, populate the block design and finally build a XSA. The XSA generation may take couple of hours depending on the system specification

   ```
   make xsa
   ```

3. The generated XSA will be located at:

   ```
   $working_dir/vivado/vck190_ethernet_platform/project/mrmac_subsys_wrapper.xsa
   ```

>**Note**: Steps to generate xsa from top make file:
   1. Navigate to the `vck190-ethernet-trd-2021.1` which is the working directory
 
  ```
   make vivado_design design=<Platform name> JOBS=<n>
 ```


### Modifying the Vivado design and creating a new XSA

>**Note**: The steps below are optional and are required only if you need to change the platform design. 

1. Go to the directory specific to the platform design

   ```
   cd $working_dir/vivado/vck190_ethernet_platform/
   ```

2. To open the Vivado project, first open the Vivado GUI, then run the following command from the Vivado tcl console:

   ```
   open_project ./project/mrmac_subsys.xpr
   ```

3. In the Flow Navigator pane on the left-hand side under IP integrator, click on Open Block Design. An IP integrator block design becomes visible that contains the Processing System (PS) IP and other PL IPs.

4. In the Flow Navigator pane on the left-hand side under Program and Debug, click on Generate Device Image. The device image (pdi) for the design will be generated and available at $working_dir/vivado/<platform_name>/projec/impl_1/mrmac_subsys_wrapper.pdi.

To create the XSA,

5.	From the Vivado toolbar, select File → Export→ Export Hardware.

The Export Hardware dialog box opens.

	Choose Include device image and click Next.

	Provide the name for the exported file as mrmac_subsys_wrapper and use the default location to save the file. Click Next.

A warning message appears if a Hardware Module has already been exported. Click Yes to overwrite the existing XSA file, if the overwrite message is displayed.

	Click Finish.


### Next Steps

* [Building a petalinux image](build_petalinux.md)
* Go back to the [VCK190 Targeted Reference Designs start page](../index.html)

### References

For more information on how to setup Platform Interfaces refer to Xilinx Vitis Unified Software Platform Documentation [UG1393](https://www.xilinx.com/support/documentation/sw_manuals/xilinx2020_2/ug1393-vitis-application-acceleration.pdf)

## License

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at
[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)


Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

<p align="center">Copyright&copy; 2021 Xilinx</p>
