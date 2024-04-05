

// Presets
	var tonnage = 100;
	var layout_type = 'Standard',
			layout_cost_mod = 1,
			layout_agility_mod = 1,
			layout_speed_mod = 1,
			layout_hull_mod = 1;
	var manufacturer_type = 'Infinite Horizons',
			manufacturer_style = manufacturer_type.replace(/\s+/g, '-').toLowerCase().replaceAll("[^A-Za-z0-9]","");
			manufacturer_cost_mod = 1, 
			manufacturer_speed_mod = 1,
			manufacturer_hull_mod = 1,
			manufacturer_structure_mod = 1.
			manufacturer_weapon_cost_mod = 1,
			manufacturer_power_cost_mod = 1,
			manufacturer_sensor_cost_mod = 0.8,
			manufacturer_comms_cost_mod = 0.8,
			manufacturer_software_cost_mod = 1,
			manufacturer_room_cost_mod = 1,
			manufacturer_armor_cost_mod = 1,
			manufacturer_room_cost_mod = 1,
			manufacturer_mDrive_cost_mod = 0.8,
			manufacturer_kinetic_dr_mod = 0,
			manufacturer_energy_dr_mod = 0,
			manufacturer_explosive_dr_mod = 0;
			$('body').attr('id', manufacturer_style);
	var tech_level = 9,
			tech_mod;
	var interior_type = 'Clean',
			interior_cost_mod = 500,
			interior_tonnage = 1,
			interior_structure_mod = 1;
	var air_lock_count = 1,
			air_lock_tonnage = 2;
	var fuel_tonnage = 30,
			fuel_cost,
			fuel_use_total = 4,
			fuel_collector = false,
			fuel_partitions = false,
			fuel_refinery = false,
			fc_cost = 0,
			fc_tonnage = 0,
			fp_cost = 0,
			fp_tonnage = 0,
			fr_cost = 0,
			fr_tonnage = 0;
	var power_size = '1',
			power_count = '1',
			capacitance_module_count = 0,
			power_type = 'Fusion Generator',
			base_power,
			power_regen,
			power_tonnage,
			power_cost,
			power_fuel_per_week,
			power_total_capacity,
			power_total_cost,
			power_total_tonnage,
			power_heat_generation = 1,
			power_operations = 1;
	var mDrive_type = 'Directed Fusion',
			mDrive_count = 1,
			mDrive_cost = 20000,
			mDrive_tonnage = 3,
			mDrive_power_use = 1,
			mDrive_fuel_use = 1,
			mDrive_agility_raw = 1.5,
			mDrive_agility_fixed = 1,
			mDrive_thrust_raw = 5,
			mDrive_thrust_fixed = 5,
			mDrive_heat_generation = 2;
	var max_jump_distance = 1,
			jump_tonnage,
			jump_power_cost,
			jump_fuel_cost,
			jump_drive_cost,
			jump_heat_generation = 4;
	var heat_sink_count = 0,
			heat_sink_cost = 0,
			heat_sink_tonnage = 0,
			heat_capacity = 5,
			total_heat_generation = 7,
			heat_generation = 2;
	var crew_size = 1,
			crew_space = 2,
			additional_life_support = 0,
			life_support_cost,
			life_support_tonnage,
			life_support_value,
			stamina = 10;
	var room_total_cost = 0,
			cargo_bay_count = 10,
			cargo_bay_tonnage = 10,
			cargo_bay_cost = 10000,
			ships_locker_count = 1,
			ships_locker_tonnage = 2,
			ships_locker_cost = 5000,
			common_area_count = 0,
			common_area_tonnage = 0,
			common_area_cost = 0,
			state_room_count = 1,
			state_room_tonnage = 4,
			state_room_cost = 1000,
			drone_bay_count = 0,
			drone_bay_tonnage = 0,
			drone_bay_cost = 0,
			barracks_count = 0,
			barracks_tonnage = 0,
			barracks_cost = 0,
			medical_bay_count = 0,
			medical_bay_tonnage = 0,
			medical_bay_cost = 0,
			science_bay_count = 0,
			science_bay_tonnage = 0,
			science_bay_cost = 0,
			technical_bay_count = 0,
			technical_bay_tonnage = 0,
			technical_bay_cost = 0,
			weapons_bay_count = 0,
			weapons_bay_tonnage = 0,
			weapons_bay_cost = 0,
			launch_bay_count = 0,
			launch_bay_tonnage = 0,
			launch_bay_cost = 0,
			low_berths_count = 0,
			low_berths_cost = 0,
			low_berths_tonnage = 0,
			escape_pod_count = 0,
			escape_pod_cost = 0,
			escape_pod_tonnage = 0,
			garden_count = 0,
			garden_cost = 0,
			garden_tonnage = 0;
	var bridge_type = 'Single Pilot',
			bridge_tonnage,
			bridge_cost,
			bridge_seats = 1,
			bridge_description = 'Pilot',
			processor_used = 0,
			sensor_total_cost = 20000,
			sensor_total_processor = 1,
			sensor_total_power = 0;
	var computer_type = 'Civilian',
			computer_cost = 15000,
			computer_processor = 5,
			additional_processors = 0,
			additional_processor_cost = 0,
			total_processor = 5,
			computer_total_cost = 15000;
	var sofware_cost = 0,
			software_processor_useage = 0,
			library_software = true,
			interface_software = true,
			security_tracking_software= false,
				security_tracking_cost = 0,
				security_tracking_processor = 0,
				security_tracking_rank = 0,
			autopilot_software = false,
				autopilot_cost = 0,
				autopilot_processor = 0,
			combat_automation_software = false,
				combat_automation_cost = 0,
				combat_automation_processor = 0,
			jump_control_software = false,
				jump_control_cost = 0,
				jump_control_processor = 0,
			intrusion_software = false,
				intrusion_cost = 0,
				intrusion_processor = 0,
			network_software = 0,
				network_cost = 0,
				network_processor = 0,
			expert_software = false,
				expert_cost = 0,
				expert_processor = 0,
			virtual_intelligence_software = false,
				virtual_intelligence_cost = 0,
				virtual_intelligence_processor = 0,
			local_network_software = false,
				local_cost = 0,
				local_processor = 0,
			diagnostics_software = false,
				diagnostics_cost = 0,
				diagnostics_processor = 0;
	var comms_type = 'Civilian',
			comms_cost = 5000,
			comms_security = 6,
			comms_network = false,
			comms_range = 25000,
			comms_processor = 1,
			long_range_comms = false,
			lr_comms_cost = 0,
			lr_comms_processor = 0,
			lr_comms_tonnage = 0,
			comms_total_power = 0;
	var multispectrum = true,
			multispectrum_cost = 1000
			multispectrum_power = 0,
			multispectrum_processor = 0,
			radar = true,
			radar_cost = 10000,
			radar_power = 1,
			radar_processor = 0,
			lidar = false,
			lidar_cost = 0,
			lidar_power = 0,
			lidar_processor = 0
			densitrometer = false,
			densitrometer_cost = 0,
			densitrometer_power = 0,
			densitrometer_processor = 0,
			bioscanner = false,
			bioscanner_cost = 0,
			bioscanner_power = 0,
			bioscanner_processor = 0,
			jammer = false,
			jammer_cost = 0,
			jammer_power = 0,
			jammer_processor = 0;
	var armor_type = 'None',
			armor_tonnage = 0,
			armor_cost = 0,
			armor_kinetic_dr = 0,
			armor_energy_dr = 0,
			armor_rad_dr = 0,
			armor_explosive_dr = 0,
			reinforce_kinetic_dr = 0,
			reinforce_energy_dr = 0,
			reinforce_rad_dr = 0,
			reinforce_explosive_dr = 0,
			reinforce_cost = 0;
	var coating_type = 'None',
			coating_cost = 0,
			coating_kinetic_dr = 0,
			coating_energy_dr = 0,
			coating_rad_dr = 0,
			coating_explosive_dr = 0,
			coating_heat_reduction = 0,
			coating_description = 'No coating applied.';
	var weapon_total_tonnage = 0,
			weapon_total_cost = 0,
			// AC 2
				ac2_count = 0,
				ac2_cost = 0,
				ac2_tonnage = 0,
				ac2_power = 0,
			// AC 5
				ac5_count = 0,
				ac5_cost = 0,
				ac5_tonnage = 0,
				ac5_power = 0,
			// AC 10
				ac10_count = 0,
				ac10_cost = 0,
				ac10_tonnage = 0,
				ac10_power = 0,
			// AC 20
				ac20_count = 0,
				ac20_cost = 0,
				ac20_tonnage = 0,
				ac20_power = 0,
			// RG 1
				rg1_count = 0,
				rg1_cost = 0,
				rg1_tonnage = 0,
				rg1_power = 0,
			// RG 3
				rg3_count = 0,
				rg3_cost = 0,
				rg3_tonnage = 0,
				rg3_power = 0,
			// RG 5
				rg5_count = 0,
				rg5_cost = 0,
				rg5_tonnage = 0,
				rg5_power = 0,
			// RG 8
				rg8_count = 0,
				rg8_cost = 0,
				rg8_tonnage = 0,
				rg8_power = 0,
			// OR 4
				or4_count = 0,
				or4_cost = 0,
				or4_tonnage = 0,
				or4_power = 0,
			// OR 8
				or8_count = 0,
				or8_cost = 0,
				or8_tonnage = 0,
				or8_power = 0,
			// OR 16
				or16_count = 0,
				or16_cost = 0,
				or16_tonnage = 0,
				or16_power = 0,
			// OR 32
				or32_count = 0,
				or32_cost = 0,
				or32_tonnage = 0,
				or32_power = 0,
			// SPL
				spl_count = 0,
				spl_cost = 0,
				spl_tonnage = 0,
				spl_power = 0,
			// MPL
				mpl_count = 0,
				mpl_cost = 0,
				mpl_tonnage = 0,
				mpl_power = 0,
			// LPL
				lpl_count = 0,
				lpl_cost = 0,
				lpl_tonnage = 0,
				lpl_power = 0,
			// SIL
				sil_count = 0,
				sil_cost = 0,
				sil_tonnage = 0,
				sil_power = 0,
			// MIL
				mil_count = 0,
				mil_cost = 0,
				mil_tonnage = 0,
				mil_power = 0,
			// LIL
				lil_count = 0,
				lil_cost = 0,
				lil_tonnage = 0,
				lil_power = 0,
			// SEL
				sel_count = 0,
				sel_cost = 0,
				sel_tonnage = 0,
				sel_power = 0,
			// MEL
				mel_count = 0,
				mel_cost = 0,
				mel_tonnage = 0,
				mel_power = 0,
			// LEL
				lel_count = 0,
				lel_cost = 0,
				lel_tonnage = 0,
				lel_power = 0,
			// PB
				pb_count = 0,
				pb_cost = 0,
				pb_tonnage = 0,
				pb_power = 0,
			// PBA
				pba_count = 0,
				pba_cost = 0,
				pba_tonnage = 0,
				pba_power = 0,
			// SRM 2
				srm2_count = 0,
				srm2_cost = 0,
				srm2_tonnage = 0,
				srm2_power = 0,
			// SRM 4
				srm4_count = 0,
				srm4_cost = 0,
				srm4_tonnage = 0,
				srm4_power = 0,
			// SRM 6
				srm6_count = 0,
				srm6_cost = 0,
				srm6_tonnage = 0,
				srm6_power = 0,
			// SRM 8
				srm8_count = 0,
				srm8_cost = 0,
				srm8_tonnage = 0,
				srm8_power = 0,
			// LRM 5
				lrm5_count = 0,
				lrm5_cost = 0,
				lrm5_tonnage = 0,
				lrm5_power = 0,
			// LRM 10
				lrm10_count = 0,
				lrm10_cost = 0,
				lrm10_tonnage = 0,
				lrm10_power = 0,
			// LRM 15
				lrm15_count = 0,
				lrm15_cost = 0,
				lrm15_tonnage = 0,
				lrm15_power = 0,
			// LRM 20
				lrm20_count = 0,
				lrm20_cost = 0,
				lrm20_tonnage = 0,
				lrm20_power = 0,
			// TT
				tt_count = 0,
				tt_cost = 0,
				tt_tonnage = 0,
				tt_power = 0,
			// TTA
				tta_count = 0,
				tta_cost = 0,
				tta_tonnage = 0,
				tta_power = 0,
			// SC
				sc_count = 0,
				sc_cost = 0,
				sc_tonnage = 0,
				sc_power = 0,
			// SCA
				sca_count = 0,
				sca_cost = 0,
				sca_tonnage = 0,
				sca_power = 0,
			// SPDL
				spdl_count = 0,
				spdl_cost = 0,
				spdl_tonnage = 0,
				spdl_power = 0,
			// MPDL
				mpdl_count = 0,
				mpdl_cost = 0,
				mpdl_tonnage = 0,
				mpdl_power = 0,
			// LPDL
				lpdl_count = 0,
				lpdl_cost = 0,
				lpdl_tonnage = 0,
				lpdl_power = 0;
	var designation = "100 dTon TL 9 Standard Infinite Horizons Civilian Ship",
			average_type,
			cost,
			upkeep,
			monthly,
			tonnage_used,
			remaining_tonnage,
			power,
			hull,
			structure,
			agility,
			kinetic_dr,
			energy_dr,
			rad_dr,
			explosive_dr;

	// Mods
	var cyber_traveller,
				jump_cost_mod,
				tech_limit;

$(document).ready(function(){

// Functions

	// Output Tab Switcher
		$('#output-tabs .tab-item').on('click', function(){
			let category = '#' + $(this).attr('id') + '-group';
			if ($(this).hasClass('active') == false) {
				$('.output-section').removeClass('active');
				$('#output-tabs .tab-item').removeClass('active');

				$(category).addClass('active');
				$(this).addClass('active');
			}

		});

		$('#input-tabs .tab-item').on('click', function(){
			let info_group = '#' + $(this).attr('id') + '-group';
			if ($(this).hasClass('active') == false) {
				$('#ship-builder-form .section-group').removeClass('active');
				$('#input-tabs .tab-item').removeClass('active');
				$(info_group).addClass('active');
				$(this).addClass('active');
			}
		});

	// Comma Separated Digits
		$.fn.digits = function(){ 
		return this.each(function(){ 
				$(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
			})
		}

		// $('h4').on('click', function(){
		// 	$(this).next().slideToggle(300, function(){
		// 	});
		// 	$(this).find('.section-status').text(function(){
		// 		$(this).text() == '-' ? $(this).text('+') : $(this).text('-');
		// 	});
		// });

	// Action Show/Hide
		$('.action-title').on('click', function(){
			if ($(this).hasClass('expanded') == true) {
				$(this).find('.action-status').text('+');	
				$(this).next('.action-details').hide();
				$(this).removeClass('expanded');
			} else {
				$(this).find('.action-status').text('-');	
				$(this).addClass('expanded');
				$(this).next('.action-details').show();
			}
		});

	// Sidebar Show/Hide
		let sidebar_status = true;
		$('#sidebar-controls').on('click', function(){
			if (sidebar_status == false) {
				sidebar_status = true;
				$('.output').css('right', '0%');
				$('.content, header').addClass('half-width');
				$('#sidebar-status').text('||');
			} else {
				sidebar_status = false
				$('.output').css('right', '-50%');
				$('.content, header').removeClass('half-width');
				$('#sidebar-status').text('|');
			}
		});

// Form Changes
	$('#ship-builder-form').on('load change', function(){

		// Mods
			cyber_traveller = $('#cyber-traveller');
			if (cyber_traveller.is(':checked')) {
				
				jump_cost_mod = 100;
				tech_limit = 12;
				$('#tech-level').attr('max', '12');
				console.log('cyber traveller only');
			} else {
				jump_basis = 1;
				jump_cost_mod = 1;
				tech_limit = 16;
				$('#tech-level').attr('max', '16');
				console.log('regular traveller ships');
			}

		// Tonnage
			tonnage = parseInt($('#tonnage').val());

		// Layout
			layout_type = $('#layout-type').val();
			if (layout_type == 'Standard') {
				layout_cost_mod = 1;
				layout_agility_mod = 1;
				layout_speed_mod = 1;
				layout_hull_mod = 1;
				$('.shape').removeClass('distributed-shape streamlined-shape').addClass('standard-shape');
				$('.shape-description').removeClass('active');
				$('#standard-shape-description').addClass('active');
				$('#layout-modifier').text('- 2')
			} else if (layout_type == 'Streamlined') {
				layout_cost_mod = 1.2;
				layout_agility_mod = 1.2;
				layout_speed_mod = 1.2;
				layout_hull_mod = 0.8;
				$('.shape').removeClass('distributed-shape standard-shape').addClass('streamlined-shape');
				$('.shape-description').removeClass('active');
				$('#streamlined-shape-description').addClass('active');
				$('#layout-modifier').text('+ 0');
			} else if  (layout_type == 'Distributed') {
				layout_cost_mod = 0.8;
				layout_agility_mod = 0.8;
				layout_speed_mod = 0.8;
				layout_hull_mod = 1.2;
				$('.shape').removeClass('standard-shape streamlined-shape').addClass('distributed-shape');
				$('.shape-description').removeClass('active');
				$('#distributed-shape-description').addClass('active');
				$('#layout-modifier').text('- 6');
			}

		// Manufacturer
			manufacturer_type = $('#manufacturer-type').val();
			manufacturer_style = manufacturer_type.replace(/\s+/g, '-').toLowerCase().replaceAll("[^A-Za-z0-9]","");
			$('body').attr('id', manufacturer_style);
			if (manufacturer_type == 'Atlas') {
				manufacturer_cost_mod = 1.15;
				manufacturer_speed_mod = 1;
				manufacturer_hull_mod = 1.1;
				manufacturer_weapon_cost_mod = 1;
				manufacturer_power_cost_mod = 0.8;
				manufacturer_sensor_cost_mod = 1;
				manufacturer_comms_cost_mod = 1;
				manufacturer_software_cost_mod = 0.8;
				manufacturer_room_cost_mod = 0.8;
				manufacturer_armor_cost_mod = 1;
				manufacturer_room_cost_mod = 1;
				manufacturer_mDrive_cost_mod = 1;
				manufacturer_kinetic_dr_mod = 0;
				manufacturer_rad_dr_mod = 0;
				manufacturer_energy_dr_mod = 1;
				manufacturer_explosive_dr_mod = 0;
				$('#manufacturer-details .advice').addClass('hidden');
				$('#manufacturer-details #atlas-industries-details').removeClass('hidden');
				$('.specification .manufacturer-subset').removeClass('active');
				$('#atlas-subset').addClass('active');
			} else if (manufacturer_type == 'Infinite Horizons') {
				manufacturer_cost_mod = 1.1;
				manufacturer_speed_mod = 1.1;
				manufacturer_hull_mod = 1;
				manufacturer_weapon_cost_mod = 1;
				manufacturer_power_cost_mod = 1;
				manufacturer_sensor_cost_mod = 0.8;
				manufacturer_comms_cost_mod = 0.8;
				manufacturer_software_cost_mod = 1;
				manufacturer_room_cost_mod = 1;
				manufacturer_armor_cost_mod = 1;
				manufacturer_room_cost_mod = 1;
				manufacturer_mDrive_cost_mod = 0.8;
				manufacturer_kinetic_dr_mod = 0;
				manufacturer_rad_dr_mod = 1;
				manufacturer_energy_dr_mod = 0;
				manufacturer_explosive_dr_mod = 0;
				$('#manufacturer-details .advice').addClass('hidden');
				$('#manufacturer-details #infinite-horizons-details').removeClass('hidden');
				$('.specification .manufacturer-subset').removeClass('active');
				$('#infinite-subset').addClass('active');
			} else if (manufacturer_type == 'Conglomerate Inc') {
				manufacturer_cost_mod = 0.8;
				manufacturer_speed_mod = 0.8;
				manufacturer_hull_mod = 0.8;
				manufacturer_weapon_cost_mod = 1;
				manufacturer_power_cost_mod = 1;
				manufacturer_sensor_cost_mod = 1;
				manufacturer_comms_cost_mod = 1;
				manufacturer_software_cost_mod = 1;
				manufacturer_room_cost_mod = 1;
				manufacturer_armor_cost_mod = 1;
				manufacturer_room_cost_mod = 1;
				manufacturer_mDrive_cost_mod = 1;
				manufacturer_kinetic_dr_mod = 0;
				manufacturer_rad_dr_mod = 0;
				manufacturer_energy_dr_mod = 0;
				manufacturer_explosive_dr_mod = 0;
				$('#manufacturer-details .advice').addClass('hidden');
				$('#manufacturer-details #conglomerate-inc-details').removeClass('hidden');
				$('.specification .manufacturer-subset').removeClass('active');
				$('#conglomerate-subset').addClass('active');
			} else if (manufacturer_type == 'Imperial Designs') {
				manufacturer_cost_mod = 1.3;
				manufacturer_speed_mod = 1.2;
				manufacturer_hull_mod = 1.2;
				manufacturer_weapon_cost_mod = 1;
				manufacturer_power_cost_mod = 1;
				manufacturer_sensor_cost_mod = 1;
				manufacturer_comms_cost_mod = 1;
				manufacturer_software_cost_mod = 1;
				manufacturer_room_cost_mod = 1;
				manufacturer_armor_cost_mod = 1;
				manufacturer_room_cost_mod = 1;
				manufacturer_mDrive_cost_mod = 1;
				manufacturer_kinetic_dr_mod = 1;
				manufacturer_rad_dr_mod = 0;
				manufacturer_energy_dr_mod = 1;
				manufacturer_explosive_dr_mod = 1;
				$('#manufacturer-details .advice').addClass('hidden');
				$('#manufacturer-details #imperial-designs-details').removeClass('hidden');
				$('.specification .manufacturer-subset').removeClass('active');
				$('#imperial-subset').addClass('active');
			} else if (manufacturer_type == 'Raider') {
				manufacturer_cost_mod = 1;
				manufacturer_speed_mod = 1;
				manufacturer_hull_mod = 1.1;
				manufacturer_weapon_cost_mod = 0.8;
				manufacturer_power_cost_mod = 1;
				manufacturer_sensor_cost_mod = 1;
				manufacturer_comms_cost_mod = 1;
				manufacturer_software_cost_mod = 1;
				manufacturer_room_cost_mod = 1;
				manufacturer_armor_cost_mod = 0.8;
				manufacturer_room_cost_mod = 1;
				manufacturer_mDrive_cost_mod = 1;
				manufacturer_kinetic_dr_mod = 1;
				manufacturer_rad_dr_mod = 0;
				manufacturer_energy_dr_mod = 0;
				manufacturer_explosive_dr_mod = 0;
				$('#manufacturer-details .advice').addClass('hidden');
				$('#manufacturer-details #raider-corp-details').removeClass('hidden');
				$('.specification .manufacturer-subset').removeClass('active');
				$('#raider-subset').addClass('active');
			}

		// Tech Level
			tech_level = parseInt($('#tech-level').val());
			tech_mod = (1 + (((tech_level - 9) ** 2 ) / 5)).toFixed(2);
			tech_level > tech_limit ? $('#tl-warning').show() : $('#tl-warning').hide();

		// Fuel
			fuel_tonnage = parseInt($('#fuel-tonnage').val());
			fuel_cost = fuel_tonnage * 100;
			fuel_collector = $('#fuel-collector');
			if (fuel_collector.is(':checked')) {
				fc_cost = 20000;
				fc_tonnage = 4;
				$('#fuel-collector-output').show();
			} else {
				fc_cost = 0;
				fc_tonnage = 0;
				$('#fuel-collector-output').hide();
			}
			fuel_partitions = $('#fuel-partitions');
			if (fuel_partitions.is(':checked')) {
				fp_cost = Math.floor(fuel_tonnage/10) * 2000;
				fp_tonnage = Math.ceil(fuel_tonnage / 10);
				$('#fuel-partitions-output').show();
			} else {
				fp_cost = 0;
				fp_tonnage = 0;
				$('#fuel-partitions-output').hide();
			}
			fuel_refinery = $('#fuel-refinery');
			if (fuel_refinery.is(':checked')) {
				fr_cost = 450000;
				fr_tonnage = 10;
				$('#fuel-refinery-output').show();
			} else {
				fr_cost = 0;
				fr_tonnage = 0;
				$('#fuel-refinery-output').hide();
			}

		// Power
			power_size = parseInt($('#power-size').val());
			power_count = parseInt($('#power-count').val());
			capacitance_module_count = parseInt($('#capacitance-module-count').val());
			power_type = $('#power-type').val();
			if (power_type == 'Fusion Generator') {
				base_power = 6 * power_count * power_size;
				power_regen = 10 * (power_size/2) * power_count;
				power_tonnage = 2 * power_size * power_count;
				power_cost = 20000 * power_size * power_count;
				power_fuel_per_week = 2 * power_size * power_count;
				power_heat_generation = 1 * power_size * power_count;
			} else if (power_type == 'Antimatter Collider') {
				base_power = 8 * power_count * power_size;
				power_regen = 10 * (power_size/2) * power_count;
				power_tonnage = 3 * power_size * power_count;
				power_cost = 50000 * power_size * power_count;
				power_fuel_per_week = 2 * power_size * power_count;
				power_heat_generation = 2 * power_size * power_count;
			} else if (power_type == 'Quark Fusion Generator') {
				base_power = 6 * power_count * power_size;
				power_regen = 12 * (power_size/2) * power_count;
				power_tonnage = 5 * power_size * power_count;
				power_cost = 90000 * power_size * power_count;
				power_fuel_per_week = 4 * power_size * power_count;
				power_heat_generation = 4 * power_size * power_count;
			} else if (power_type == 'Warp Field Collector') {
				base_power = 6 * power_count * power_size;
				power_regen = 12 * (power_size/2) * power_count;
				power_tonnage = 1 * power_size * power_count;
				power_cost = 1000000 * power_size * power_count;
				power_fuel_per_week = 0;
				power_heat_generation = 1 * power_size * power_count;
			}	
			power_total_capacity = base_power + (capacitance_module_count * 3);
			power_total_cost = power_cost + (capacitance_module_count * 10000);
			power_total_tonnage = power_tonnage + capacitance_module_count;

		// M-Drive
			mDrive_type = $('#mDrive-type').val();
			mDrive_count = parseInt($('#mDrive-count').val());
			if (mDrive_type == 'Directed Fusion Drive') {
				mDrive_cost = mDrive_count * 20000;
				mDrive_tonnage = mDrive_count * 3;
				mDrive_power_use = mDrive_count * 2;
				mDrive_fuel_use = mDrive_count * 2;
				mDrive_agility_raw = Math.round(((mDrive_count * 1.5) - ((tonnage / 100) - 1) - (mDrive_count - 1)) * layout_agility_mod);
				mDrive_thrust_raw = Math.round((mDrive_count * 3) - ((tonnage / 100) - 1) - ((mDrive_count - 1)) * manufacturer_speed_mod);
				mDrive_heat_generation = mDrive_count * 2;
				$('#m-drive-details .advice').addClass('hidden');
				$('#m-drive-details #directed-fusion-details').removeClass('hidden');
			} else if (mDrive_type == 'Pulsed Fusion Drive') {
				mDrive_cost = mDrive_count * 25000;
				mDrive_tonnage = mDrive_count * 4;
				mDrive_power_use = mDrive_count * 2;
				mDrive_fuel_use = mDrive_count * 3;
				mDrive_agility_raw = Math.round((mDrive_count * 2) - ((tonnage / 100) - 1) - ((mDrive_count - 1)) * layout_agility_mod);
				mDrive_thrust_raw = Math.round((mDrive_count * 4) - ((tonnage / 100) - 1) - ((mDrive_count - 1)) * manufacturer_speed_mod);
				mDrive_heat_generation = mDrive_count * 3;
				$('#m-drive-details .advice').addClass('hidden');
				$('#m-drive-details #pulsed-fusion-details').removeClass('hidden');
			} else if (mDrive_type == 'Ion Accelerator') {
				mDrive_cost = mDrive_count * 50000;
				mDrive_tonnage = mDrive_count * 3;
				mDrive_power_use = mDrive_count * 3;
				mDrive_fuel_use = mDrive_count * 2;
				mDrive_agility_raw = Math.round((mDrive_count * 1) - ((tonnage / 100) - 1) - ((mDrive_count - 1)) * layout_agility_mod);
				mDrive_thrust_raw = Math.round((mDrive_count * 2) - ((tonnage / 100) - 1) - ((mDrive_count - 1)) * manufacturer_speed_mod);
				mDrive_heat_generation = mDrive_count * 3;
				$('#m-drive-details .advice').addClass('hidden');
				$('#m-drive-details #ion-accelerator-details').removeClass('hidden');
			} else if (mDrive_type == 'Slipstream Rocket') {
				mDrive_cost = mDrive_count * 22000;
				mDrive_tonnage = mDrive_count * 1;
				mDrive_power_use = mDrive_count * 4;
				mDrive_fuel_use = mDrive_count * 1;
				mDrive_agility_raw = Math.round((mDrive_count * 1.5) - ((tonnage / 100) - 1) - ((mDrive_count - 1)) * layout_agility_mod);
				mDrive_thrust_raw = Math.round((mDrive_count * 1) - Math.round((tonnage / 150) - 1) - ((mDrive_count - 1)) * manufacturer_speed_mod);
				mDrive_heat_generation = mDrive_count * 4;
				$('#m-drive-details .advice').addClass('hidden');
				$('#m-drive-details #slipstream-rocket-details').removeClass('hidden');
			} else if (mDrive_type == 'Photon Rocket') {
				mDrive_cost = mDrive_count * 20000;
				mDrive_tonnage = mDrive_count * 2;
				mDrive_power_use = mDrive_count * 3;
				mDrive_fuel_use = mDrive_count * 2;
				mDrive_agility_raw = Math.round((mDrive_count * 2) - ((tonnage / 100) - 1) - ((mDrive_count - 1)) * layout_agility_mod);
				mDrive_thrust_raw = Math.round((mDrive_count * 3) - ((tonnage / 100) - 1) - ((mDrive_count - 1)) * manufacturer_speed_mod);
				mDrive_heat_generation = mDrive_count * 1;
				$('#m-drive-details .advice').addClass('hidden');
				$('#m-drive-details #photon-rocket-details').removeClass('hidden');
			}
	
		// J-Drive
			max_jump_distance = parseInt($('#max-jump-distance').val());
			jump_tonnage = Math.round(((tonnage/30) + ((max_jump_distance - 1) * (max_jump_distance + 1) * (1/tech_mod))) * max_jump_distance);
			jump_power_cost = (Math.round(tonnage/20) * max_jump_distance);
			jump_fuel_cost = Math.round(tonnage/10) * max_jump_distance;
			jump_drive_cost = max_jump_distance * (max_jump_distance + 1) * 10000  * jump_cost_mod;
			jump_heat_generation = (tonnage/25) * max_jump_distance;

		// Heat Management
			heat_sink_count = $('#heat-sink-count').val();
			heat_sink_cost = heat_sink_count * 1000;
			heat_sink_tonnage = Math.floor(heat_sink_count * 0.5);

		// Interior Design
			interior_type = $('#interior-type').val();
			if (interior_type == 'Clean') {
				interior_cost_mod = 500;
				interior_tonnage = (tonnage/100);
				interior_structure_mod = 1;
			} else if (interior_type == 'Exposed') {
				interior_cost_mod = 0;
				interior_tonnage = 0;
				interior_structure_mod = 0.8;
			} else if  (interior_type == 'Military') {
				interior_cost_mod = 1000;
				interior_tonnage = 2;
				interior_structure_mod = 1.5;
			} else if (interior_type == 'Minimalism') {
				interior_cost_mod = 1500;
				interior_tonnage = 1;
				interior_structure_mod = 1.2;
			} else if (interior_type == 'Opulent') {
				interior_cost_mod = 2500;
				interior_tonnage = 5;
				interior_structure_mod = 1.2;
			}

		// Air Locks
			air_lock_count = parseInt($('#air-lock-count').val());
			air_lock_tonnage = air_lock_count * 2;

		// Life Support
			crew_size = $('#crew-size').val();
			additional_life_support = parseInt($('#additional-life-support').val());
			life_support_tonnage = Math.floor((tonnage / 50) + (additional_life_support/5));
			life_support_cost = life_support_tonnage * 1000;
			life_support_value = (tonnage/10) + (additional_life_support);
			stamina = Math.floor(((tonnage/10) + (additional_life_support)) / crew_size);

		// Rooms
			// Cargo Bay
				cargo_bay_count = parseInt($('#cargo-bay').val());
				cargo_bay_tonnage = cargo_bay_count * 1;
				cargo_bay_cost = cargo_bay_count * 100;
				cargo_bay_count > 0 ? $('#cargo-bay-output').show() : $('#cargo-bay-output').hide();
			// Ships Locker
				ships_locker_count = parseInt($('#ships-locker').val());
				ships_locker_tonnage = ships_locker_count * 2;
				ships_locker_cost = ships_locker_count * 5000;
				ships_locker_count > 0 ? $('#ships-locker-output').show() : $('#ships-locker-output').hide();
			// Common Area
				common_area_count = parseInt($('#common-area').val());
				common_area_tonnage = common_area_count * 4;
				common_area_cost = common_area_count * 1000;
				common_area_count > 0 ? $('#common-area-output').show() : $('#common-area-output').hide();
			// State Room
				state_room_count = parseInt($('#state-room').val());
				state_room_tonnage = state_room_count * 4;
				state_room_cost = state_room_count * 1000;
				state_room_count > 0 ? $('#state-room-output').show() : $('#state-room-output').hide();
			// Drone Bay
				drone_bay_count = parseInt($('#drone-bay').val());
				drone_bay_tonnage = drone_bay_count * 5;
				drone_bay_cost = drone_bay_count * 12000;
				drone_bay_count > 0 ? $('#drone-bay-output').show() : $('#drone-bay-output').hide();
			// Barracks
				barracks_count = parseInt($('#barracks').val());
				barracks_tonnage = barracks_count * 6;
				barracks_cost = barracks_count * 200;
				barracks_count > 0 ? $('#barracks-output').show() : $('#barracks-output').hide();
			// Medical Bay
				medical_bay_count = parseInt($('#medical-bay').val());
				medical_bay_tonnage = medical_bay_count * 6;
				medical_bay_cost = medical_bay_count * 10000;
				medical_bay_count > 0 ? $('#medical-bay-output').show() : $('#medical-bay-output').hide();
			// Science Bay
				science_bay_count = parseInt($('#science-bay').val());
				science_bay_tonnage = science_bay_count * 6;
				science_bay_cost = science_bay_count * 10000;
				science_bay_count > 0 ? $('#science-bay-output').show() : $('#science-bay-output').hide();
			// Technical Bay
				technical_bay_count = parseInt($('#technical-bay').val());
				technical_bay_tonnage = technical_bay_count * 6;
				technical_bay_cost = technical_bay_count * 10000;
				technical_bay_count > 0 ? $('#technical-bay-output').show() : $('#technical-bay-output').hide();
			// Weapons Bay
				weapons_bay_count = parseInt($('#weapons-bay').val());
				weapons_bay_tonnage = weapons_bay_count * 8;
				weapons_bay_cost = weapons_bay_count * 10000;
				weapons_bay_count > 0 ? $('#weapons-bay-output').show() : $('#weapons-bay-output').hide();
			// Launch Bay
				launch_bay_count = parseInt($('#launch-bay').val());
				launch_bay_tonnage = launch_bay_count * 10;
				launch_bay_cost = launch_bay_count * 25000;
				launch_bay_count > 0 ? $('#launch-bay-output').show() : $('#launch-bay-output').hide();
			// Low Berths
				low_berths_count = parseInt($('#low-berths').val());
				low_berths_tonnage = low_berths_count;
				low_berths_cost = low_berths_count * 6500;
				low_berths_count > 0 ? $('#low-berths-output').show() : $('#low-berths-output').hide();
			// Escape Pods
				escape_pod_count =  parseInt($('#escape-pods').val());
				escape_pod_tonnage = escape_pod_count * 2;
				escape_pod_cost = escape_pod_count * 5000;
				escape_pod_count > 0 ? $('#escape-pods-output').show() : $('#escape-pods-output').hide();
			// Conservatory
				conservatory_count =  parseInt($('#conservatories').val());
				conservatory_tonnage = conservatory_count * 9;
				conservatory_cost = conservatory_count * 20000;
				conservatory_count > 0 ? $('#conservatory-output').show() : $('#conservatory-output').hide();

			crew_space = (state_room_count * 2) + (barracks_count * 6);
			room_total_cost = cargo_bay_cost + ships_locker_cost + common_area_cost + state_room_cost + drone_bay_cost + barracks_cost + medical_bay_cost + science_bay_cost + technical_bay_cost + weapons_bay_cost + launch_bay_cost + low_berths_cost + escape_pod_cost + garden_cost + conservatory_cost;
			room_total_tonnage = cargo_bay_tonnage + ships_locker_tonnage + common_area_tonnage + state_room_tonnage + drone_bay_tonnage + barracks_tonnage + medical_bay_tonnage + science_bay_tonnage + technical_bay_tonnage + weapons_bay_tonnage + launch_bay_tonnage + low_berths_tonnage + escape_pod_tonnage + garden_tonnage + conservatory_tonnage;

		// Bridge
			bridge_type = $('#bridge-type').val();
			if (bridge_type == 'Single Pilot') {
				bridge_tonnage = 2;
				bridge_cost = 10000;
				bridge_seats = 1;
				bridge_description = '1 Pilot';
			} else if (bridge_type == 'Supported Pilot') {
				bridge_tonnage = 4;
				bridge_cost = 22000;
				bridge_seats = 3;
				bridge_description = '1 Pilot<br>1 Defenses/Sensors<br>1 Navigation/Comms';
			} else if (bridge_type == 'Standard Team') {
				bridge_tonnage = 6;
				bridge_cost = 36000;
				bridge_seats = 5;
				bridge_description = '1 Pilot<br>1 Comms<br>1 Sensors<br>1 Defenses<br>1 Navigation';
			} else if (bridge_type == 'Command') {
				bridge_tonnage = 9;
				bridge_cost = 50000;
				bridge_seats = 8;
				bridge_description = '1 Commander<br>2 Pilots<br>1 Comms<br>1 Sensors<br>1 Defenses<br>1 Navigation<br>1 Advisor';
			} else if (bridge_type == 'Extended Command') {
				bridge_tonnage = 12;
				bridge_cost = 150000;
				bridge_seats = 12;
				bridge_description = '1 Commander<br>2 Pilots<br>2 Comms<br>2 Sensors<br>2 Defenses<br>1 Navigation<br>1 Advisor<br>1 Technician';
			}
			crew_size < bridge_seats ? $('#bridge-warning').show() : $('#bridge-warning').hide();

		// Computer
			computer_type = $('#computer-type').val();
			additional_processors = parseInt($('#additional-processors').val());
			additional_processor_cost = additional_processors * 1000;
			if (computer_type == 'Civilian') {
				computer_cost = 15000;
				computer_processor = 5;
			} else if (computer_type == 'Military') {
				computer_cost = 30000;
				computer_processor = 5;
			} else if (computer_type == 'Advanced') {
				computer_cost = 50000;
				computer_processor = 7;
			} else if (computer_type == 'Expert') {
				computer_cost = 10000;
				computer_processor = 6;
				additional_processors = additional_processors * 2;
			}
			total_processor = computer_processor + (additional_processors * 2);
			computer_total_cost = computer_cost + additional_processor_cost;

		// Software
			// Security Tracking Software
				security_tracking_software = $('#security-tracking-software');
				if (security_tracking_software.is(':checked')) {
					// $('#security-tracking-software-rank').attr('value', 0).attr('disabled', false);
					// security_tracking_rank = parseInt($('#security-tracking-software-rank').val());
					// security_tracking_cost = 10000 * (1 + security_tracking_rank);
					security_tracking_cost = 10000;
					security_tracking_processor = 1;
					$('#security-software-output').show();
				} else {
					security_tracking_cost = 0;
					security_tracking_processor = 0;
					$('#security-software-output').hide();
					$('#security-tracking-software-rank').attr('value', 0).attr('disabled', true);
				}
			// Autopilot Software
				autopilot_software = $('#autopilot-software');
				if (autopilot_software.is(':checked')) {
					autopilot_cost = 30000;
					autopilot_processor = 1;
					$('#autopilot-software-output').show();
				} else {
					autopilot_cost = 0;
					autopilot_processor = 0;
					$('#autopilot-software-output').hide();
				}
			// Combat Automation Software
				combat_automation_software = $('#combat-automation-software');
				if (combat_automation_software.is(':checked')) {
					combat_automation_cost = 100000;
					combat_automation_processor = 2;
					$('#combat-automation-software-output').show();
				} else {
					combat_automation_cost = 0;
					combat_automation_processor = 0;
					$('#combat-automation-software-output').hide();
				}
			// Jump Control Software
				jump_control_software = $('#jump-control-software');
				if (jump_control_software.is(':checked')) {
					jump_control_cost = 120000;
					jump_control_processor = 1;
					$('#jump-control-software-output').show();
				} else {
					jump_control_cost = 0;
					jump_control_processor = 0;
					$('#jump-control-software-output').hide();
				}
			// Intrusion Software
				intrusion_software = $('#intrusion-software');
				if (intrusion_software.is(':checked')) {
					intrusion_cost = 100000;
					intrusion_processor = 2;
					$('#intrusion-software-output').show();
				} else {
					intrusion_cost = 0;
					intrusion_processor = 0;
					$('#intrusion-software-output').hide();
				}
			// Network Software
				network_software = $('#network-software');
				if (network_software.is(':checked')) {
					network_cost = 50000;
					network_processor = 1;
					$('#network-software-output').show();
					$('#comms-local-network-output').show();
				} else {
					network_cost = 0;
					network_processor = 0;
					$('#network-software-output').hide();
					$('#comms-local-network-output').hide();
				}
			// Expert Software
				expert_software = $('#expert-software');
				if (expert_software.is(':checked')) {
					expert_cost = 50000;
					expert_processor = 1;
					$('#expert-software-output').show();
				} else {
					expert_cost = 0;
					expert_processor = 0;
					$('#expert-software-output').hide();
				}
			// Virtual Intelligence Software
				virtual_intelligence_software = $('#virtual-intelligence-software');
				if (virtual_intelligence_software.is(':checked')) {
					virtual_intelligence_cost = 5000000;
					virtual_intelligence_processor = 8;
					$('#virtual-intelligence-software-output').show();
				} else {
					virtual_intelligence_cost = 0;
					virtual_intelligence_processor = 0;
					$('#virtual-intelligence-software-output').hide();
				}
			// Diagnostics Software
				diagnostics_software = $('#diagnostics-software');
				if (diagnostics_software.is(':checked')) {
					diagnostics_cost = 50000;
					diagnostics_processor = 3;
					$('#diagnostics-software-output').show();
				} else {
					diagnostics_cost = 0;
					diagnostics_processor = 0;
					$('#diagnostics-software-output').hide();
				}
			software_total_cost = security_tracking_cost + autopilot_cost + combat_automation_cost + jump_control_cost + intrusion_cost + network_cost + expert_cost + virtual_intelligence_cost + diagnostics_cost;
			software_total_processor = security_tracking_processor + autopilot_processor + network_processor + combat_automation_processor + jump_control_processor + intrusion_processor + expert_processor + virtual_intelligence_processor + diagnostics_processor;

		// Comms
			comms_type = $('#comms-type').val();
			if (comms_type == 'Civilian') {
				comms_cost = 5000;
				comms_security = 7;
				comms_processor = 1;
				comms_power = 0;
				comms_range = 25000;
			} else if (comms_type == 'Military') {
				comms_cost = 15000;
				comms_security = 10;
				comms_processor = 2;
				comms_power = 1;
				comms_range = 25000;
			} else if (comms_type == 'Advanced') {
				comms_cost = 18000;
				comms_security = 8;
				comms_processor = 2;
				comms_power = 1;
				comms_range = 50000;
			} else if (comms_type == 'Expert') {
				comms_cost = 3000;
				comms_security = 10;
				comms_processor = 4;
				comms_power = 2;
				comms_range = 50000;
			}
			long_range_comms = $('#long-range-comms');
			if (long_range_comms.is(':checked')) {
				lr_comms_cost = 100000;
				lr_comms_processor = 3;
				lr_comms_power = 4;
				lr_comms_tonnage = 6;
				$('#long-range-comms-output').show();
			} else {
				lr_comms_cost = 0;
				lr_comms_processor = 0;
				lr_comms_power = 0;
				lr_comms_tonnage = 0;
				$('#long-range-comms-output').hide();
			}
			comms_total_cost = comms_cost + lr_comms_cost;
			comms_total_processor = comms_processor + lr_comms_processor;
			comms_total_power = comms_power + lr_comms_power;
			
		// Sensors
			// Multispectrum
				multispectrum = $('#multispectrum');
				if (multispectrum.is(':checked')) {
					multispectrum_cost = 10000;
					multispectrum_power = 0;
					multispectrum_processor = 1;
					$('#multispectrum-output').show();
				} else {
					multispectrum_cost = 0;
					multispectrum_power = 0;
					multispectrum_processor = 0;
					$('#multispectrum-output').hide();
				}
			// Radar
				radar = $('#radar');
				if (radar.is(':checked')) {
					radar_cost = 10000;
					radar_power = 1;
					radar_processor = 1;
					$('#radar-output').show();
				} else {
					radar_cost = 0;
					radar_power = 0;
					radar_processor = 0;
					$('#radar-output').hide();
				}
			// Lidar
				lidar = $('#lidar');
				if (lidar.is(':checked')) {
					lidar_cost = 10000;
					lidar_power = 1;
					lidar_processor = 1;
					$('#lidar-output').show();
				} else {
					lidar_cost = 0;
					lidar_power = 0;
					lidar_processor = 0;
					$('#lidar-output').hide();
				}
			// Densitrometer
				densitrometer = $('#densitrometer');
				if (densitrometer.is(':checked')) {
					densitrometer_cost = 100000;
					densitrometer_power = 2;
					densitrometer_processor = 1;
					$('#densitrometer-output').show();
				} else {
					densitrometer_cost = 0;
					densitrometer_power = 0;
					densitrometer_processor = 0;
					$('#densitrometer-output').hide();
				}
			// Bioscanner
				bioscanner = $('#bioscanner');
				if (bioscanner.is(':checked')) {
					bioscanner_cost = 300000;
					bioscanner_power = 3;
					bioscanner_processor = 3;
					$('#bioscanner-output').show();
				} else {
					bioscanner_cost = 0;
					bioscanner_power = 0;
					bioscanner_processor = 0;
					$('#bioscanner-output').hide();
				}
			// Jammer
				jammer = $('#jammer');
				if (jammer.is(':checked')) {
					jammer_cost = 100000;
					jammer_power = 2;
					jammer_processor = 5;
					$('#jammer-output').show();
				} else {
					jammer_cost = 0;
					jammer_power = 0;
					jammer_processor = 0;
					$('#jammer-output').hide();
				}
				if ((radar.is(':checked')) && (multispectrum.is(':checked'))) {
					$('#sensors-alert').hide();
					$('#bridge-output').removeClass('warning');
				} else {
					$('#sensors-alert').show();
					$('#bridge-output').addClass('warning');
				}

			sensor_total_cost = multispectrum_cost + radar_cost + lidar_cost + densitrometer_cost + bioscanner_cost + jammer_cost;
			sensor_total_power = multispectrum_power + radar_power + lidar_power + densitrometer_power + bioscanner_power + jammer_power;
			sensor_total_processor = multispectrum_processor + radar_processor + lidar_processor + densitrometer_processor + bioscanner_processor + jammer_processor;

		// Armor
			armor_type = $('#armor-type').val();
			if (armor_type == 'None') {
				armor_tonnage = 0;
				armor_cost = 0;
				armor_kinetic_dr = 0;
				armor_energy_dr = 0;
				armor_rad_dr = 0;
				armor_explosive_dr = 0;
			} else if (armor_type == 'Titanium') {
				armor_tonnage = Math.round(tonnage/50);
				armor_cost = tonnage * 100;
				armor_kinetic_dr = 2;
				armor_energy_dr = 2;
				armor_rad_dr = 0;
				armor_explosive_dr = 2;
			} else if (armor_type == 'Crystaliron') {
				armor_tonnage = Math.round(tonnage/50);
				armor_cost = tonnage * 150;
				armor_kinetic_dr = 2;
				armor_energy_dr = 2;
				armor_rad_dr = 2;
				armor_explosive_dr = 0;
			} else if (armor_type == 'Carbide') {
				armor_tonnage = Math.round(tonnage/40);
				armor_cost = tonnage * 200;
				armor_kinetic_dr = 3;
				armor_energy_dr = 1;
				armor_rad_dr = 0;
				armor_explosive_dr = 3;
			} else if (armor_type == 'Ablative') {
				armor_tonnage = Math.round(tonnage/60);
				armor_cost = tonnage * 50;
				armor_kinetic_dr = 0;
				armor_energy_dr = 5;
				armor_rad_dr = 0;
				armor_explosive_dr = 0;
			} else if (armor_type == 'Bonded Superdense') {
				armor_tonnage = Math.round(tonnage/20);
				armor_cost = tonnage * 500;
				armor_kinetic_dr = 4;
				armor_energy_dr = 4;
				armor_rad_dr = 4;
				armor_explosive_dr = 4;
			}

			reinforce_kinetic_dr = parseInt($('#reinforce-kinetic-dr').val());
			reinforce_energy_dr = parseInt($('#reinforce-energy-dr').val());
			reinforce_rad_dr = parseInt($('#reinforce-rad-dr').val());
			reinforce_explosive_dr = parseInt( $('#reinforce-explosive-dr').val());
			reinforce_cost = (reinforce_kinetic_dr * 1000 * (tonnage / 5)) + (reinforce_energy_dr * 1000 * (tonnage / 5)) + (reinforce_rad_dr * 1000 * (tonnage / 5)) + (reinforce_explosive_dr * 1000 * (tonnage / 5));
			reinforce_tonnage = (reinforce_kinetic_dr * (tonnage / 100)) + (reinforce_energy_dr * (tonnage / 100)) + (reinforce_rad_dr * (tonnage / 100)) + (reinforce_explosive_dr * (tonnage / 100));

		// Coatings
			coating_type = $('#coating-type').val();
			if (coating_type == 'None') {
				coating_cost = 0;
				coating_kinetic_dr = 0;
				coating_energy_dr = 0;
				coating_rad_dr = 0;
				coating_explosive_dr = 0;
				coating_heat_reduction = 0;
				coating_description = 'No coating applied.'
			} else if (coating_type == 'Reactive Defense') {
				coating_cost = tonnage * 120;
				coating_kinetic_dr = 2;
				coating_energy_dr = 0;
				coating_rad_dr = 0;
				coating_explosive_dr = 2;
				coating_heat_reduction = 0;
				coating_description = 'Atempts to disarm incoming projectiles.';
			} else if (coating_type == 'Reflec') {
				coating_cost = tonnage * 90;
				coating_kinetic_dr = 0;
				coating_energy_dr = 3;
				coating_rad_dr = 1;
				coating_explosive_dr = -1;
				coating_heat_reduction = 0;
				coating_description = 'Mirror-like coating that disperses energy weapons.';
			} else if (coating_type == 'Self Sealing') {
				coating_cost = tonnage * 100;
				coating_kinetic_dr = 1;
				coating_energy_dr = 1;
				coating_rad_dr = 0;
				coating_explosive_dr = 1;
				coating_heat_reduction = -1;
				coating_description = 'Prevents hull breaches, retains heat.';
			} else if (coating_type == 'Hazard Resistant') {
				coating_cost = tonnage * 250;
				coating_kinetic_dr = 0;
				coating_energy_dr = 0;
				coating_rad_dr = 1;
				coating_explosive_dr = 0;
				coating_heat_reduction = 1;
				coating_description = 'Resistant to natural hazards.';
			} else if (coating_type == 'Sensor Absorbing') {
				coating_cost = tonnage * 150;
				coating_kinetic_dr = 0;
				coating_energy_dr = 1;
				coating_rad_dr = 0;
				coating_explosive_dr = 0;
				coating_heat_reduction = 1;
				coating_description = 'Provides a -2 DM to Sensor checks against your ship.';
			} else if (coating_type == 'Radiative Cooling') {
				coating_cost = tonnage * 25;
				coating_kinetic_dr = 0;
				coating_energy_dr = 0;
				coating_rad_dr = 0;
				coating_explosive_dr = 0;
				coating_heat_reduction = (tonnage/50);
				coating_description = 'Accelerates natural radiative heat dispersion.';
			}

		// Weapons
			// autocannon_2
				ac2_count = parseInt($('#autocannon-2').val());
				ac2_count ? $('#ac2-output').show() : $('#ac2-output').hide();
				ac2_cost = ac2_count * 2500;
				ac2_tonnage = ac2_count * 3;
				ac2_power = ac2_count * 0;
			// autocannon_5
				ac5_count = parseInt($('#autocannon-5').val());
				ac5_count ? $('#ac5-output').show() : $('#ac5-output').hide();
				ac5_cost = ac5_count * 4000;
				ac5_tonnage = ac5_count * 4;
				ac5_power = ac5_count * 0;
			// autocannon_10
				ac10_count = parseInt($('#autocannon-10').val());
				ac10_count ? $('#ac10-output').show() : $('#ac10-output').hide();
				ac10_cost = ac10_count * 7500;
				ac10_tonnage = ac10_count * 5;
				ac10_power = ac10_count * 0;
			// autocannon_20
				ac20_count = parseInt($('#autocannon-20').val());
				ac20_count ? $('#ac20-output').show() : $('#ac20-output').hide();
				ac20_cost = ac20_count * 10000;
				ac20_tonnage = ac20_count * 6;
				ac20_power = ac20_count * 0;
			// railgun_1
				rg1_count = parseInt($('#railgun-1').val());
				rg1_count ? $('#rg1-output').show() : $('#rg1-output').hide();
				rg1_cost = rg1_count * 5000;
				rg1_tonnage = rg1_count * 3;
				rg1_power = rg1_count * 1;
			// railgun_3
				rg3_count = parseInt($('#railgun-3').val());
				rg3_count ? $('#rg3-output').show() : $('#rg3-output').hide();
				rg3_cost = rg3_count * 12000;
				rg3_tonnage = rg3_count * 4;
				rg3_power = rg3_count * 2;
			// railgun_5
				rg5_count = parseInt($('#railgun-5').val());
				rg5_count ? $('#rg5-output').show() : $('#rg5-output').hide();
				rg5_cost = rg5_count * 20000;
				rg5_tonnage = rg5_count * 5;
				rg5_power = rg5_count * 3;
			// railgun_8
				rg8_count = parseInt($('#railgun-8').val());
				rg8_count ? $('#rg8-output').show() : $('#rg8-output').hide();
				rg8_cost = rg8_count * 32000;
				rg8_tonnage = rg8_count * 6;
				rg8_power = rg8_count * 4;
			// ortillery_4
				or4_count = parseInt($('#ortillery-4').val());
				or4_count ? $('#or4-output').show() : $('#or4-output').hide();
				or4_cost = or4_count * 2000;
				or4_tonnage = or4_count * 6;
				or4_power = or4_count * 0;
			// ortillery_8
				or8_count = parseInt($('#ortillery-8').val());
				or8_count ? $('#or8-output').show() : $('#or8-output').hide();
				or8_cost = or8_count * 2000;
				or8_tonnage = or8_count * 6;
				or8_power = or8_count * 0;
			// ortillery_16
				or16_count = parseInt($('#ortillery-16').val());
				or16_count ? $('#or16-output').show() : $('#or16-output').hide();
				or16_cost = or16_count * 5000;
				or16_tonnage = or16_count * 8;
				or16_power = or16_count * 0;
			// ortillery_32
				or32_count = parseInt($('#ortillery-32').val());
				or32_count ? $('#or32-output').show() : $('#or32-output').hide();
				or32_cost = or32_count * 10000;
				or32_tonnage = or32_count * 10;
				or32_power = or32_count * 0;
			// small_pulse_laser
				spl_count = parseInt($('#small-pulse-laser').val());
				spl_count ? $('#spl-output').show() : $('#spl-output').hide();
				spl_cost = spl_count * 6000;
				spl_tonnage = spl_count * 1;
				spl_power = spl_count * 1;
			// medium_pulse_laser
				mpl_count = parseInt($('#medium-pulse-laser').val());
				mpl_count ? $('#mpl-output').show() : $('#mpl-output').hide();
				mpl_cost = mpl_count * 10000;
				mpl_tonnage = mpl_count * 2;
				mpl_power = mpl_count * 2;
			// large_pulse_laser
				lpl_count = parseInt($('#large-pulse-laser').val());
				lpl_count ? $('#lpl-output').show() : $('#lpl-output').hide();
				lpl_cost = lpl_count * 15000;
				lpl_tonnage = lpl_count * 3;
				lpl_power = lpl_count * 4;
			// small_ion_laser
				sil_count = parseInt($('#small-ion-laser').val());
				sil_count ? $('#sil-output').show() : $('#sil-output').hide();
				sil_cost = sil_count * 7000;
				sil_tonnage = sil_count * 1;
				sil_power = sil_count * 2;
			// medium_ion_laser
				mil_count = parseInt($('#medium-ion-laser').val());
				mil_count ? $('#mil-output').show() : $('#mil-output').hide();
				mil_cost = mil_count * 15000;
				mil_tonnage = mil_count * 2;
				mil_power = mil_count * 3;
			// large_ion_laser
				lil_count = parseInt($('#large-ion-laser').val());
				lil_count ? $('#lil-output').show() : $('#lil-output').hide();
				lil_cost = lil_count * 26000;
				lil_tonnage = lil_count * 3;
				lil_power = lil_count * 4;
			// small_em_laser
				sel_count = parseInt($('#small-em-laser').val());
				sel_count ? $('#sel-output').show() : $('#sel-output').hide();
				sel_cost = sel_count * 7000;
				sel_tonnage = sel_count * 1;
				sel_power = sel_count * 2;
			// medium_em_laser
				mel_count = parseInt($('#medium-em-laser').val());
				mel_count ? $('#mel-output').show() : $('#mel-output').hide();
				mel_cost = mel_count * 15000;
				mel_tonnage = mel_count * 2;
				mel_power = mel_count * 4;
			// large_em_laser
				lel_count = parseInt($('#large-em-laser').val());
				lel_count ? $('#lel-output').show() : $('#lel-output').hide();
				lel_cost = lel_count * 26000;
				lel_tonnage = lel_count * 3;
				lel_power = lel_count * 6;
			// particle_beam
				pb_count = parseInt($('#particle-beam').val());
				pb_count ? $('#pb-output').show() : $('#pb-output').hide();
				pb_cost = pb_count * 30000;
				pb_tonnage = pb_count * 4;
				pb_power = pb_count * 3;
			// particle_beam_array
				pba_count = parseInt($('#particle-beam-array').val());
				pba_count ? $('#pba-output').show() : $('#pba-output').hide();
				pba_cost = pba_count * 100000;
				pba_tonnage = pba_count * 12;
				pba_power = pba_count * 9;
			// short_range_missile_2
				srm2_count = parseInt($('#short-range-missile-2').val());
				srm2_count ? $('#srm2-output').show() : $('#srm2-output').hide();
				srm2_cost = srm2_count * 1200;
				srm2_tonnage = srm2_count * 1;
				srm2_power = srm2_count * 0;
			// short_range_missile_4
				srm4_count = parseInt($('#short-range-missile-4').val());
				srm4_count ? $('#srm4-output').show() : $('#srm4-output').hide();
				srm4_cost = srm4_count * 1200;
				srm4_tonnage = srm4_count * 1;
				srm4_power = srm4_count * 0;
			// short_range_missile_6
				srm6_count = parseInt($('#short-range-missile-6').val());
				srm6_count ? $('#srm6-output').show() : $('#srm6-output').hide();
				srm6_cost = srm6_count * 1200;
				srm6_tonnage = srm6_count * 1;
				srm6_power = srm6_count * 0;
			// short_range_missile_8
				srm8_count = parseInt($('#short-range-missile-8').val());
				srm8_count ? $('#srm8-output').show() : $('#srm8-output').hide();
				srm8_cost = srm8_count * 1200;
				srm8_tonnage = srm8_count * 1;
				srm8_power = srm8_count * 0;
			//long_range_missile_5
				lrm5_count = parseInt($('#long-range-missile-5').val());
				lrm5_count ? $('#lrm5-output').show() : $('#lrm5-output').hide();
				lrm5_cost = lrm5_count * 1200;
				lrm5_tonnage = lrm5_count * 2;
				lrm5_power = lrm5_count * 0;
			//long_range_missile_10
				lrm10_count = parseInt($('#long-range-missile-10').val());
				lrm10_count ? $('#lrm10-output').show() : $('#lrm10-output').hide();
				lrm10_cost = lrm10_count * 2500;
				lrm10_tonnage = lrm10_count * 4;
				lrm10_power = lrm10_count * 0;
			//long_range_missile_15
				lrm15_count = parseInt($('#long-range-missile-15').val());
				lrm15_count ? $('#lrm15-output').show() : $('#lrm15-output').hide();
				lrm15_cost = lrm15_count * 6000;
				lrm15_tonnage = lrm15_count * 6;
				lrm15_power = lrm15_count * 0;
			//long_range_missile_20
				lrm20_count = parseInt($('#long-range-missile-20').val());
				lrm20_count ? $('#lrm20-output').show() : $('#lrm20-output').hide();
				lrm20_cost = lrm20_count * 13500;
				lrm20_tonnage = lrm20_count * 8;
				lrm20_power = lrm20_count * 0;
			// torpedo_tube
				tt_count = parseInt($('#torpedo-tube').val());
				tt_count ? $('#tt-output').show() : $('#tt-output').hide();
				tt_cost = tt_count * 5000;
				tt_tonnage = tt_count * 3;
				tt_power = tt_count * 1;
			// torpedo_tube_array
				tta_count = parseInt($('#torpedo-tube-array').val());
				tta_count ? $('#tta-output').show() : $('#tta-output').hide();
				tta_cost = tta_count * 18000;
				tta_tonnage = tta_count * 9;
				tta_power = tta_count * 3;
			// sandcaster
				sc_count = parseInt($('#sandcaster').val());
				sc_count ? $('#sc-output').show() : $('#sc-output').hide();
				sc_cost = sc_count * 600;
				sc_tonnage = sc_count * 1;
				sc_power = sc_count * 0;
			// rapid_sandcaster
				rsc_count = parseInt($('#rapid-sandcaster').val());
				rsc_count ? $('#rsc-output').show() : $('#rsc-output').hide();
				rsc_cost = rsc_count * 2000;
				rsc_tonnage = rsc_count * 3;
				rsc_power = rsc_count * 0;
			// small_point_defense_laser
				spdl_count = parseInt($('#small-point-defense-laser').val());
				spdl_count ? $('#spdl-output').show() : $('#spdl-output').hide();
				spdl_cost = spdl_count * 3000;
				spdl_tonnage = spdl_count * 1;
				spdl_power = spdl_count * 1;
			// medium_point_defense_laser
				mpdl_count = parseInt($('#medium-point-defense-laser').val());
				mpdl_count ? $('#mpdl-output').show() : $('#mpdl-output').hide();
				mpdl_cost = mpdl_count * 7500;
				mpdl_tonnage = mpdl_count * 1;
				mpdl_power = mpdl_count * 2;
			// large_point_defense_laser
				lpdl_count = parseInt($('#large-point-defense-laser').val());
				lpdl_count ? $('#lpdl-output').show() : $('#lpdl-output').hide();
				lpdl_cost = lpdl_count * 11000;
				lpdl_tonnage = lpdl_count * 2;
				lpdl_power = lpdl_count * 3;
			weapon_total_tonnage = ac2_tonnage + ac5_tonnage + ac10_tonnage + ac20_tonnage + rg1_tonnage + rg3_tonnage + rg5_tonnage + rg8_tonnage + or4_tonnage + or8_tonnage + or16_tonnage + or32_tonnage + spl_tonnage + mpl_tonnage + lpl_tonnage + sil_tonnage + mil_tonnage + lil_tonnage + sel_tonnage + mel_tonnage + lel_tonnage + pb_tonnage + pba_tonnage + srm2_tonnage + srm4_tonnage + srm6_tonnage + srm8_tonnage + lrm5_tonnage + lrm10_tonnage + lrm15_tonnage + lrm20_tonnage + tt_tonnage + tta_tonnage + sc_tonnage + rsc_tonnage + spdl_tonnage + mpdl_tonnage + lpdl_tonnage;
			weapon_total_cost = ac2_cost + ac5_cost + ac10_cost + ac20_cost + rg1_cost + rg3_cost + rg5_cost + rg8_cost + or4_cost + or8_cost + or16_cost + or32_cost + spl_cost + mpl_cost + lpl_cost + sil_cost + mil_cost + lil_cost + sel_cost + mel_cost + lel_cost + pb_cost + pba_cost + srm2_cost + srm4_cost + srm6_cost + srm8_cost + lrm5_cost + lrm10_cost + lrm15_cost + lrm20_cost + tt_cost + tta_cost + sc_cost + rsc_cost + spdl_cost + mpdl_cost + lpdl_cost;
			weapon_total_tonnage == 0 ? $('#no-weapons').show() : $('#no-weapons').hide();

		// Final Outputs and Values
			// Designation
				if (computer_type == comms_type) {
					average_type = computer_type;
				} else {
					average_type = 'Modified';
				}
				designation = tonnage + ' dTon TL ' + tech_level + ' ' + layout_type + ' ' + manufacturer_type + ' ' + average_type + ' Ship';
				$('#designation-output').text(designation);

			// Cost/Upkeep/Monthly Payments
				cost = Math.round(((5000 + interior_cost_mod) * tonnage * (1 + (tonnage / 100)) * layout_cost_mod * manufacturer_cost_mod * tech_mod) + fuel_cost + (air_lock_count * 25000) + power_total_cost + (fc_cost + fp_cost + fr_cost) + jump_drive_cost + room_total_cost + coating_cost  + sensor_total_cost + weapon_total_cost + armor_cost + reinforce_cost + computer_total_cost + software_total_cost + comms_total_cost + heat_sink_cost + life_support_cost);
				$('#cost-output').text(cost).digits();

				upkeep = Math.round(cost/5000);
				$('#upkeep-output').text(upkeep).digits();

				monthly = Math.round(cost/360);
				$('#monthly-output').text(monthly).digits();

			// Tonnage Output
				tonnage_used = interior_tonnage + air_lock_tonnage + fuel_tonnage + (fr_tonnage + fp_tonnage + fc_tonnage) + heat_sink_tonnage + mDrive_tonnage + power_total_tonnage + jump_tonnage + room_total_tonnage + bridge_tonnage + armor_tonnage + weapon_total_tonnage + life_support_tonnage + reinforce_tonnage + lr_comms_tonnage;
				remaining_tonnage = tonnage - tonnage_used;
				$('#tonnage-output, #tonnage-focused-output').text(tonnage)
				$('#tonnage-used-output, #tonnage-focused-used-output').text(tonnage_used);
				tonnage < tonnage_used ? $('#tonnage-warning').show() :	$('#tonnage-warning').hide();

			// Hull Output
				hull = Math.round((tonnage/10) * manufacturer_hull_mod * layout_hull_mod * tech_mod);
				$('#hull-output').text(hull);

			// Structure Output
				structure = Math.round((tonnage/20) * interior_structure_mod * tech_mod);
				$('#structure-output').text(structure);

			// Communications Output
				$('#comms-type-output').text(comms_type);
				$('#comms-security-output').text(comms_security);
				$('#comms-range-output').text(comms_range);

			// Bridge Output
				$('#bridge-seats-output').text(bridge_seats);
				$('#bridge-description-output').html(bridge_description);

			// Mobility
				mDrive_agility_fixed = Math.floor(mDrive_agility_raw);
				mDrive_thrust_fixed = Math.floor(mDrive_thrust_raw);
				if ((mDrive_agility_fixed < 0) || (mDrive_tonnage == 0)) {
					mDrive_agility_fixed = 0;
				}
				if ((mDrive_thrust_fixed < 0) || (mDrive_tonnage == 0)) {
					mDrive_thrust_fixed = 0;
				}
				mDrive_tonnage == 0 ? $('#m-drive-warning').show() : $('#m-drive-warning').hide();
				$('#m-drive-tonnage-output').text(mDrive_tonnage);
				$('#speed-raw-output').text(mDrive_thrust_raw);
				$('#speed-output').text(mDrive_thrust_fixed);
				$('#agility-raw-output').text(mDrive_agility_raw);
				$('#agility-output').text(mDrive_agility_fixed);

			// Jump
				if (cyber_traveller.is(':checked')) {
					console.log('jump 0 allowed');
				} else {
					jump_tonnage == 0 ? $('#j-drive-warning').show() : $('#j-drive-warning').hide();
				}
				let jump_time = Math.round(2 + (tonnage/100) - (tech_mod));
				jump_time > 0 ? $('#jump-time-output').text(jump_time + ' hour(s)') : $('#jump-time-output').text('Instant');;
				$('#jump-tonnage-output').text(jump_tonnage);
				$('#jump-distances-output').text(max_jump_distance);
				$('#jump-fuel-output').text(jump_fuel_cost);
				$('#jump-power-output').text(jump_power_cost);

			// Life Support Output 
				$('#life-support-units-output').text(life_support_value);
				$('#life-support-output').text(stamina);
				stamina <= 0 ? $('#life-support-warning').show() : $('#life-support-warning').hide();

			// Crew Space Output
				$('#crew-size-output').text(crew_size)
				$('#crew-space-output').text(crew_space);
				crew_space < crew_size ? $('#crew-warning').show() : $('#crew-warning').hide();

			// Power
				power = base_power + (capacitance_module_count * 2);
				power_operations = comms_total_power + sensor_total_power + mDrive_power_use;
				$('#power-tonnage-output').text(power_total_tonnage);
				$('#power-capacity-output').text(power);
				$('#power-regen-output').text(power_regen);
				$('#capacitance-count-output').text(capacitance_module_count);
				$('#power-operations-output').text(power_operations);
				power_regen < power_operations ? $('#power-warning').show() : $('#power-warning').hide();

			// Fuel
				$('#fuel-tonnage-output').text(fuel_tonnage);
				$('#power-fuel-use-output').text(power_fuel_per_week);
				$('#mDrive-fuel-use-output').text(mDrive_fuel_use);
				$('#jump-fuel-cost-output').text(jump_fuel_cost);
				fuel_use_total = mDrive_fuel_use + power_fuel_per_week;
				$('#fuel-used-total-output').text(fuel_use_total);
				$('#fuel-evasion-cost-output').text(tonnage/100);

			// Heat Output
				heat_capacity = coating_heat_reduction + (tonnage / 20) + (heat_sink_count * 1);
				total_heat_generation = power_heat_generation + mDrive_heat_generation + jump_heat_generation;
				heat_capacity >= total_heat_generation ? $('#heat-warning').hide() : $('#heat-warning').show();
				$('#heat-capacity-output').text(heat_capacity);
				$('#power-heat-output').text(power_heat_generation);
				$('#m-drive-heat-output').text(mDrive_heat_generation);
				$('#jump-heat-output').text(jump_heat_generation);
				$('#total-heat-generation').text(total_heat_generation);

			// Computer 
				processor_used = software_total_processor + sensor_total_processor + comms_total_processor;
				processor_used > total_processor ? $('#processor-warning').show() : $('#processor-warning').hide();
				$('#used-processor-output').text(processor_used);
				$('#total-processor-output').text(total_processor);

			// Rooms Output
				$('#cargo-bay-tonnage-output').text(cargo_bay_tonnage);
				$('#ships-locker-tonnage-output').text(ships_locker_tonnage);
				$('#common-area-tonnage-output').text(common_area_tonnage);
				$('#state-room-tonnage-output').text(state_room_tonnage);
				$('#barracks-tonnage-output').text(barracks_tonnage);
				$('#low-berth-tonnage-output').text(low_berths_tonnage);
				$('#medical-bay-tonnage-output').text(medical_bay_tonnage);
				$('#science-bay-tonnage-output').text(science_bay_tonnage);
				$('#technical-bay-tonnage-output').text(technical_bay_tonnage);
				$('#weapons-bay-tonnage-output').text(weapons_bay_tonnage);
				$('#launch-bay-tonnage-output').text(launch_bay_tonnage);
				$('#drone-bay-tonnage-output').text(drone_bay_tonnage);
				$('#escape-pod-tonnage-output').text(escape_pod_tonnage);
				$('#conservatory-tonnage-output').text(conservatory_tonnage);

			// Armor Finals
				$('#armor-type-output').text(armor_type);
				$('#kinetic-dr-output').text(armor_kinetic_dr + reinforce_kinetic_dr);
				$('#energy-dr-output').text(armor_energy_dr + reinforce_energy_dr);
				$('#rad-dr-output').text(armor_rad_dr + reinforce_rad_dr);
				$('#explosive-dr-output').text(armor_explosive_dr + reinforce_explosive_dr);

			// Coating Finals
				$('#coating-type-output').text(coating_type);
				$('#coating-kinetic-output').text(coating_kinetic_dr);
				$('#coating-energy-output').text(coating_energy_dr);
				$('#coating-rad-output').text(coating_rad_dr);
				$('#coating-explosive-output').text(coating_explosive_dr);
				$('#coating-heat-output').text(coating_heat_reduction);
				$('#coating-description-output').text(coating_description);

			// Weapon Count Finals
				$('#autocannon-2-count-output').text(ac2_count);
				$('#autocannon-5-count-output').text(ac5_count);
				$('#autocannon-10-count-output').text(ac10_count);
				$('#autocannon-20-count-output').text(ac20_count);
				$('#railgun-1-count-output').text(rg1_count);
				$('#railgun-3-count-output').text(rg3_count);
				$('#railgun-5-count-output').text(rg5_count);
				$('#railgun-8-count-output').text(rg8_count);
				$('#ortillery-4-count-output').text(or4_count);
				$('#ortillery-8-count-output').text(or8_count);
				$('#ortillery-16-count-output').text(or16_count);
				$('#ortillery-32-count-output').text(or32_count);
				$('#small-pulse-laser-count-output').text(spl_count);
				$('#medium-pulse-laser-count-output').text(mpl_count);
				$('#large-pulse-laser-count-output').text(lpl_count);
				$('#small-ion-laser-count-output').text(sil_count);
				$('#medium-ion-laser-count-output').text(mil_count);
				$('#large-ion-laser-count-output').text(lil_count);
				$('#small-em-laser-count-output').text(sel_count);
				$('#medium-em-laser-count-output').text(mel_count);
				$('#large-em-laser-count-output').text(lel_count);
				$('#particle-beam-count-output').text(pb_count);
				$('#particle-beam-array-count-output').text(pba_count);
				$('#srm-2-count-output').text(srm2_count);
				$('#srm-4-count-output').text(srm4_count);
				$('#srm-6-count-output').text(srm6_count);
				$('#srm-8-count-output').text(srm8_count);
				$('#lrm-5-count-output').text(lrm5_count);
				$('#lrm-10-count-output').text(lrm10_count);
				$('#lrm-15-count-output').text(lrm15_count);
				$('#lrm-20-count-output').text(lrm20_count);
				$('#torpedo-tube-count-output').text(tt_count);
				$('#torpedo-tube-array-count-output').text(tta_count);
				$('#sandcaster-count-output').text(sc_count);
				$('#sandcaster-array-count-output').text(sca_count);
				$('#spdl-count-output').text(spdl_count);
				$('#mpdl-count-output').text(mpdl_count);
				$('#lpdl-count-output').text(lpdl_count);
	
			// Reset Save Text
				$('#save-data').text('Save');

		// Warning Updates
			if ($('#tl-warning').css('display') != 'none') {
				$('#basics-alert').show();
			} else {
				$('#basics-alert').hide();
			}

			if (($('#processor-warning').css('display') != 'none') || ($('#bridge-warning').css('display') != 'none')) {
				$('#bridge-alert').show();
			} else {
				$('#bridge-alert').hide();
			}

			if (($('#m-drive-warning').css('display') != 'none') || (($('#j-drive-warning').css('display') != 'none') && (cyber_traveller.is(':checked') == false)) || ($('#heat-warning').css('display') != 'none') || ($('#power-warning').css('display') != 'none')) {
				$('#engineering-alert').show();
			} else {
				$('#engineering-alert').hide();
			}

			if ($('#crew-warning').css('display') != 'none') {
				$('#crew-alert').show();
			} else {
				$('#crew-alert').hide();
			}

	});

	// Save
	$('#save-data').on('click', function(){
		var all_values = [];
		all_values.push(tonnage, layout_type, layout_cost_mod, layout_agility_mod,
		                layout_speed_mod, layout_hull_mod, manufacturer_type, manufacturer_cost_mod,
		                manufacturer_speed_mod, manufacturer_hull_mod, manufacturer_structure_mod  + ' ' + manufacturer_weapon_cost_mod,
		                manufacturer_power_cost_mod, manufacturer_sensor_cost_mod, manufacturer_comms_cost_mod,
		                manufacturer_software_cost_mod, manufacturer_room_cost_mod, manufacturer_armor_cost_mod,
		                manufacturer_room_cost_mod, manufacturer_mDrive_cost_mod, manufacturer_kinetic_dr_mod,
		                manufacturer_energy_dr_mod, manufacturer_explosive_dr_mod, tech_level, tech_mod,
		                interior_type, interior_cost_mod, interior_tonnage, interior_structure_mod, air_lock_count,
		                air_lock_tonnage, fuel_tonnage, fuel_cost, fuel_use_total, fuel_collector, fuel_partitions,
		                fuel_refinery, fc_cost, fc_tonnage, fp_cost, fp_tonnage, fr_cost, fr_tonnage, power_size,
		                power_count, capacitance_module_count, power_type, base_power, power_regen, power_tonnage,
		                power_cost, power_fuel_per_week, power_total_capacity, power_total_cost, power_total_tonnage,
		                power_heat_generation, mDrive_type, mDrive_count, mDrive_cost, mDrive_tonnage, mDrive_power_use,
		                mDrive_fuel_use, mDrive_agility_raw, mDrive_agility_fixed, mDrive_thrust_raw, mDrive_thrust_fixed,
		                mDrive_heat_generation, max_jump_distance, jump_tonnage, jump_power_cost, jump_fuel_cost,
		                jump_drive_cost, jump_heat_generation, heat_sink_count, heat_sink_cost, heat_capacity,
		                total_heat_generation, heat_generation, crew_size, crew_space, additional_life_support,
		                life_support_cost, life_support_tonnage, life_support_value, stamina, room_total_cost,
		                cargo_bay_count, cargo_bay_tonnage, cargo_bay_cost, ships_locker_count, ships_locker_tonnage,
		                ships_locker_cost, common_area_count, common_area_tonnage, common_area_cost, state_room_count,
		                state_room_tonnage, state_room_cost, drone_bay_count, drone_bay_tonnage, drone_bay_cost,
		                barracks_count, barracks_tonnage, barracks_cost, medical_bay_count, medical_bay_tonnage,
		                medical_bay_cost, science_bay_count, science_bay_tonnage, science_bay_cost, technical_bay_count,
		                technical_bay_tonnage, technical_bay_cost, weapons_bay_count, weapons_bay_tonnage,
		                weapons_bay_cost, launch_bay_count, launch_bay_tonnage, launch_bay_cost, low_berths_count,
		                low_berths_cost, low_berths_tonnage, escape_pod_count, escape_pod_cost, escape_pod_tonnage,
		                garden_count, garden_cost, garden_tonnage, bridge_type, bridge_tonnage, bridge_cost, bridge_seats,
		                bridge_description, processor_used, sensor_total_cost, sensor_total_processor, sensor_total_power,
		                computer_type, computer_cost, computer_processor, additional_processors, additional_processor_cost,
		                total_processor, computer_total_cost, sofware_cost, software_processor_useage, library_software,
		                interface_software, security_tracking_software, security_tracking_cost, security_tracking_processor,
		                autopilot_software, autopilot_cost, autopilot_processor, combat_automation_software,
		                combat_automation_cost, combat_automation_processor, jump_control_software, jump_control_cost, 
		                jump_control_processor, intrusion_software, intrusion_cost, intrusion_processor, network_software,
		                network_cost, network_processor, expert_software, expert_cost, expert_processor,
		                virtual_intelligence_software, virtual_intelligence_cost, virtual_intelligence_processor,
		                local_network_software, local_cost, local_processor, diagnostics_software, diagnostics_cost,
		                diagnostics_processor, comms_type, comms_cost, comms_security, comms_network, comms_range,
		                multispectrum, multispectrum_cost + ' ' + multispectrum_power, multispectrum_processor,
		                radar, radar_cost, radar_power, radar_processor, lidar, lidar_cost, lidar_power,
		                lidar_processor + ' ' + densitrometer, densitrometer_cost, densitrometer_power,
		                densitrometer_processor, bioscanner, bioscanner_cost, bioscanner_power, bioscanner_processor,
		                jammer, jammer_cost, jammer_power, jammer_processor, armor_type, armor_tonnage, armor_cost,
		                armor_kinetic_dr, armor_energy_dr, armor_rad_dr, armor_explosive_dr, reinforce_kinetic_dr,
		                reinforce_energy_dr, reinforce_rad_dr, reinforce_explosive_dr, coating_type, coating_cost,
		                coating_kinetic_dr, coating_energy_dr, coating_rad_dr, coating_explosive_dr,
		                coating_heat_reduction, coating_description, weapon_total_tonnage, weapon_total_cost, ac2_count,
		                ac2_cost, ac2_tonnage, ac2_power, ac5_count, ac5_cost, ac5_tonnage, ac5_power, ac10_count, ac10_cost,
		                ac10_tonnage, ac10_power, ac20_count, ac20_cost, ac20_tonnage, ac20_power, rg1_count, rg1_cost,
		                rg1_tonnage, rg1_power, rg3_count, rg3_cost, rg3_tonnage, rg3_power, rg5_count, rg5_cost, rg5_tonnage,
		                rg5_power, rg8_count, rg8_cost, rg8_tonnage, rg8_power, or4_count, or4_cost, or4_tonnage, or4_power,
		                or8_count, or8_cost, or8_tonnage, or8_power, or16_count, or16_cost, or16_tonnage, or16_power,
		                or32_count, or32_cost, or32_tonnage, or32_power, spl_count, spl_cost, spl_tonnage, spl_power, mpl_count,
		                mpl_cost, mpl_tonnage, mpl_power, lpl_count, lpl_cost, lpl_tonnage, lpl_power, sil_count, sil_cost,
		                sil_tonnage, sil_power, mil_count, mil_cost, mil_tonnage, mil_power, lil_count, lil_cost, lil_tonnage,
		                lil_power, sel_count, sel_cost, sel_tonnage, sel_power, mel_count, mel_cost, mel_tonnage, mel_power,
		                lel_count, lel_cost, lel_tonnage, lel_power, pb_count, pb_cost, pb_tonnage, pb_power, pba_count,
		                pba_cost, pba_tonnage, pba_power, srm2_count, srm2_cost, srm2_tonnage, srm2_power, srm4_count, srm4_cost,
		                srm4_tonnage, srm4_power, srm6_count, srm6_cost, srm6_tonnage, srm6_power, srm8_count, srm8_cost,
		                srm8_tonnage, srm8_power, lrm5_count, lrm5_cost, lrm5_tonnage, lrm5_power, lrm10_count, lrm10_cost,
		                lrm10_tonnage, lrm10_power, lrm15_count, lrm15_cost, lrm15_tonnage, lrm15_power, lrm20_count, lrm20_cost,
		                lrm20_tonnage, lrm20_power, tt_count, tt_cost, tt_tonnage, tt_power, tta_count, tta_cost, tta_tonnage,
		                tta_power, sc_count, sc_cost, sc_tonnage, sc_power, sca_count, sca_cost, sca_tonnage, sca_power,
		                spdl_count, spdl_cost, spdl_tonnage, spdl_power, mpdl_count, mpdl_cost, mpdl_tonnage, mpdl_power,
		                lpdl_count, lpdl_cost, lpdl_tonnage, lpdl_power, designation, average_type, cost, upkeep, monthly,
		                tonnage_used, remaining_tonnage, power, hull, structure, agility, kinetic_dr, energy_dr, rad_dr,
		                explosive_dr);
		localStorage.setItem('ShipData', all_values);
		$('#loading.warning').hide();
		$('#save-data').text('Success')
	});

	// Load
	$('#load-data').on('click', function(){
		if ((localStorage.getItem('ShipData')) != undefined) {
			$('#loading.warning').hide();
		} else {
			$('#loading.warning').show();
		}
	});
});