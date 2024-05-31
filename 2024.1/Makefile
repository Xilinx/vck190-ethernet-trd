# (C) Copyright 2022 Xilinx, Inc.
# SPDX-License-Identifier: Apache-2.0

CP = cp -f

PWD = $(shell readlink -f .)

design_list = vck190_ethernet_platform 
 
VIVDIR = $(PWD)/vivado

PLNX_DIR = petalinux/xilinx-vck190-trd
PLNX_WIC = $(PLNX_DIR)/images/linux/petalinux-sdimage.wic

VIVADO_DIR = $(VIVDIR)/vck190_ethernet_platform/project
VIVADO_XSA_PLNX = $(VIVADO_DIR)/mrmac_subsys_wrapper.xsa

VIVA_XSA_top = $(VIVDIR)/vck190_ethernet_platform/project/mrmac_subsys_wrapper.xsa

.PHONY: help
help:
	@echo 'Usage:'
	@echo ''
	@echo '  make sdcard  YES=<val>'
	@echo '    Generate an SD card wic image using PetaLinux.'
	@echo ''
	@echo '    YES: optional param to accept SDK changes if set to 1 (default: 0)'
	@echo ''
	@echo '	 make vivado_design design=<val> JOBS=<n>'
	@echo '    Build the Vivado xsa.'
	@echo '    Valid options for design: ${design_list}.'
	@echo '    JOBS: optional param to set number of synthesis jobs (default 8)'
	@echo ''
	@echo '  make docs'
	@echo '    Generate html documentation using sphinx'
	@echo ''
	@echo '  make clean'
	@echo '    Clean runs'
	@echo ''

.PHONY: all
all: sdcard

.PHONY: sdcard
sdcard: $(PLNX_WIC)
$(PLNX_WIC): $(PLNX_DIR) vivado_design
	@echo 'Build PetaLinux wic image'
	$(MAKE) -C $(PLNX_DIR) wic 

$(PLNX_DIR):
	$(MAKE) -C petalinux project


.PHONY: vivado_design
vivado_design: $(VIVA_XSA_top)
$(VIVA_XSA_top):
	  make -C $(VIVDIR) design_xsa design=$(design_list) 
	 @echo 'Build PetaLinux wic image for $(VIVA_XSA_top)'  
	 
	
.PHONY: docs
docs:
	$(MAKE) -C docs html


.PHONY: clean
clean:
	$(MAKE) -C $(PLNX_DIR) clean
	

