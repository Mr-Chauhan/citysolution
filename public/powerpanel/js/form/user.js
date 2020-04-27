function KeycheckOnlyPhonenumber(e) {
								var t = 0;
								t = document.all ? 3 : document.getElementById ? 1 : document.layers ? 2 : 0;
								if (document.all) e = window.event;
								var n = "";
								var r = "";
								if (t == 2) {
										if (e.which > 0) n = "(" + String.fromCharCode(e.which) + ")";
										r = e.which
								} else {
										if (t == 3) {
												r = window.event ? event.keyCode : e.which
										} else {
												if (e.charCode > 0) n = "(" + String.fromCharCode(e.charCode) + ")";
												r = e.charCode
										}
								}
								if (r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 33 && r <= 39 || r >= 42 && r <= 42 || r >= 44 && r <= 44 || r >= 46 && r <= 47 || r >= 58 && r <= 64 || r >= 91 && r <= 96 || r >= 123 && r <= 126) {
										return false
								}
								return true
						}

						var Validate = function() {
								var handleContact = function() {
										$("#frmuser").validate({
												errorElement: 'span', //default input error message container
												errorClass: 'help-block', // default input error message class
												ignore: [],
												rules: {
													varName: {
																required: true,
																noSpace: true,
																xssProtection: true,
																check_special_char:true,
																no_url:true
                                                        },
                                                        fkRoleId: {
                                                            required: true,
                                                            noSpace: true,
                                                            xssProtection: true,
                                                            check_special_char:true,
                                                            no_url:true
                                                    },
													is_active: {
																required: true,
																minlength: 6,
																maxlength: 20,
                                                                //  {
																// 		depends: function() {
																// 				if (($("#phone_no").val()) != '') {
																// 						return true;
																// 				} else {
																// 						return false;
																// 				}
																// 		}
																// }
														},
														// "g-recaptcha-response": {
														// 	required:{
														// 		depends: function () {
														// 				if (deviceType != 'mobile') {
														// 					return true;
														// 				} else {
														// 					return false;
														// 				}
														// 			}
														// 		}
														// },
														varPersonalEmail: {
																required: true,
																emailFormat: true
														},
														varEmail: {
															required: true,
															emailFormat: true
													},
													password: {
																xssProtection: true,
																check_special_char:true,
																no_url:true
														},
												},
												messages: {
													varName: {
                                                            required: "Please enter first name.",
                                                        },
                                                        fkRoleId: {
                                                            required: "Please enter last name.",
                                                    },
													is_active: {
															  required: "Please enter phone.",
																maxlength: "You reach the maximum limit."
														},
														varPersonalEmail: {
																required: "Please enter email."
														},
														varPersonalEvarEmailmail: {
															required: "Please enter email."
													},
													password: {
														required: "Please enter email."
												},
												// 		'g-recaptcha-response': {
												// 		required: "Captcha is required"
												//    }
												},
												errorPlacement: function(error, element) {
														if (element.attr('id') == 'g-recaptcha-response') {
																error.insertAfter(element.parent());
														} else {
																error.insertAfter(element);
														}
												},
												invalidHandler: function(event, validator) { //display error alert on form submit   
														$('.alert-danger', $('#frmuser')).show();
												},
												highlight: function(element) { // hightlight error inputs
														$(element).closest('.form-group').addClass('has-error'); // set error class to the control group
												},
												unhighlight: function(element) {
														$(element).closest('.form-group').removeClass('has-error'); // set error class to the control group
												},
												submitHandler: function(form) {
														form.submit();
														// return false;
												},
												submitHandler: function(form) {
													form.submit();
														// grecaptcha.execute();
												}
										});
								}
								return {
										//main function to initiate the module
										init: function() {
												handleContact();
										}
								};
						}();

						function hiddenCallBack() {
								document.getElementById("cont").submit();
						}

						jQuery(document).ready(function() {
								Validate.init();
								$.validator.addMethod("phonenumber", function(value, element) {
										var numberPattern = /\d+/g;
										var newVal = value.replace(/\D/g);
										if (parseInt(newVal) <= 0) {
												return false;
										} else {
												return true;
										}
								}, 'Please enter a valid phone number.');
								$.validator.addMethod("minimum_length", function(value, element) {
										if ($("#phone_no").val().length < 5 || $("#phone_no").val().length > 20) {
												return false;
										} else {
												return false;
										}
								}, 'Please enter a phone number minimum 5 digits and maximum 20 digits.');
								jQuery.validator.addMethod("noSpace", function(value, element) {
										if (value.trim().length <= 0) {
												return false;
										} else {
												return true;
										}
								}, "No space please and don't leave it empty");
						});

						$.validator.addMethod("check_special_char", function(value, element) {
						    if (value != '') {
						        if (value.match(/^[\x20-\x7E\n]+$/)) {
						            return true;
						        } else {
						            return false;
						        }
						    } else {
						        return true;
						    }
						}, 'Please enter valid input');

						$.validator.addMethod('no_url', function(value, element) {
						    var re = /^[a-zA-Z0-9\-\.\:\\]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)$/;
						    var re1 = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
						    var trimmed = $.trim(value);
						    if (trimmed == '') {
						        return true;
						    }
						    if (trimmed.match(re) == null && re1.test(trimmed) == false) {
						        return true;
						    }
						}, "URL not allow");

						jQuery.validator.addMethod("emailFormat", function(value, element) {
								// allow any non-whitespace characters as the host part
								return this.optional(element) || /^[_A-Za-z0-9-]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,4})$/.test(value);
						}, 'Enter valid email format');

						jQuery.validator.addMethod("messageValidation", function(value, element) {
								// allow any non-whitespace characters as the host part
								return this.optional(element) || /<(\w+)((?:\s+\w+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/.test(value) == false ? true : false;
						}, 'Enter valid message');

								jQuery.validator.addMethod("xssProtection", function(value, element) {
								return validateXSSInput(value);
						}, "Please enter valid input.");

						$('input[name=varEmail]').change(function() {
								var email = $(this).val();
								var trim_email = email.trim();
								if (trim_email) {
										$(this).val(trim_email);
										return true;
								}
						});
				function occurrences(string, substring) {
						var n = 0;
						var pos = 0;
						while (true) {
								pos = string.indexOf(substring, pos);
								if (pos != -1) {
										n++;
										pos += substring.length;
								} else {
										break;
								}
						}
						return (n);
				}

				function validateXSSInput(value) {
						var count = occurrences(value, '#');
						var value1 = $("<textarea/>").html(value).val();
						for (var i = 1; i <= count; i++) {
								value1 = $("<textarea/>").html(value1).val();
						}
						if (value.match(/((\%3C)|<)((\%2F)|\/)*[a-z0-9\%]+((\%3E)|>)/i)) {
								return false;
						} else if (value.match(/<img|script[^>]+src/i)) {
								return false;
						} else if (value1.match(/((\%3C)|<)((\%2F)|\/)*[a-z0-9\%]+((\%3E)|>)/i)) {
								return false;
						} else if (value1.match(/<img|script[^>]+src/i)) {
								return false;
						} else if (value1.match(/((\%3C)|<)(|\s|\S)+((\%3E)|>)/i)) {
								return false;
						} else {
								return true;
						}
				}

// 	 function initMap() {
// 				var map;
// 				geocoder = new google.maps.Geocoder();
// 				if (geocoder) {
// 								geocoder.geocode({
// 												'address': address
// 								}, function(results, status) {
// 												if (status == google.maps.GeocoderStatus.OK) {
// 																var lattitude = results[0].geometry.location.lat();
// 																var longitude = results[0].geometry.location.lng();

// 																map = new google.maps.Map(document.getElementById('map'), {
// 																				center: {
// 																								lat: lattitude,
// 																								lng: longitude
// 																				},
// 																				zoom: 20,
// 																				styles: [{
// 																								"elementType": "geometry",
// 																								"stylers": [{
// 																												"color": "#ebe3cd"
// 																								}]
// 																				}, {
// 																								"elementType": "labels.text.fill",
// 																								"stylers": [{
// 																												"color": "#523735"
// 																								}]
// 																				}, {
// 																								"elementType": "labels.text.stroke",
// 																								"stylers": [{
// 																												"color": "#f5f1e6"
// 																								}]
// 																				}, {
// 																								"featureType": "administrative",
// 																								"elementType": "geometry.stroke",
// 																								"stylers": [{
// 																												"color": "#c9b2a6"
// 																								}]
// 																				}, {
// 																								"featureType": "administrative.land_parcel",
// 																								"elementType": "geometry.stroke",
// 																								"stylers": [{
// 																												"color": "#dcd2be"
// 																								}]
// 																				}, {
// 																								"featureType": "administrative.land_parcel",
// 																								"elementType": "labels.text.fill",
// 																								"stylers": [{
// 																												"color": "#ae9e90"
// 																								}]
// 																				}, {
// 																								"featureType": "landscape.natural",
// 																								"elementType": "geometry",
// 																								"stylers": [{
// 																												"color": "#dfd2ae"
// 																								}]
// 																				}, {
// 																								"featureType": "poi",
// 																								"elementType": "geometry",
// 																								"stylers": [{
// 																												"color": "#dfd2ae"
// 																								}]
// 																				}, {
// 																								"featureType": "poi",
// 																								"elementType": "labels.text.fill",
// 																								"stylers": [{
// 																												"color": "#93817c"
// 																								}]
// 																				}, {
// 																								"featureType": "poi.park",
// 																								"elementType": "geometry.fill",
// 																								"stylers": [{
// 																												"color": "#a5b076"
// 																								}]
// 																				}, {
// 																								"featureType": "poi.park",
// 																								"elementType": "labels.text.fill",
// 																								"stylers": [{
// 																												"color": "#447530"
// 																								}]
// 																				}, {
// 																								"featureType": "road",
// 																								"elementType": "geometry",
// 																								"stylers": [{
// 																												"color": "#f5f1e6"
// 																								}]
// 																				}, {
// 																								"featureType": "road.arterial",
// 																								"elementType": "geometry",
// 																								"stylers": [{
// 																												"color": "#fdfcf8"
// 																								}]
// 																				}, {
// 																								"featureType": "road.highway",
// 																								"elementType": "geometry",
// 																								"stylers": [{
// 																												"color": "#f8c967"
// 																								}]
// 																				}, {
// 																								"featureType": "road.highway",
// 																								"elementType": "geometry.stroke",
// 																								"stylers": [{
// 																												"color": "#e9bc62"
// 																								}]
// 																				}, {
// 																								"featureType": "road.highway.controlled_access",
// 																								"elementType": "geometry",
// 																								"stylers": [{
// 																												"color": "#e98d58"
// 																								}]
// 																				}, {
// 																								"featureType": "road.highway.controlled_access",
// 																								"elementType": "geometry.stroke",
// 																								"stylers": [{
// 																												"color": "#db8555"
// 																								}]
// 																				}, {
// 																								"featureType": "road.local",
// 																								"elementType": "labels.text.fill",
// 																								"stylers": [{
// 																												"color": "#806b63"
// 																								}]
// 																				}, {
// 																								"featureType": "transit.line",
// 																								"elementType": "geometry",
// 																								"stylers": [{
// 																												"color": "#dfd2ae"
// 																								}]
// 																				}, {
// 																								"featureType": "transit.line",
// 																								"elementType": "labels.text.fill",
// 																								"stylers": [{
// 																												"color": "#8f7d77"
// 																								}]
// 																				}, {
// 																								"featureType": "transit.line",
// 																								"elementType": "labels.text.stroke",
// 																								"stylers": [{
// 																												"color": "#ebe3cd"
// 																								}]
// 																				}, {
// 																								"featureType": "transit.station",
// 																								"elementType": "geometry",
// 																								"stylers": [{
// 																												"color": "#dfd2ae"
// 																								}]
// 																				}, {
// 																								"featureType": "water",
// 																								"elementType": "geometry.fill",
// 																								"stylers": [{
// 																												"color": "#b9d3c2"
// 																								}]
// 																				}, {
// 																								"featureType": "water",
// 																								"elementType": "labels.text.fill",
// 																								"stylers": [{
// 																												"color": "#92998d"
// 																								}]
// 																				}]
// 																});

// 																var infowindow = new google.maps.InfoWindow({
// 																				content: pinaddress
// 																});

// 																var marker = new google.maps.Marker({
// 																				position: {
// 																								lat: lattitude,
// 																								lng: longitude
// 																				},
// 																				map: map
// 																});

// 																marker.addListener('click', function() {
// 																				infowindow.open(map, marker);
// 																});
// 																infowindow.open(map, marker);

// 												}
// 								});
// 				}
// }