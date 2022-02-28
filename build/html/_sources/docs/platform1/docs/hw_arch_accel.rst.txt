
Hardware Architecture of the Accelerator
========================================

Processing Pipeline
-------------------

A memory-to-memory (M2M) pipeline reads video frames from memory, does certain processing,
and then writes the processed frames back into memory. A block diagram of the process pipeline
is shown in the following figure.

.. image:: ../../media/M2M_Processing_Pipeline_Showing_Hardware_Accelerator_and_DataMotion.png
   :width: 800

The M2M processing pipeline with the 2D convolution filter in the design is entirely generated
by the Vitis™ tool based on a C-code description. The 2D filter function is translated to RTL using
the Vivado® HLS compiler. The data motion network used to transfer video buffers to/from
memory and to program parameters (such as video dimensions and filter coefficients) is inferred
automatically by the v++ compiler within the Vitis tool.

Vitis integrates the pre-processing IP and DPU IP in the platform. The table below shows utilization numbers after optimization of the hardware design.

**Resource usage of current design**

.. csv-table:: **Table 1: Key Component Clock Frequencies**
	:file: ../../../tables/resource_accel1.csv
	:widths: 20, 20, 20, 20, 20 
	:header-rows: 1


**Next Steps**

.. toctree::
   :maxdepth: 1


   app_deployment.md



**License**

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at
[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)


Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.


