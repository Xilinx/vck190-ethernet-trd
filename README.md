<table class="sphinxhide">
 <tr>
   <td align="center"><img src="https://raw.githubusercontent.com/Xilinx/Image-Collateral/main/xilinx-logo.png" width="30%"/><h1> Versal AI Core - VCK190 Ethernet Target Reference Design </h1>
   </td>
 </tr>
</table>



The VCK190 TRD consists of a platform to demonstrate various aspects of the design and functionality of various Board interfaces present on the VCK190 Evaluation Board. A platform is a Vivado design plus a corresponding PetaLinux BSP and image that includes the required kernel drivers and user-space libraries to exercise those interfaces. The reference design currently supports the VCK190 Production board. 

The following is a list of Platform Designs available in 2021.2:
| Platform Name  | Description | Links |
| ---------------|------------- | -------------- |
| Platform: Ethernet TRD    | The Ethernet platform demonstrates the functionality of the Multi Rate Media Access Control IP (MRMAC) used for transfer of Ethernet and Precision Time Protocol (PTP) packets from the Network Interface Card (NIC) on a host machine to the board and vice versa. The MRMAC IP is present in the programmable logic of the FPGA design. The Programmable Logic also has PTP Packet Processors in both Transmit and Receive Direction. |   <ul><li><a href="https://xilinx.github.io/vck190-ethernet-trd">Documentation</a></li><li><a href="https://www.xilinx.com/member/forms/download/design-license.html?filename=vck190_ethernet_trd_prebuilt_2021.2.zip"> 2021.2 Pre-Built Package </a></li><li><a href="https://www.xilinx.com/member/forms/download/xef.html?filename=vck190_ethernet_trd_prebuilt_2021.1.zip"> 2021.1 Pre-Built Package </a></li><li><a href="https://www.xilinx.com/member/forms/download/trd-license-versal.html?filename=vck190-ethernet-trd-2021.2.zip"> 2021.2 Source Files </a></li><li><a href="https://www.xilinx.com/member/forms/download/design-license-xef.html?filename=vck190-ethernet-trd-2021.1.zip"> 2021.1 Source Files </a></li></ul>

For more information about the VCK190 Production Board, see [Versal AI Core Series VCK190 Evaluation Kit](https://www.xilinx.com/products/boards-and-kits/vck190.html)

## Xilinx Support

For issue reporting and feature requests, please file a GitHub Issue. For questions go to [forums.xilinx.com](http://forums.xilinx.com/).

## Design Licenses

The design includes files licensed by Xilinx and third parties under the terms
of the GNU General Public License, GNU Lesser General Public License,
BSD License, and other licenses. The Package includes one
zip file named ``sources.zip`` containing the complete set of design source
files and one zip file named ``licenses.zip`` containing licenses extracted from
the design source files. You are solely responsible for checking any files you
use for notices and licenses and for complying with any terms applicable to your
use of the design and any third party files supplied with the design.

To generate licenses and sources for a Petalinux BSP use following command. 

``petalinux-build -a``


To obtain  Xilinx image.ub  license files:

Licenses for image.ub files are included in the ``/usr/share/licenses`` directory when the image file is built.
The DNF package manager can be used to list all packages in the image, as well as download sources for all packages.

## License

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at
[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

<p align="center">&copy; Copyright 2021 Xilinx, Inc.</p>
