const { Product, User, Category, ProductsCategories } = require("./models")

const productsSeed = [
    {
        "title": "mouse",
        "marca": "logitech",
        "categoryId": 5,
        "price": 3000,
        "description": "mouse gamer de primera calidad",
        "quantity": 10,
        "colors": ["blue", "red"],
        "imageUrl": "https://images-ext-2.discordapp.net/external/xQ1zZ84S7n-wpkZguR5hqdro0ZFk_8QVKZNlpQ8slJ0/https/compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_9518_Mouse_Logitech_G_PRO_Hero_Gaming_16000DPI_RGB_2934063c-grn.jpg"
    },
    {
        "title": "mouse",
        "marca": "hyperex",
        "categoryId": 5,
        "price": 5000,
        "description": "Mouse gamer de muy buena calidad!",
        "quantity": 17,
        "colors": ["blue", "red"],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_10464_Mouse_HyperX_Pulsefire_Surge_RGB_16_000_DPI_12744384-grn.jpg"
    },
    {
        "title": "mouse",
        "marca": "logitech",
        "categoryId": 5,
        "price": 7000,
        "description": "Mouse gamer super comodo",
        "quantity": 5,
        "colors": ["blue", "red"],
        "imageUrl": "https://images-ext-2.discordapp.net/external/gkGNj2vOEprU3_0DpakAHHtHCqaR0yfpHg_JmmCNpp8/https/compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_9807_Mouse_Logitech_G903_Lightspeed_Wireless_Gaming_16.000dpi_86c5e07e-grn.jpg"
    },
    {
        "title": "mouse",
        "marca": "redragon",
        "categoryId": 5,
        "price": 2500,
        "description": "mouse gamer muy piola",
        "quantity": 6,
        "colors": ["blue", "red"],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13006_Mouse_Redragon_Invader_M719_RGB_10.000dpi_35f6cdc8-grn.jpg"
    },
    {
        "title": "mouse",
        "marca": "redragon",
        "categoryId": 5,
        "price": 4000,
        "description": "mouse gamer para no parar de jugar",
        "quantity": 18,
        "colors": ["blue", "red"],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20297_Mouse_Redragon_Storm_Elite_M988-RGB_f25e5643-med.jpg"
    },
    {
        "title": "mouse",
        "marca": "logitech",
        "categoryId": 5,
        "price": 5000,
        "description": "mouse inalambrico gamer",
        "quantity": 4,
        "colors": ["blue", "red"],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_21243_Mouse_Inalambrico_Logitech_G305_Lightspeed_Blue_9c250057-grn.jpg"
    },
    {
        "title": "teclado",
        "marca": "logitech",
        "categoryId": 4,
        "price": 15000,
        "description": "teclado rgb gamer!",
        "quantity": 11,
        "colors": ["blue", "red"],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_4465_Teclado_Mecanico_Logitech_G413_Carbon_Mec__nico_US_40e6061e-grn.jpg"
    },
    {
        "title": "teclado",
        "marca": "redragon",
        "categoryId": 4,
        "price": 4000,
        "description": "teclado gamer buenisimo re piola es clave re fachita",
        "quantity": 5,
        "colors": ["blue", "red"],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_8903_Teclado_Redragon_Kumara_K552_Mechanical_RGB_Espa__ol_Switch_Outemu_Red_2e7c11dd-grn.jpg"
    },
    {
        "title": "teclado",
        "marca": "hyperx",
        "categoryId": 4,
        "price": 11000,
        "description": "teclado pa juga",
        "quantity": 19,
        "colors": ["blue", "red"],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26224_Teclado_Mecanico_HyperX_Alloy_FPS_Pro_Cherry_MX_Blue_5ea0203d-grn.jpg"
    },
    {
        "title": "teclado   ",
        "marca": "logitech",
        "categoryId": 4,
        "price": 16000,
        "description": "teclado gamer para jugar!!",
        "quantity": 20,
        "colors": ["blue", "red"],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_12000_Teclado_Logitech_G213_Prodigy_RGB_Gaming_Ingl__s_Internacional_d2a6c763-grn.jpg"
    },
    {
        "title": "teclado",
        "marca": "logitech",
        "categoryId": 4,
        "price": 2999,
        "description": "teclado inalambrico",
        "quantity": 100,
        "colors": ["blue", "red"],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_876_Teclado_Logitech_Wireless_K230__b5b8f076-grn.jpg"
    },
    {
        "title": "teclado",
        "marca": "redragon",
        "categoryId": 4,
        "price": 15000,
        "description": "teclado gamer rgb!",
        "quantity": 19,
        "colors": ["blue", "red"],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_9318_Teclado_Mecanico_Redragon_K550_YAMA_White_Retroiluminado_RGB_Espa__ol_03de67c4-grn.jpg"
    },
    {
        "title": "teclado",
        "marca": "hyperx",
        "categoryId": 4,
        "price": 8000,
        "description": "teclado gamer rgb",
        "quantity": 99,
        "colors": ["blue", "red"],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26679_Teclado_Mecanico_HyperX_Alloy_Origins_Core_Switch_HyperX_Blue_5dfa8f9a-grn.jpg"
    },

    {
        "title": "teclado",
        "marca": "logitech",
        "categoryId": 4,
        "price": 9000,
        "description": "teclado gamer rgb",
        "quantity": 99,
        "colors": ["blue", "red"],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_4468_Teclado_Logitech_G213_Prodigy_RGB_Gaming_Espa__ol_ES_7f6b69a5-grn.jpg"
    },
    {
        "title": "monitor",
        "marca": "lg",
        "categoryId": 3,
        "price": 17000,
        "description": "monitor full hd 4k ",
        "quantity": 7,
        "colors": ["blue", "red"],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_8683_Monitor_LG_LED_19___19M38A-B_VGA_4607eba4-grn.jpg"
    },
    {
        "title": "monitor",
        "marca": "samsung",
        "categoryId": 3,
        "price": 20000,
        "description": "monitor full hd 4k 22 pulgadas",
        "quantity": 11,
        "colors": ["blue", "red"],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26106_Monitor_Samsung_22__T350FH_FHD_IPS_75Hz_46500864-grn.jpg"
    },
    {
        "title": "monitor",
        "marca": "samsung",
        "categoryId": 3,
        "price": 35000,
        "description": "monitor fullhd 4k para jugar con muy buena calidad",
        "quantity": 18,
        "colors": ["blue", "red"],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25648_Monitor_Samsung_24__T350H_FHD_IPS_75Hz_1ccbba93-grn.jpg"
    },
    {
        "title": "monitor",
        "marca": "asus",
        "categoryId": 3,
        "price": 40000,
        "description": "monitor fullhd 8k!!",
        "quantity": 4,
        "colors": ["blue", "red"],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_27034_Monitor_ASUS_21.5__Full_HD_1ms_HDMI_VGA_VP228HE-J_a797ab9e-grn.jpg"
    },
    {
        "title": "monitor",
        "marca": "samsung",
        "categoryId": 3,
        "price": 50000,
        "description": "monitor 4k curvo!",
        "quantity": 9,
        "colors": ["blue", "red"],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_8720_Monitor_Samsung_24___Curvo_F390_3a4722ad-grn.jpg"
    },
    {
        "title": "monitor",
        "marca": "lg",
        "categoryId": 3,
        "price": 18000,
        "description": "monitor re lindo",
        "quantity": 19,
        "colors": ["blue", "red"],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13403_Monitor_LG_27__TN_75Hz_AMD_FreeSync_Full_HD_27MK400H-B_ae7d85cd-grn.jpg"
    },
    {
        "title": "hdmi",
        "marca": "nisuta",
        "categoryId": 11,
        "price": 700,
        "description": "cable hdmi para conectar donde vos quieras",
        "quantity": 1500,
        "colors": ["blue", "red"],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_19679_Cable_HDMI_Nisuta_3m_Dorado_V2.0_con_Filtros_2160P_4K_x_2K_4af7cdc5-grn.jpg"
    },
    {
        "title": " cable usb 3.0",
        "marca": "nisuta",
        "categoryId": 11,
        "price": 1000,
        "description": "cable usb 3.0 para cargar tu celu o lo que quieras ",
        "quantity": 1000,
        "colors": ["blue", "red"],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_15037_Cable_USB_3.1_tip_C_a_USB_3.0_1m_Nisuta_0e42250e-grn.jpg"
    },
    {
        "title": "mother",
        "marca": "asus",
        "categoryId": 7,
        "price": 7000,
        "description": "mother asus gamer",
        "quantity": 12,
        "colors": ["blue", "red"],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_6857_Mother_ASUS_A68HM-PLUS_AMD_FM2__e96d1e05-grn.jpg"
    },
    {
        "title": "mother",
        "marca": "asrock",
        "categoryId": 7,
        "price": 8000,
        "description": "mother gamer asrock m-atx",
        "quantity": 18,
        "colors": ["blue", "red"],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_12738_Mother_Asrock_A320M-HDV_R4.03_Ryzen_M-ATX_bfcdd1cc-grn.jpg"
    },
    {
        "title": "mother",
        "marca": "asrock",
        "categoryId": 7,
        "price": 18000,
        "description": "mother asrock gamer para cualquier pc",
        "quantity": 34,
        "colors": ["blue", "red"],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20636_Mother_Asrock_A520M-HVS_AM4_c8f1be61-grn.jpg"
    },
    {
        "title": "mother",
        "marca": "asus",
        "categoryId": 7,
        "price": 9000,
        "description": "mother asus gamer rgb",
        "quantity": 18,
        "colors": ["blue", "red"],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_24608_Mother_ASUS_PRO_A320M-R_WI-FI_CSM_AM4_OEM_bd2f2244-grn.jpg"
    },
    {
        "title": "mother",
        "marca": "gigabyte",
        "price": 9000,
        "categoryId": 7,
        "description": "mother gigabyte gamer rgb",
        "quantity": 13,
        "colors": ["blue", "red"],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_14179_Mother_Gigabyte_AB350M_V2.0_DS3H_AM4_a4060e9c-grn.jpg"
    },
    {
        "title": "mother",
        "marca": "msi",
        "categoryId": 7,
        "price": 9000,
        "description": "mother msi gamer ",
        "quantity": 90,
        "colors": ["blue", "red"],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_18186_Mother_MSI_B450M_PRO-M2_MAX_e7fad6b9-grn.jpg"
    },
    {
        "title": "mother",
        "marca": "gigabyte",
        "categoryId": 7,
        "price": 10000,
        "description": "mother gigabyte gamer",
        "quantity": 17,
        "colors": ["blue", "red"],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20432_Mother_Gigabyte_A520M_H_AM4_ec538d8f-grn.jpg"
    },
    {
        "title": "mother",
        "marca": "asrock",
        "categoryId": 7,
        "price": 10000,
        "description": "mother asrock gamer",
        "quantity": 24,
        "colors": ["blue", "red"],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_12882_Mother_Asrock_B450M_Steel_Legend_AM4_RGB_Dual_M.2_Dual_USB_3.1__15d7a4e2-grn.jpg"
    },
    {
        "title": "pc completa intel i3",
        "marca": "intel",
        "categoryId": 1,
        "price": 65000,
        "description": 'lorem ipsum dolor sit amet, consectetur adipiscing elit. multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis; ea possunt paria non esse. venit ad extremum;',
        "quantity": 10,
        "colors": [],
        "imageUrl": "https://www.xt-pc.com.ar/img/productos/Pics_Prod/PGI185.jpg"
    },
    {
        "title": "pc completa Intel i5",
        "marca": "intel",
        "categoryId": 1,
        "price": 85000,
        "description": 'lorem ipsum dolor sit amet, consectetur adipiscing elit. multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis; ea possunt paria non esse. venit ad extremum;',
        "quantity": 10,
        "colors": [],
        "imageUrl": "https://http2.mlstatic.com/D_NQ_NP_865489-MLA31012293774_062019-O.jpg"
    },
    {
        "title": "pc completa Intel i7",
        "marca": "intel",
        "categoryId": 1,
        "price": 103000,
        "description": 'lorem ipsum dolor sit amet, consectetur adipiscing elit. multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis; ea possunt paria non esse. venit ad extremum;',
        "quantity": 10,
        "colors": [],
        "imageUrl": "https://http2.mlstatic.com/D_NQ_NP_727472-MLA43644710370_102020-O.jpg"
    },
    {
        "title": "pc completa Intel i9",
        "marca": "intel",
        "categoryId": 1,
        "price": 125000,
        "description": 'lorem ipsum dolor sit amet, consectetur adipiscing elit. multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis; ea possunt paria non esse. venit ad extremum;',
        "quantity": 10,
        "colors": [],
        "imageUrl": "https://d2r9epyceweg5n.cloudfront.net/stores/001/381/842/products/111-c6a90b8dd3930c7cb316206801967654-1024-1024.png"
    },
    {
        "title": "pc completa amd",
        "marca": "amd",
        "categoryId": 1,
        "price": 95000,
        "description": 'lorem ipsum dolor sit amet, consectetur adipiscing elit. multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis; ea possunt paria non esse. venit ad extremum;',
        "quantity": 10,
        "colors": [],
        "imageUrl": "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/pc-gamer-amd-ryzen-5-3400g--a320--16gb--1tb--kit-0.jpg"
    },
    {
        "title": "pc completa amd",
        "marca": "amd",
        "categoryId": 1,
        "price": 75000,
        "description": 'lorem ipsum dolor sit amet, consectetur adipiscing elit. multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis; ea possunt paria non esse. venit ad extremum;',
        "quantity": 10,
        "colors": [],
        "imageUrl": "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/pc-amd-apu-a6-7480--4gb-ddr3--1tb-hdd-0.jpg"
    },




    {
        "title": "procesador intel i5",
        "marca": "intel",
        "categoryId": 6,
        "price": 13000,
        "description": 'lorem ipsum dolor sit amet, consectetur adipiscing elit. multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis; ea possunt paria non esse. venit ad extremum;',
        "quantity": 5,
        "colors": [],
        "imageUrl": "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-core-i5-10400-0.jpg"
    },
    {
        "title": "procesador intel i7",
        "marca": "intel",
        "categoryId": 6,
        "price": 18000,
        "description": 'lorem ipsum dolor sit amet, consectetur adipiscing elit. multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis; ea possunt paria non esse. venit ad extremum;',
        "quantity": 5,
        "colors": [],
        "imageUrl": "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-core-i7-10700f-0.jpg"
    },
    {
        "title": "procesador intel i9",
        "marca": "intel",
        "categoryId": 6,
        "price": 36000,
        "description": 'lorem ipsum dolor sit amet, consectetur adipiscing elit. multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis; ea possunt paria non esse. venit ad extremum;',
        "quantity": 5,
        "colors": [],
        "imageUrl": "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-core-i9-9900k-36-ghz-0.jpg"
    },
    {
        "title": "procesador amd",
        "marca": "amd",
        "categoryId": 6,
        "price": 15000,
        "description": 'lorem ipsum dolor sit amet, consectetur adipiscing elit. multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis; ea possunt paria non esse. venit ad extremum;',
        "quantity": 5,
        "colors": [],
        "imageUrl": "https://http2.mlstatic.com/D_NQ_NP_861905-MLA43567007838_092020-O.jpg"
    },
    {
        "title": "procesador amd",
        "marca": "amd",
        "categoryId": 6,
        "price": 15000,
        "description": 'lorem ipsum dolor sit amet, consectetur adipiscing elit. multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis; ea possunt paria non esse. venit ad extremum;',
        "quantity": 5,
        "colors": [],
        "imageUrl": "https://http2.mlstatic.com/D_NQ_NP_650934-MLA31066880724_062019-O.jpg"
    },




    {
        "title": "memoria ram",
        "marca": "hyperx",
        "categoryId": 8,
        "price": 10000,
        "description": 'lorem ipsum dolor sit amet, consectetur adipiscing elit. multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis; ea possunt paria non esse. venit ad extremum;',
        "quantity": 5,
        "colors": [],
        "imageUrl": "https://www.computershopping.com.ar/Images/Productos/Kingston-HyperX-Fury-DDR4_Foto0.jpg"
    },
    {
        "title": "memoria ram",
        "marca": "kingston",
        "categoryId": 8,
        "price": 8000,
        "description": 'lorem ipsum dolor sit amet, consectetur adipiscing elit. multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis; ea possunt paria non esse. venit ad extremum;',
        "quantity": 5,
        "colors": [],
        "imageUrl": "https://http2.mlstatic.com/D_NQ_NP_600776-MLA31115415156_062019-O.jpg"
    },
    {
        "title": "memoria ram",
        "marca": "hyperx",
        "categoryId": 8,
        "price": 12000,
        "description": 'lorem ipsum dolor sit amet, consectetur adipiscing elit. multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis; ea possunt paria non esse. venit ad extremum;',
        "quantity": 5,
        "colors": [],
        "imageUrl": "https://www.computershopping.com.ar/Images/Productos/HyperX-Fury-4GB-1600MHz_Foto0.jpg"
    },
    {
        "title": "fuente",
        "marca": "corsair",
        "categoryId": 9,
        "price": 17000,
        "description": 'lorem ipsum dolor sit amet, consectetur adipiscing elit. multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis; ea possunt paria non esse. venit ad extremum;',
        "quantity": 5,
        "colors": ["black"],
        "imageUrl": "https://mla-s1-p.mlstatic.com/995024-MLA43262008086_082020-F.jpg"
    },
    {
        "title": "fuente",
        "marca": "atx",
        "categoryId": 9,
        "price": 17000,
        "description": 'lorem ipsum dolor sit amet, consectetur adipiscing elit. multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis; ea possunt paria non esse. venit ad extremum;',
        "quantity": 5,
        "colors": ["black"],
        "imageUrl": "https://www.armytech.com.ar/Image/0/500_500-500W.jpg"
    },
    {
        "title": "auriculares",
        "marca": "kotion each",
        "categoryId": 10,
        "price": 8000,
        "description": 'lorem ipsum dolor sit amet, consectetur adipiscing elit. multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis; ea possunt paria non esse. venit ad extremum;',
        "quantity": 5,
        "colors": ["black"],
        "imageUrl": "https://http2.mlstatic.com/D_NQ_NP_738955-MLA40252400386_122019-O.jpg"
    },

    {
        "title": "auriculares",
        "marca": "boomen",
        "categoryId": 10,
        "price": 13000,
        "description": 'lorem ipsum dolor sit amet, consectetur adipiscing elit. multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis; ea possunt paria non esse. venit ad extremum;',
        "quantity": 5,
        "colors": ["black"],
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/61o-AamwyEL._AC_SX522_.jpg"
    },

    {
        "title": "auriculares",
        "marca": "gaming hd",
        "categoryId": 10,
        "price": 10000,
        "description": 'lorem ipsum dolor sit amet, consectetur adipiscing elit. multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis; ea possunt paria non esse. venit ad extremum;',
        "quantity": 5,
        "colors": ["black"],
        "imageUrl": "https://d3ugyf2ht6aenh.cloudfront.net/stores/904/750/products/auricular-time-caro-21-98774f42acf81f42ef15991497677437-1024-1024.png"
    },
    {
        "title": "notebook lenovo 14 amd pro",
        "marca": "lenovo",
        "categoryId": 2,
        "price": 49200,
        "description": "muy buena compu",
        "quantity": 10,
        "colors": [
            "black",
            "red"
        ],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_24158_Notebook_Lenovo_14__AMD_Pro_A4-4350B_4GB_500GB_DOS_28a58e50-grn.jpg"
    },
    {
        "title": "notebook Lenovo 15 intel",
        "marca": "lenovo",
        "categoryId": 2,
        "price": 75000,
        "description": "alta compu",
        "quantity": 10,
        "colors": [
            "black",
            "blue"
        ],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25502_Notebook_Lenovo_V130_15.6__Intel_N4000_4GB_1TB_Free_DOS_US_ab30d598-grn.jpg"
    },
    {
        "title": "notebook hp 14 intel i3 pro",
        "marca": "hp",
        "categoryId": 2,
        "price": 85000,
        "description": "computadora hp intel i3",
        "quantity": 10,
        "colors": [
            "white",
            "red"
        ],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22813_Notebook_HP_14__240_G7_Core_i3_8130U_4GB_1TB_Win10_9b0f3aa9-grn.jpg"
    },
    {
        "title": "notebook vivobook 14 intel i5",
        "marca": "vivobook",
        "categoryId": 2,
        "price": 95000,
        "description": "vivobook 14, pedazo de notebook",
        "quantity": 10,
        "colors": [
            "white",
            "black",
            "red"
        ],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25112_Notebook_ASUS_Vivobook_K513EA_15.6__FHD_Core_i5_1135G7_8GB_256GB__Freedos_4e0d0ea6-grn.jpg"
    },
    {
        "title": "notebook asus r30 amd pro",
        "marca": "ASUS",
        "categoryId": 2,
        "price": 85260,
        "description": "notebook asus r30 pro, alta notebook",
        "quantity": 12,
        "colors": [
            "red",
            "white",
            "black"
        ],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_24148_Notebook_ASUS_ZenBook_UX433FLC_14__i5_10210U_8GB_SSD_512GB_Optane_32GB_WIN10_3a47585a-grn.jpg"
    },
    {
        "title": "notebook zenbook",
        "marca": "zenbook",
        "categoryId": 2,
        "price": 90000,
        "description": "pedazo de compu",
        "quantity": 15,
        "colors": [
            "blue",
            "white"
        ],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25089_Notebook_ASUS_ZenBook_UX425EA_14__Core_i5_1135G7_8GB_SSD_512GB__WIN10_050d4e67-grn.jpg"
    },
    {
        "title": "notebook zenbook 16",
        "marca": "lenovo",
        "categoryId": 2,
        "price": 105000,
        "description": "notebook zenbook 16",
        "quantity": 11,
        "colors": [
            "black",
            "red"
        ],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26542_Notebook_ASUS_ZenBook_UX425EA_14__Core_i7_1165G7_16GB_M.2_512GB__WIN10_38456ef8-grn.jpg"
    },
    {
        "title": "notebook asus rz-16 ",
        "marca": "asus",
        "categoryId": 2,
        "price": 130000,
        "description": "pero que pedazo de compu!!!",
        "quantity": 8,
        "colors": [
            "white",
            "black"
        ],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26535_Notebook_ASUS_ROG_ZEPHYRUS_14__WQHD__RYZEN_9_4900HS_16GB_1TB_NVMe_RTX_2060_b8ffd6ee-grn.jpg"
    },
    {
        "title": "notebook lenovo ideapad 5 ryzen 5",
        "marca": "ideapad",
        "categoryId": 2,
        "price": 49200,
        "description": "una compu del carajo!!!",
        "quantity": 10,
        "colors": [
            "whtie",
            "black",
            "blue"
        ],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22323_Notebook_Lenovo_IdeaPad_3_14__Ryzen_5_3500U_8GB_SSD_256_Win10_Ingles_Azul_9249f24b-grn.jpg"
    },
    {
        "title": "notebook asus ryzen 7",
        "marca": "asus",
        "categoryId": 2,
        "price": 135000,
        "description": "muy buena compu",
        "quantity": 18,
        "colors": [
            "black",
            "white",
            "blue",
            "brown"
        ],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26623_Notebook_ASUS_TUF_FA506_15.6__144Hz_Ryzen_7_4800H_GTX1660Ti_6GB_DDR4_16GB__M.2_512GB_d1b51c53-grn.jpg"
    },
    {
        "title": "impresora",
        "marca": "hp",
        "categoryId": 12,
        "price": 8000,
        "description": "imprime re piola",
        "quantity": 100,
        "colors": [
            "black",
            "white",
            "blue",
            "brown"
        ],
        "imageUrl": "http://medias.musimundo.com/medias/00212183-136849-136849-01-136849-01.jpg-size515?context=bWFzdGVyfGltYWdlc3wyOTcxMHxpbWFnZS9qcGVnfGg1Mi9oOGUvMTAyMzM1NTUxODk3OTAvMDAyMTIxODMtMTM2ODQ5LTEzNjg0OV8wMS0xMzY4NDlfMDEuanBnX3NpemU1MTV8YjA5NGMyN2QwNDZhZDBiODhhZjE3NTk2MTcyYTQ3NzYyZDhjNGUzNmJjMjg2OWU3NjEyOTIwMzg0Y2IxODAyNg"
    }, {
        "title": "impresora",
        "marca": "epson",
        "categoryId": 12,
        "price": 5000,
        "description": "imprime bien",
        "quantity": 11,
        "colors": [
            "black",
            "white",
            "blue",
            "brown"
        ],
        "imageUrl": "http://medias.musimundo.com/medias/00369001-142814-142814-01-142814-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MDY0NXxpbWFnZS9qcGVnfGhlNS9oMTcvMTAyNTc2ODUwMjA3MDIvMDAzNjkwMDEtMTQyODE0LTE0MjgxNF8wMS0xNDI4MTRfMDEuanBnX3NpemU1MTV8ZDJkNGIwNGQwNmY1OTM1OGRiMDFhZjNjZDE1ZTg5ZmNlNTcyMzNlMzY3YTQ5MDA1MzRkNjY1NzRmNDFkODQ4Mw"
    }, {
        "title": "impresora",
        "marca": "xerox",
        "categoryId": 12,
        "price": 1000,
        "description": "imprime maso menos",
        "quantity": 15,
        "colors": [
            "black",
            "white",
            "blue",
            "brown"
        ],
        "imageUrl": "http://medias.musimundo.com/medias/00321720-140379-140379-01-140379-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MzE2NHxpbWFnZS9qcGVnfGg0Ny9oYTEvMTAyMzQyNzIxMjA4NjIvMDAzMjE3MjAtMTQwMzc5LTE0MDM3OV8wMS0xNDAzNzlfMDEuanBnX3NpemU1MTV8ZDRkOTI2MDVkNjI2YjVlZjhiYjA4MTU0NzUyYzU2ZjNiMDVlODMzYmEzOGE1ODk1ZTc3MmFhOGI5MTQ3MTA1Zg"
    }, {
        "title": "impresora",
        "marca": "brother",
        "categoryId": 12,
        "price": 200,
        "description": "imprime hasta ahi",
        "quantity": 100,
        "colors": [
            "black",
            "white",
            "blue",
            "brown"
        ],
        "imageUrl": "http://medias.musimundo.com/medias/00005804-130371-130371-01-130371-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w2MjIzNXxpbWFnZS9qcGVnfGhkNS9oMWIvMTAyMzI0MjcyMTY5MjYvMDAwMDU4MDQtMTMwMzcxLTEzMDM3MV8wMS0xMzAzNzFfMDEuanBnX3NpemU1MTV8MzljN2ZjMWNkOWEyYTYxMTNlZjZiMzMzNTE2MmMzYTkyYTdiOGExZDcwY2FlZjc5ODU4NGFhZmIxZjIyNTIyMA"
    }, {
        "title": "impresora",
        "marca": "hp",
        "categoryId": 12,
        "price": 9500,
        "description": "imprime re bien los colores!",
        "quantity": 16,
        "colors": [
            "black",
            "white",
            "blue",
            "brown"
        ],
        "imageUrl": "http://medias.musimundo.com/medias/00135022-135724-135724-01-135724-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w0OTQ5MnxpbWFnZS9qcGVnfGg0MS9oZjkvMTAyNTc1MTk5MDI3NTAvMDAxMzUwMjItMTM1NzI0LTEzNTcyNF8wMS0xMzU3MjRfMDEuanBnX3NpemU1MTV8YmRmZmRmNWNiMDJiYzBlOTZlMDZlZTQyM2VjMmRkNDM2M2UxNjUzZTBjNzZhMjAzMWRmYzg1NzMxOGIwMzg2NA"
    },
]

const userSeed = [
    {
        "name": "Carlos Gonzales",
        "email": "carlitos@branchgamer.com",
        "password": "carlos2407",
        "isAdmin": true
    }
]

const categorySeed = [
    {
        "name": "completa" //1 ***
    },
    {
        "name": "laptop" //2 ***
    },
    {
        "name": "monitor" //3 ***
    },
    {
        "name": "teclado" //4 ***
    },
    {
        "name": "mouse" //5 ***
    },
    {
        "name": "procesador" //6 ***
    },
    {
        "name": "mother" //7 ***
    },
    {
        "name": "ram" //8 ***
    },
    {
        "name": "fuente" //9 ***
    },
    {
        "name": "auricular" //10 ***
    },
    {
        "name": "conector" //11 ***
    },
    {
        "name": "impresora" //12 ***
    }
]



async function runSeed() {

    console.log("------------------\nEmpezando seed...\n------------------")

    await User.create(userSeed[0])
    await Promise.all(productsSeed.map(producto => Product.create(producto)))
    await Promise.all(categorySeed.map(category => Category.create(category)))

    let arrCat = []
    for(let i=1 ; i<7 ; i++){arrCat.push({productId: i, categoryId: 5})}
    for(let i=7 ; i<15 ; i++){arrCat.push({productId: i, categoryId: 4})}
    for(let i=15 ; i<21 ; i++){arrCat.push({productId: i, categoryId: 3})}
    for(let i=21 ; i<23 ; i++){arrCat.push({productId: i, categoryId: 11})}
    for(let i=23 ; i<30 ; i++){arrCat.push({productId: i, categoryId: 7})}
    for(let i=31 ; i<37 ; i++){arrCat.push({productId: i, categoryId: 1})}
    for(let i=37 ; i<42 ; i++){arrCat.push({productId: i, categoryId: 6})}
    for(let i=42 ; i<45 ; i++){arrCat.push({productId: i, categoryId: 8})}
    for(let i=45 ; i<47 ; i++){arrCat.push({productId: i, categoryId: 9})}
    for(let i=47 ; i<50 ; i++){arrCat.push({productId: i, categoryId: 10})}
    for(let i=50 ; i<60 ; i++){arrCat.push({productId: i, categoryId: 2})}
    for(let i=60 ; i<65 ; i++){arrCat.push({productId: i, categoryId: 12})}

    await ProductsCategories.bulkCreate(arrCat)

}

runSeed()
