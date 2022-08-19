<table class="sphinxhide">
 <tr>
   <td align="center"><img src="../../media/xilinx-logo.png" width="30%"/><h1>Versal Prime -VMK180 Evaluation Kit PCIe TRD Tutorial</h1>
   </td>
 </tr>
 <tr>
 <td align="center"><h1> Hardware Architecture of the Accelerator </h1>

 </td>
 </tr>
</table>

Hardware Architecture of the Accelerator
=======================================

Processing Pipeline
----------------------

A memory-to-memory (M2M) pipeline reads video frames from memory, does certain processing,
and then writes the processed frames back into memory. A block diagram of the process pipeline
is shown in the following figure.


![](../../media/M2M_Processing_Pipeline_Showing_Hardware_Accelerator_and_DataMotion.png)

The M2M processing pipeline with the 2D convolution filter in the design is entirely generated
by the Vitis™ tool based on a C-code description. The 2D filter function is translated to RTL using
the Vivado® HLS compiler. The data motion network used to transfer video buffers to/from
memory and to program parameters (such as video dimensions and filter coefficients) is inferred
automatically by the v++ compiler within the Vitis tool.

The table below shows utilization numbers after optimization of the hardware design.

**Resource usage of current design**

|xcvm1802-vsva2197|CLB LUTs|BRAM|DSP|URAM|
|----|----|---|----|--|
|Available|899840|967|1968|463|
|Platform|3525|0|0|0|
|Filter2d_pl|14249|84|81|0|
|Total|17774|84|81|0|
|Total %|1.9%|8.6%|4%|0%|


**Next Steps**

* [Software Architecture of the Platform](sw_arch_platform_aib.md)
* Go back to the [VMK180 TRD Multimedia TRD design start page](../platform2_landing.md)


**License**

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at
[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

<p align="center">Copyright&copy; 2021 Xilinx</p>
