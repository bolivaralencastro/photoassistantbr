const POUCAS_UNIDADES_THRESHOLD = 2;
const WHATSAPP_NUMBER = "5548998021821";
const KNOWN_BRANDS = [ 
    "Sony", "Sigma", "Tamron", "Godox", "Sekonic", "Yongnuo", "Manfrotto", "Viltrox",
    "Samsung", "Dell", "BlackMagic", "DJI", "FeelWorld", "Hollyland", "Comica", "Zoom",
    "Canon", "Amaran", "Nanlite", "Metabones", "Mako", "Seaport", "Apple", "Impact"
];
const typeClusters = { 
    "Câmeras e Lentes": ["Câmera", "Câmera de Cinema", "Câmera de Ação", "Lente", "Adaptador"],
    "Iluminação e Modificadores": ["Flash de Estúdio", "Speedlight", "Iluminação LED", "Rádio Flash", "Fotômetro", "Modificador de Luz", "Acessório de Flash"],
    "Suportes e Estabilização": ["Tripé", "Gimbal", "Suporte de Fundo", "Suporte de Iluminação", "Acessório de Câmera"],
    "Áudio": ["Gravador de Áudio", "Microfone"],
    "Produção e Acessórios Tech": ["Computador", "Tablet", "Monitor", "Monitor de Câmera", "Monitor com Transmissor", "Armazenamento", "Cartão de Memória", "Power Bank", "Bateria", "Acessório de Laptop", "Transmissor de Vídeo", "Switcher de Vídeo"]
};

let equipmentData = [ 
    // SONY
    { group: "Sony", id:"sony_a6700", name: "Sony A6700 (Crop)", type: "Câmera", brand: "Sony", price: 275, image: "https://placehold.co/150x100/181818/b3b3b3?text=A6700", description: "Câmera mirrorless APS-C versátil.", quantidade_total: 3, quantidade_disponivel: 1 },
    { group: "Sony", id:"sony_a7iii", name: "Sony A7III", type: "Câmera", brand: "Sony", price: 325, image: "https://placehold.co/150x100/181818/b3b3b3?text=A7III", description: "Full-frame popular para foto e vídeo.", quantidade_total: 2, quantidade_disponivel: 2 },
    { group: "Sony", id:"sony_a7iv", name: "Sony A7IV", type: "Câmera", brand: "Sony", price: 500, image: "https://placehold.co/150x100/181818/b3b3b3?text=A7IV", description: "Full-frame híbrida de alta resolução.", quantidade_total: 1, quantidade_disponivel: 0 },
    { group: "Sony", id:"sony_fx30", name: "Sony FX30 (Crop)", type: "Câmera de Cinema", brand: "Sony", price: 425, image: "https://placehold.co/150x100/181818/b3b3b3?text=FX30", description: "Câmera de cinema APS-C compacta.", quantidade_total: 2, quantidade_disponivel: 2 },
    { group: "Sony", id:"sigma_10_18_f28_crop", name: "Sigma 10-18mm f/2.8 (crop)", type: "Lente", brand: "Sigma", price: 150, image: "https://placehold.co/150x100/181818/b3b3b3?text=S+10-18", description: "Lente zoom ultra-wide para APS-C.", quantidade_total: 3, quantidade_disponivel: 3 },
    { group: "Sony", id:"sony_pz_18_105_f4_crop", name: "Sony PZ 18-105mm OSS f/4 (crop)", type: "Lente", brand: "Sony", price: 150, image: "https://placehold.co/150x100/181818/b3b3b3?text=S+18-105", description: "Lente zoom versátil com power zoom.", quantidade_total: 2, quantidade_disponivel: 1 },
    { group: "Sony", id:"tamron_28_75_f28", name: "Tamron 28-75mm f/2.8 III", type: "Lente", brand: "Tamron", price: 175, image: "https://placehold.co/150x100/181818/b3b3b3?text=T+28-75", description: "Lente zoom padrão luminosa.", quantidade_total: 4, quantidade_disponivel: 4 },
    { group: "Sony", id:"tamron_17_70_f28_crop", name: "Tamron 17-70mm f/2.8 III (crop)", type: "Lente", brand: "Tamron", price: 150, image: "https://placehold.co/150x100/181818/b3b3b3?text=T+17-70", description: "Lente zoom padrão versátil para APS-C.", quantidade_total: 3, quantidade_disponivel: 0 },
    { group: "Sony", id:"sony_70_200_f4", name: "Sony 70-200 f/4 G OSS", type: "Lente", brand: "Sony", price: 300, image: "https://placehold.co/150x100/181818/b3b3b3?text=S+70-200", description: "Teleobjetiva zoom de alta qualidade.", quantidade_total: 2, quantidade_disponivel: 2 },
    { group: "Sony", id:"sony_11_f18_crop", name: "Sony 11mm f. 1.8 (Crop)", type: "Lente", brand: "Sony", price: 125, image: "https://placehold.co/150x100/181818/b3b3b3?text=S+11mm", description: "Grande angular fixa e luminosa para APS-C.", quantidade_total: 3, quantidade_disponivel: 3 },
    { group: "Sony", id:"samyang_18_f28_fe", name: "Samyang 18mm 2.8 AF FE", type: "Lente", brand: "Samyang", price: 100, image: "https://placehold.co/150x100/181818/b3b3b3?text=SY+18mm", description: "Grande angular compacta para full-frame.", quantidade_total: 2, quantidade_disponivel: 1 },
    { group: "Sony", id:"samyang_24_f18_fe", name: "Samyang 24mm 1.8 AF FE", type: "Lente", brand: "Samyang", price: 100, image: "https://placehold.co/150x100/181818/b3b3b3?text=SY+24mm", description: "Grande angular luminosa para full-frame.", quantidade_total: 2, quantidade_disponivel: 2 },
    { group: "Sony", id:"sony_28_f2_fe", name: "Sony 28mm f/2 FE", type: "Lente", brand: "Sony", price: 100, image: "https://placehold.co/150x100/181818/b3b3b3?text=S+28mm", description: "Lente fixa compacta e versátil.", quantidade_total: 3, quantidade_disponivel: 3 },
    { group: "Sony", id:"sony_35_f18_fe", name: "Sony 35mm f/1.8 FE", type: "Lente", brand: "Sony", price: 125, image: "https://placehold.co/150x100/181818/b3b3b3?text=S+35mm", description: "Lente fixa padrão luminosa.", quantidade_total: 4, quantidade_disponivel: 2 },
    { group: "Sony", id:"sony_50_f18_fe", name: "Sony 50mm f/1.8 FE", type: "Lente", brand: "Sony", price: 85, image: "https://placehold.co/150x100/181818/b3b3b3?text=S+50mm", description: "Lente 'cinquentinha' acessível.", quantidade_total: 5, quantidade_disponivel: 5 },
    { group: "Sony", id:"sony_85_f18_fe", name: "Sony 85mm f/1.8 FE", type: "Lente", brand: "Sony", price: 125, image: "https://placehold.co/150x100/181818/b3b3b3?text=S+85mm", description: "Lente para retratos com excelente bokeh.", quantidade_total: 3, quantidade_disponivel: 1 },
    { group: "Sony", id:"sony_90_f28_fe_macro", name: "Sony 90mm f/2.8 FE Macro", type: "Lente", brand: "Sony", price: 175, image: "https://placehold.co/150x100/181818/b3b3b3?text=S+90Macro", description: "Lente macro de alta precisão.", quantidade_total: 2, quantidade_disponivel: 2 },
    { group: "Sony", id:"metabones_sony_canon", name: "Metaboness Sony p/ Lente Canon", type: "Adaptador", brand: "Metabones", price: 50, image: "https://placehold.co/150x100/181818/b3b3b3?text=Metabones", description: "Adaptador para lentes Canon EF em Sony E.", quantidade_total: 4, quantidade_disponivel: 4 },
    { group: "Sony", id:"sd_128gb_sony", name: "Cartão SD 128gb (Sony)", type: "Cartão de Memória", brand: "Genérico", price: 25, image: "https://placehold.co/150x100/181818/b3b3b3?text=SD", description: "Cartão de memória de alta capacidade.", quantidade_total: 10, quantidade_disponivel: 8 },
    { group: "Sony", id:"cage_camera_sony", name: "Cage/Gaiola para camera", type: "Acessório de Câmera", brand: "Genérico", price: 25, image: "https://placehold.co/150x100/181818/b3b3b3?text=Cage", description: "Estrutura de proteção e montagem.", quantidade_total: 5, quantidade_disponivel: 3 },
    { group: "Sony", id:"bateria_np_fz100", name: "Bateria NP-FZ100", type: "Bateria", brand: "Sony", price: 35, image: "https://placehold.co/150x100/181818/b3b3b3?text=NP-FZ100", description: "Bateria para câmeras Sony Alpha.", quantidade_total: 8, quantidade_disponivel: 0 },
    { group: "Sony", id:"powerbank_30000mah_60w_sony", name: "Power Bank 30000Mah 60W", type: "Power Bank", brand: "Genérico", price: 40, image: "https://placehold.co/150x100/181818/b3b3b3?text=PB+60W", description: "Carregador portátil de alta capacidade.", quantidade_total: 6, quantidade_disponivel: 5 },
    // FLASH
    { group: "Flash", id:"godox_ad600pro", name: "Godox AD600pro (1 bateria) (600ws)", type: "Flash de Estúdio", brand: "Godox", price: 200, image: "https://placehold.co/150x100/181818/b3b3b3?text=AD600", description: "Flash de estúdio potente e portátil.", quantidade_total: 4, quantidade_disponivel: 1 },
    { group: "Flash", id:"radio_flash_godox_xpro", name: "Radio Flash godox Xpro", type: "Rádio Flash", brand: "Godox", price: 25, image: "https://placehold.co/150x100/181818/b3b3b3?text=Xpro", description: "Transmissor de rádio para flashes Godox.", quantidade_total: 5, quantidade_disponivel: 5 },
    { group: "Flash", id:"bateria_extra_ad600pro", name: "Bateria extra p/ AD600pro", type: "Bateria", brand: "Godox", price: 50, image: "https://placehold.co/150x100/181818/b3b3b3?text=Bat+AD600", description: "Bateria adicional para Godox AD600pro.", quantidade_total: 6, quantidade_disponivel: 6 },
    { group: "Flash", id:"adaptador_ac_ad600pro", name: "Adaptador AC p/ AD600pro", type: "Acessório de Flash", brand: "Godox", price: 50, image: "https://placehold.co/150x100/181818/b3b3b3?text=AC+AD600", description: "Fonte de alimentação para AD600pro.", quantidade_total: 3, quantidade_disponivel: 2 },
    { group: "Flash", id:"speedlight_godox_v1_canon", name: "Speedlight Godox V1 Canon c/ baterias", type: "Speedlight", brand: "Godox", price: 100, image: "https://placehold.co/150x100/181818/b3b3b3?text=V1+Canon", description: "Flash de sapata redondo para Canon.", quantidade_total: 3, quantidade_disponivel: 3 },
    { group: "Flash", id:"speedlight_godox_v1_sony", name: "Speedlight Godox V1 Sony c/ baterias", type: "Speedlight", brand: "Godox", price: 100, image: "https://placehold.co/150x100/181818/b3b3b3?text=V1+Sony", description: "Flash de sapata redondo para Sony.", quantidade_total: 3, quantidade_disponivel: 0 },
    { group: "Flash", id:"fotometro_sekonic", name: "Fotometro Sekonic", type: "Fotômetro", brand: "Sekonic", price: 50, image: "https://placehold.co/150x100/181818/b3b3b3?text=Sekonic", description: "Medidor de luz profissional.", quantidade_total: 2, quantidade_disponivel: 1 },
    { group: "Flash", id:"radio_flash_youngnou_hs", name: "Radio Flash youngnou HS (4unid)", type: "Rádio Flash", brand: "Yongnuo", price: 40, image: "https://placehold.co/150x100/181818/b3b3b3?text=YN+HS", description: "Conjunto de rádio flashes Yongnuo.", quantidade_total: 2, quantidade_disponivel: 2 },
    { group: "Flash", id:"radio_flash_pocket_wizard", name: "Radio Flash Pocket wizard universal (par)", type: "Rádio Flash", brand: "Pocket Wizard", price: 40, image: "https://placehold.co/150x100/181818/b3b3b3?text=PW", description: "Par de rádio flashes universais.", quantidade_total: 3, quantidade_disponivel: 3 },

    // Difusores e Suporte
    { group: "Difusores e Suporte", id:"buterfly_2_4x2_4", name: "Buterfly 2.4x2.4m (difusor, prata/Branco)", type: "Modificador de Luz", brand: "Genérico", price: 300, image: "https://placehold.co/150x100/181818/b3b3b3?text=Bfly+2.4", description: "Sempre avisar se é para estudio ou externa.", quantidade_total: 2, quantidade_disponivel: 2 },
    { group: "Difusores e Suporte", id:"buterfly_3x3", name: "Buterfly 3mx3m (difusor paraquedas)", type: "Modificador de Luz", brand: "Genérico", price: 300, image: "https://placehold.co/150x100/181818/b3b3b3?text=Bfly+3x3", description: "Butterfly dobraveis e acompanha 2 tripés.", quantidade_total: 1, quantidade_disponivel: 1 },
    { group: "Difusores e Suporte", id:"softbox_godox_120x80", name: "Softbox Godox 120x80cm", type: "Modificador de Luz", brand: "Godox", price: 25, image: "https://placehold.co/150x100/181818/b3b3b3?text=SB+120", description: "Modificador de luz retangular.", quantidade_total: 5, quantidade_disponivel: 4 },
    { group: "Difusores e Suporte", id:"octabox_godox_95", name: "Octabox Godox 95cm (c/ colmeia)", type: "Modificador de Luz", brand: "Godox", price: 25, image: "https://placehold.co/150x100/181818/b3b3b3?text=Octa+95", description: "Modificador octogonal com grid.", quantidade_total: 4, quantidade_disponivel: 2 },
    { group: "Difusores e Suporte", id:"octabox_godox_140", name: "Octabox Godox 140cm", type: "Modificador de Luz", brand: "Godox", price: 35, image: "https://placehold.co/150x100/181818/b3b3b3?text=Octa+140", description: "Modificador octogonal grande.", quantidade_total: 3, quantidade_disponivel: 3 },
    { group: "Difusores e Suporte", id:"strip_120x30", name: "Strip 120x30cm", type: "Modificador de Luz", brand: "Genérico", price: 25, image: "https://placehold.co/150x100/181818/b3b3b3?text=Strip", description: "Softbox tipo strip para luz de recorte.", quantidade_total: 3, quantidade_disponivel: 3 },
    { group: "Difusores e Suporte", id:"sombrinha_branca_90", name: "Sombrinha Branca 90cm", type: "Modificador de Luz", brand: "Genérico", price: 20, image: "https://placehold.co/150x100/181818/b3b3b3?text=Somb+90", description: "Sombrinha difusora branca.", quantidade_total: 6, quantidade_disponivel: 0 },
    { group: "Difusores e Suporte", id:"sombrinha_impact_190", name: "Sombrinha impact 190cm c/ difusor", type: "Modificador de Luz", brand: "Impact", price: 40, image: "https://placehold.co/150x100/181818/b3b3b3?text=Somb+190", description: "Sombrinha grande com capa difusora.", quantidade_total: 2, quantidade_disponivel: 2 },
    { group: "Difusores e Suporte", id:"balao_chines_godox_cs65", name: "Balão Chines Godox CS-65", type: "Modificador de Luz", brand: "Godox", price: 40, image: "https://placehold.co/150x100/181818/b3b3b3?text=CS-65", description: "Difusor esférico para luz suave.", quantidade_total: 3, quantidade_disponivel: 3 },
    { group: "Difusores e Suporte", id:"fresnel_godox_fls10", name: "Fresnel Godox FLS10", type: "Modificador de Luz", brand: "Godox", price: 70, image: "https://placehold.co/150x100/181818/b3b3b3?text=FLS10", description: "Lente Fresnel para concentrar luz.", quantidade_total: 2, quantidade_disponivel: 1 },
    { group: "Difusores e Suporte", id:"spotlight_godox_36", name: "SpotLight Godox 36° (c/ tripe roller)", type: "Modificador de Luz", brand: "Godox", price: 300, image: "https://placehold.co/150x100/181818/b3b3b3?text=Spot+36", description: "Necessita assistente. Projetor de gobos.", quantidade_total: 1, quantidade_disponivel: 1 },
    { group: "Difusores e Suporte", id:"tripe_luz_mako", name: "Tripé luz Mako wide 2,4 ou Ferro", type: "Tripé", brand: "Mako", price: 25, image: "https://placehold.co/150x100/181818/b3b3b3?text=Mako", description: "Tripé para iluminação.", quantidade_total: 10, quantidade_disponivel: 8 },
    { group: "Difusores e Suporte", id:"tripe_century", name: "Tripe Century(apenas p/ estudio)", type: "Tripé", brand: "Genérico", price: 50, image: "https://placehold.co/150x100/181818/b3b3b3?text=Century", description: "Tripé C-Stand robusto.", quantidade_total: 4, quantidade_disponivel: 3 },
    { group: "Difusores e Suporte", id:"tripe_rooler", name: "Tripé rooler (apenas p/ estudio)", type: "Tripé", brand: "Genérico", price: 70, image: "https://placehold.co/150x100/181818/b3b3b3?text=Roller", description: "Tripé com rodas para estúdio.", quantidade_total: 2, quantidade_disponivel: 2 },
    { group: "Difusores e Suporte", id:"kit_suporte_fundo", name: "Kit Suporte Fundo Infinito(2tripe c/ varão)", type: "Suporte de Fundo", brand: "Genérico", price: 75, image: "https://placehold.co/150x100/181818/b3b3b3?text=Fundo", description: "Suporte para fundos fotográficos.", quantidade_total: 3, quantidade_disponivel: 1 },
    { group: "Difusores e Suporte", id:"haste_girafa", name: "Haste(2m) c/ Tripé pesado (3m) (girafa)", type: "Suporte de Iluminação", brand: "Genérico", price: 125, image: "https://placehold.co/150x100/181818/b3b3b3?text=Girafa", description: "Boom stand para posicionamento de luz.", quantidade_total: 2, quantidade_disponivel: 2 },
    { group: "Difusores e Suporte", id:"kit_rebatedor_5x1", name: "KIT Rebatedor dobravel 5x1", type: "Modificador de Luz", brand: "Genérico", price: 50, image: "https://placehold.co/150x100/181818/b3b3b3?text=Rebatedor", description: "Rebatedor multifuncional.", quantidade_total: 5, quantidade_disponivel: 5 },

    // Captação/Tech
    { group: "Captação/Tech", id:"tripe_manfrotto_foto", name: "Tripé Manfroto p/ foto (Ball Head)", type: "Tripé", brand: "Manfrotto", price: 60, image: "https://placehold.co/150x100/181818/b3b3b3?text=Manfrotto", description: "Tripé robusto para fotografia.", quantidade_total: 4, quantidade_disponivel: 3 },
    { group: "Captação/Tech", id:"tripe_viltrox_video", name: "Tripé Viltrox p/ Video", type: "Tripé", brand: "Viltrox", price: 70, image: "https://placehold.co/150x100/181818/b3b3b3?text=Viltrox", description: "Tripé fluido para vídeo.", quantidade_total: 3, quantidade_disponivel: 3 },
    { group: "Captação/Tech", id:"ivisor_seaport_laptop", name: "Ivisor (seaport) p/ Laptop c/ Tripe", type: "Acessório de Laptop", brand: "Seaport", price: 150, image: "https://placehold.co/150x100/181818/b3b3b3?text=Ivisor", description: "Capa protetora de sol para laptop em campo.", quantidade_total: 2, quantidade_disponivel: 1 },
    { group: "Captação/Tech", id:"macbook_pro_13_touchbar", name: "Macbook pro 13 TouchBar(C1/Adobe)", type: "Computador", brand: "Apple", price: 250, image: "https://placehold.co/150x100/181818/b3b3b3?text=MBP13", description: "(2.4ghz quad core 15/ 8gb RAM / 512gb ssd)", quantidade_total: 2, quantidade_disponivel: 0 },
    { group: "Captação/Tech", id:"ssd_1tb_samsung_t5", name: "SSD 1 Tb Samsung T5", type: "Armazenamento", brand: "Samsung", price: 50, image: "https://placehold.co/150x100/181818/b3b3b3?text=SSD+T5", description: "Armazenamento externo rápido e portátil.", quantidade_total: 5, quantidade_disponivel: 5 },
    { group: "Captação/Tech", id:"monitor_portatil_16_2kp", name: "Monitor portatil \"16 2kp", type: "Monitor", brand: "Genérico", price: 70, image: "https://placehold.co/150x100/181818/b3b3b3?text=Mon+16", description: "Monitor externo portátil de alta resolução.", quantidade_total: 3, quantidade_disponivel: 2 },
    { group: "Captação/Tech", id:"monitor_dell_27_1080p_gira_90", name: "Monitor Dell \"27 1080p gira 90°", type: "Monitor", brand: "Dell", price: 100, image: "https://placehold.co/150x100/181818/b3b3b3?text=Dell+27", description: "(C/ suporte p/ monitor em tripé)", quantidade_total: 2, quantidade_disponivel: 2 },
    { group: "Captação/Tech", id:"ipad_10_geracao_10_2", name: "Ipad 10ª Geração 10.2\"", type: "Tablet", brand: "Apple", price: 125, image: "https://placehold.co/150x100/181818/b3b3b3?text=iPad", description: "Tablet para diversas aplicações.", quantidade_total: 3, quantidade_disponivel: 1 },
    { group: "Captação/Tech", id:"powerbank_30000mah_65w_usbc_macbook", name: "Power Bank 30.000mah 65w USBC para Macbook", type: "Power Bank", brand: "Genérico", price: 40, image: "https://placehold.co/150x100/181818/b3b3b3?text=PB+Mac", description: "Carregador portátil para laptops.", quantidade_total: 4, quantidade_disponivel: 4 },

    // Video Maker
    { group: "Video Maker", id:"blackmagic_pocket_4k", name: "BlackMagic pocket 4k", type: "Câmera de Cinema", brand: "BlackMagic", price: 350, image: "https://placehold.co/150x100/181818/b3b3b3?text=BMPCC4K", description: "(ssd T5 1TB + Bateria + Speedboost p/ EF)", quantidade_total: 2, quantidade_disponivel: 1 },
    { group: "Video Maker", id:"dji_osmo_action_pro_5", name: "DJI OSMO ACTION PRO 5", type: "Câmera de Ação", brand: "DJI", price: 125, image: "https://placehold.co/150x100/181818/b3b3b3?text=Action5", description: "Câmera de ação robusta.", quantidade_total: 3, quantidade_disponivel: 3 },
    { group: "Video Maker", id:"dji_ronin_rs3_mini", name: "DJI Ronin RS3 mini (Suporta 2 Kg)", type: "Gimbal", brand: "DJI", price: 125, image: "https://placehold.co/150x100/181818/b3b3b3?text=RS3mini", description: "Gimbal compacto para câmeras leves.", quantidade_total: 2, quantidade_disponivel: 2 },
    { group: "Video Maker", id:"dji_ronin_rs3", name: "DJI Ronin RS3 (Suporta 3 Kg)", type: "Gimbal", brand: "DJI", price: 150, image: "https://placehold.co/150x100/181818/b3b3b3?text=RS3", description: "Gimbal estabilizador versátil.", quantidade_total: 2, quantidade_disponivel: 0 },
    { group: "Video Maker", id:"dji_ronin_rs4", name: "DJI Ronin RS4 (Suporta 3 Kg)", type: "Gimbal", brand: "DJI", price: 200, image: "https://placehold.co/150x100/181818/b3b3b3?text=RS4", description: "Gimbal atualizado e robusto.", quantidade_total: 1, quantidade_disponivel: 1 },
    { group: "Video Maker", id:"dji_ronin_rs2_pro_combo", name: "DJI Ronin RS2 Pro Combo (Suporta 4 Kg)", type: "Gimbal", brand: "DJI", price: 250, image: "https://placehold.co/150x100/181818/b3b3b3?text=RS2Pro", description: "Gimbal profissional completo.", quantidade_total: 1, quantidade_disponivel: 1 },
    { group: "Video Maker", id:"dji_osmo_6_celular", name: "DJI Osmo 6 (Celular)", type: "Gimbal", brand: "DJI", price: 50, image: "https://placehold.co/150x100/181818/b3b3b3?text=Osmo6", description: "Gimbal para smartphones.", quantidade_total: 4, quantidade_disponivel: 3 },
    { group: "Video Maker", id:"monitor_feelword_f6_plus_4k", name: "Monitor p/ cam FeelWord F6+ 4k 5,5\"", type: "Monitor de Câmera", brand: "FeelWorld", price: 60, image: "https://placehold.co/150x100/181818/b3b3b3?text=F6+", description: "Monitor de campo para câmeras.", quantidade_total: 3, quantidade_disponivel: 2 },
    { group: "Video Maker", id:"monitor_hollyland_mars_m1", name: "Monitor Hollyland Mars M1 (TX&RX)", type: "Monitor com Transmissor", brand: "Hollyland", price: 125, image: "https://placehold.co/150x100/181818/b3b3b3?text=MarsM1", description: "Monitor com transmissor/receptor integrado.", quantidade_total: 2, quantidade_disponivel: 2 },
    { group: "Video Maker", id:"sd_128gb_video", name: "Cartão SD 128gb (Vídeo)", type: "Cartão de Memória", brand: "Genérico", price: 25, image: "https://placehold.co/150x100/181818/b3b3b3?text=SD+Vid", description: "Cartão de memória para vídeo.", quantidade_total: 8, quantidade_disponivel: 5 },
    { group: "Video Maker", id:"powerbank_30000mah_65w_video", name: "Power Bank 30000Mah 65W (Vídeo)", type: "Power Bank", brand: "Genérico", price: 40, image: "https://placehold.co/150x100/181818/b3b3b3?text=PB+Vid", description: "Carregador portátil de alta capacidade.", quantidade_total: 5, quantidade_disponivel: 5 },
    { group: "Video Maker", id:"transmissor_hdmi_hollyland_mars_4k", name: "Transmissor HDMI s/fio Hollyland Mars 4k", type: "Transmissor de Vídeo", brand: "Hollyland", price: 125, image: "https://placehold.co/150x100/181818/b3b3b3?text=Mars4K", description: "Transmissor de vídeo sem fio 4K.", quantidade_total: 2, quantidade_disponivel: 1 },
    { group: "Video Maker", id:"switcher_feelword_l1_livepro", name: "Switcher FeelWord L1 Livepro", type: "Switcher de Vídeo", brand: "FeelWorld", price: 100, image: "https://placehold.co/150x100/181818/b3b3b3?text=L1Pro", description: "Switcher de vídeo para transmissões ao vivo.", quantidade_total: 1, quantidade_disponivel: 1 },
    { group: "Video Maker", id:"gravador_zoom_h1n", name: "Gravador Zoom H1n", type: "Gravador de Áudio", brand: "Zoom", price: 50, image: "https://placehold.co/150x100/181818/b3b3b3?text=H1n", description: "Gravador de áudio portátil.", quantidade_total: 3, quantidade_disponivel: 3 },
    { group: "Video Maker", id:"microfone_camera_shotgun", name: "Microfone de camera shotgun", type: "Microfone", brand: "Genérico", price: 40, image: "https://placehold.co/150x100/181818/b3b3b3?text=MicShot", description: "Microfone direcional para câmera.", quantidade_total: 4, quantidade_disponivel: 2 },
    { group: "Video Maker", id:"microfone_lapela_comica_d2", name: "Microfone Lapela sem fio Comica D2", type: "Microfone", brand: "Comica", price: 90, image: "https://placehold.co/150x100/181818/b3b3b3?text=ComicaD2", description: "(2 transmissores 1 receptor)", quantidade_total: 3, quantidade_disponivel: 3 },

    // CANON
    { group: "Canon", id:"canon_eos_r", name: "Canon EOS R (c/ adaptador RF/EF)", type: "Câmera", brand: "Canon", price: 300, image: "https://placehold.co/150x100/181818/b3b3b3?text=EOS+R", description: "Câmera mirrorless full-frame.", quantidade_total: 2, quantidade_disponivel: 1 },
    { group: "Canon", id:"canon_5d_mkiv", name: "Canon 5d MKIV", type: "Câmera", brand: "Canon", price: 350, image: "https://placehold.co/150x100/181818/b3b3b3?text=5DIV", description: "DSLR full-frame profissional.", quantidade_total: 2, quantidade_disponivel: 2 },
    { group: "Canon", id:"canon_r6_mkii", name: "Canon R6 MK II (c/ adaptador RF/EF)", type: "Câmera", brand: "Canon", price: 425, image: "https://placehold.co/150x100/181818/b3b3b3?text=R6II", description: "Mirrorless full-frame avançada.", quantidade_total: 1, quantidade_disponivel: 1 },
    { group: "Canon", id:"adaptador_rf_ef", name: "Adaptador RF/EF", type: "Adaptador", brand: "Canon", price: 50, image: "https://placehold.co/150x100/181818/b3b3b3?text=RF-EF", description: "Adaptador de lentes EF para RF.", quantidade_total: 5, quantidade_disponivel: 5 },
    { group: "Canon", id:"canon_50_f12_l_ef", name: "Canon 50mm f/1.2 L EF", type: "Lente", brand: "Canon", price: 175, image: "https://placehold.co/150x100/181818/b3b3b3?text=C+50/1.2", description: "Lente prime luminosa de alta qualidade.", quantidade_total: 2, quantidade_disponivel: 0 },
    { group: "Canon", id:"canon_50_f18_stm_ef", name: "Canon 50mm f/1.8 STM EF", type: "Lente", brand: "Canon", price: 75, image: "https://placehold.co/150x100/181818/b3b3b3?text=C+50/1.8", description: "Lente 'cinquentinha' com motor STM.", quantidade_total: 4, quantidade_disponivel: 3 },
    { group: "Canon", id:"canon_24_105_f4_l_ef", name: "Canon 24-105 f/4 IS L EF", type: "Lente", brand: "Canon", price: 150, image: "https://placehold.co/150x100/181818/b3b3b3?text=C+24-105EF", description: "Lente zoom padrão versátil (EF).", quantidade_total: 3, quantidade_disponivel: 3 },
    { group: "Canon", id:"canon_24_105_f4_l_rf", name: "Canon 24-105 f/4 IS L RF", type: "Lente", brand: "Canon", price: 250, image: "https://placehold.co/150x100/181818/b3b3b3?text=C+24-105RF", description: "Lente zoom padrão versátil (RF).", quantidade_total: 2, quantidade_disponivel: 1 },
    { group: "Canon", id:"canon_85_f18_usm_ef", name: "Canon 85mm 1.8 USM EF", type: "Lente", brand: "Canon", price: 100, image: "https://placehold.co/150x100/181818/b3b3b3?text=C+85/1.8", description: "Lente para retratos com motor USM.", quantidade_total: 3, quantidade_disponivel: 3 },
    { group: "Canon", id:"canon_85_f2_usm_is_macro_rf", name: "Canon 85mm f/2 USM IS macro RF", type: "Lente", brand: "Canon", price: 125, image: "https://placehold.co/150x100/181818/b3b3b3?text=C+85RFMac", description: "Lente para retratos e macro (RF).", quantidade_total: 2, quantidade_disponivel: 2 },
    { group: "Canon", id:"canon_35_f18_usm_is_rf", name: "Canon 35mm 1.8 IS USM RF", type: "Lente", brand: "Canon", price: 125, image: "https://placehold.co/150x100/181818/b3b3b3?text=C+35RF", description: "Lente fixa padrão com estabilização (RF).", quantidade_total: 2, quantidade_disponivel: 1 },
    { group: "Canon", id:"canon_17_40_f4_l_ef", name: "Canon 17-40mm f/4 L EF", type: "Lente", brand: "Canon", price: 125, image: "https://placehold.co/150x100/181818/b3b3b3?text=C+17-40", description: "Lente zoom ultra-wide (EF).", quantidade_total: 2, quantidade_disponivel: 2 },
    { group: "Canon", id:"canon_70_200_f28_l_is_iii_ef", name: "Canon 70-200mm III f/2.8 IS L EF", type: "Lente", brand: "Canon", price: 300, image: "https://placehold.co/150x100/181818/b3b3b3?text=C+70-200", description: "Teleobjetiva zoom profissional (EF).", quantidade_total: 2, quantidade_disponivel: 1 },
    { group: "Canon", id:"canon_70_200_f4_l_rf", name: "Canon 70-200mm L f/4 RF", type: "Lente", brand: "Canon", price: 275, image: "https://placehold.co/150x100/181818/b3b3b3?text=C+70-200RF", description: "Teleobjetiva zoom compacta (RF).", quantidade_total: 1, quantidade_disponivel: 1 },
    { group: "Canon", id:"samyang_14_f28_af_ef", name: "Samyang 14mm 2.8 AF EF", type: "Lente", brand: "Samyang", price: 125, image: "https://placehold.co/150x100/181818/b3b3b3?text=SY+14EF", description: "Ultra-wide com autofoco (EF).", quantidade_total: 2, quantidade_disponivel: 2 },
    { group: "Canon", id:"sigma_art_18_35_f18_crop_ef", name: "Sigma Art 18-35mm 1.8 (crop) EF", type: "Lente", brand: "Sigma", price: 150, image: "https://placehold.co/150x100/181818/b3b3b3?text=Sig+18-35", description: "Zoom APS-C super luminoso (EF).", quantidade_total: 2, quantidade_disponivel: 0 },
    { group: "Canon", id:"sigma_art_50_100_f18_crop_ef", name: "Sigma Art 50-100mm 1.8 (crop) EF", type: "Lente", brand: "Sigma", price: 175, image: "https://placehold.co/150x100/181818/b3b3b3?text=Sig+50-100", description: "Tele-zoom APS-C super luminoso (EF).", quantidade_total: 1, quantidade_disponivel: 1 },
    { group: "Canon", id:"canon_lp_e6", name: "Canon LP-E6", type: "Bateria", brand: "Canon", price: 35, image: "https://placehold.co/150x100/181818/b3b3b3?text=LP-E6", description: "Bateria para câmeras Canon.", quantidade_total: 10, quantidade_disponivel: 7 },
    { group: "Canon", id:"sd_128gb_canon", name: "Cartão SD 128gb (Canon)", type: "Cartão de Memória", brand: "Genérico", price: 25, image: "https://placehold.co/150x100/181818/b3b3b3?text=SD+Can", description: "Cartão de memória.", quantidade_total: 10, quantidade_disponivel: 10 },

    // Luz Contínua
    { group: "Luz Contínua", id:"led_godox_sl150w", name: "Led Godox SL150w", type: "Iluminação LED", brand: "Godox", price: 120, image: "https://placehold.co/150x100/181818/b3b3b3?text=SL150", description: "Iluminador LED potente.", quantidade_total: 4, quantidade_disponivel: 3 },
    { group: "Luz Contínua", id:"led_godox_sl300w", name: "Led Godox SL300w", type: "Iluminação LED", brand: "Godox", price: 200, image: "https://placehold.co/150x100/181818/b3b3b3?text=SL300", description: "Iluminador LED muito potente.", quantidade_total: 3, quantidade_disponivel: 1 },
    { group: "Luz Contínua", id:"led_godox_sl300biiw", name: "Led Godox SL300biW (2800k-6500k)", type: "Iluminação LED", brand: "Godox", price: 225, image: "https://placehold.co/150x100/181818/b3b3b3?text=SL300Bi", description: "LED bicolor potente.", quantidade_total: 2, quantidade_disponivel: 2 },
    { group: "Luz Contínua", id:"led_amaran_200d", name: "Led Amaran 200d", type: "Iluminação LED", brand: "Amaran", price: 200, image: "https://placehold.co/150x100/181818/b3b3b3?text=Am+200D", description: "LED daylight compacto e potente.", quantidade_total: 3, quantidade_disponivel: 0 },
    { group: "Luz Contínua", id:"led_godox_sz300r", name: "Led Godox SZ300R (RGB+BI color)", type: "Iluminação LED", brand: "Godox", price: 250, image: "https://placehold.co/150x100/181818/b3b3b3?text=SZ300R", description: "LED RGB e bicolor com zoom.", quantidade_total: 2, quantidade_disponivel: 2 },
    { group: "Luz Contínua", id:"led_nanlite_forza_60b", name: "Led Nanlite Forza 60B(a bateria) c/ softbox", type: "Iluminação LED", brand: "Nanlite", price: 200, image: "https://placehold.co/150x100/181818/b3b3b3?text=Forza60B", description: "LED Bicolor portátil. Baterias Extra - 4 NP-F970", quantidade_total: 3, quantidade_disponivel: 3 },
    { group: "Luz Contínua", id:"baterias_extra_nanlite_60b", name: "Baterias Extra - 4 NP-F970", type: "Bateria", brand: "Genérico", price: 50, image: "https://placehold.co/150x100/181818/b3b3b3?text=NPF", description: "Para Nanlite Forza 60B.", quantidade_total: 4, quantidade_disponivel: 2 },
    { group: "Luz Contínua", id:"led_godox_m600d", name: "Led Godox M600D", type: "Iluminação LED", brand: "Godox", price: 400, image: "https://placehold.co/150x100/181818/b3b3b3?text=M600D", description: "LED daylight extremamente potente.", quantidade_total: 1, quantidade_disponivel: 1 },
    { group: "Luz Contínua", id:"led_godox_m600bi", name: "Led Godox M600bi (2800k-6500k)", type: "Iluminação LED", brand: "Godox", price: 425, image: "https://placehold.co/150x100/181818/b3b3b3?text=M600Bi", description: "LED bicolor extremamente potente.", quantidade_total: 1, quantidade_disponivel: 1 },
    { group: "Luz Contínua", id:"led_mg1200bi", name: "Led MG1200bi (kit com tripé)", type: "Iluminação LED", brand: "Godox", price: 900, image: "https://placehold.co/150x100/181818/b3b3b3?text=MG1200", description: "LED bicolor profissional de altíssima potência.", quantidade_total: 1, quantidade_disponivel: 0 },
    { group: "Luz Contínua", id:"led_camera_godox_cr5_rgb", name: "Led de Camera Godox CR5 RGB", type: "Iluminação LED", brand: "Godox", price: 70, image: "https://placehold.co/150x100/181818/b3b3b3?text=CR5", description: "Pequeno painel LED RGB para câmera.", quantidade_total: 5, quantidade_disponivel: 4 },
    { group: "Luz Contínua", id:"bastao_led_rgb_yn360iii", name: "Bastão Led RGB YN360III", type: "Iluminação LED", brand: "Yongnuo", price: 80, image: "https://placehold.co/150x100/181818/b3b3b3?text=YN360", description: "(acompanha 2 baterias pequena e AC). Bastão de LED RGB.", quantidade_total: 3, quantidade_disponivel: 3 }
].map(item => ({ ...item, brand: item.brand || inferBrandFromName(item.name) }));

let budgetItems = []; 
let registeredUsers = []; 
let currentUser = null; 

const equipmentListSectionsEl = document.getElementById('equipment-list-sections');
const globalSearchBarEl = document.getElementById('global-search-bar'); 
const dateStartEl = document.getElementById('date-start');
const dateEndEl = document.getElementById('date-end');
const availabilityFilterEl = document.getElementById('availability-filter');
const brandFiltersEl = document.getElementById('brand-filters');
const typeFiltersEl = document.getElementById('type-filters'); 
const minPriceEl = document.getElementById('min-price');
const maxPriceEl = document.getElementById('max-price');
const clearFiltersBtn = document.getElementById('clear-filters-btn');
const resultsCountEl = document.getElementById('results-count');
const dateAvailabilityNoticeEl = document.getElementById('date-availability-notice');
const selectedBudgetItemsPreviewEl = document.getElementById('selected-budget-items-preview');
const budgetTotalPriceEl = document.getElementById('budget-total-price');
const sendWhatsAppBottomBtn = document.getElementById('send-whatsapp-bottom-btn');
const emptyBudgetBarMessageEl = document.getElementById('empty-budget-bar-message');

const signupModal = document.getElementById('signup-modal');
const loginModal = document.getElementById('login-modal');
const closeModalBtns = document.querySelectorAll('.close-modal-btn');
const signupActionBtn = document.getElementById('signup-action-btn');
const loginActionBtn = document.getElementById('login-action-btn');
const userGreetingEl = document.getElementById('user-greeting');
const signupForm = document.getElementById('signup-form'); 
const loginForm = document.getElementById('login-form');


function formatPrice(price) { return `R$${price.toFixed(0)}`; }
function formatDate(dateString) { 
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
}

function populateFilters() { 
    const brands = [...new Set(equipmentData.map(item => item.brand))].sort();
    brands.forEach(brand => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="checkbox" name="brand" value="${brand}"> ${brand}`;
        brandFiltersEl.appendChild(label);
    });

    typeFiltersEl.innerHTML = '';
    const allUniqueTypesFromData = [...new Set(equipmentData.map(item => item.type).filter(t => t))].sort();
    const clusteredTypes = new Set();

    for (const clusterName in typeClusters) {
        const typesInThisCluster = typeClusters[clusterName];
        const relevantTypesForCluster = typesInThisCluster.filter(type => allUniqueTypesFromData.includes(type));

        if (relevantTypesForCluster.length > 0) {
            const clusterTitle = document.createElement('h4');
            clusterTitle.textContent = clusterName;
            typeFiltersEl.appendChild(clusterTitle);

            relevantTypesForCluster.forEach(type => {
                const label = document.createElement('label');
                label.innerHTML = `<input type="checkbox" name="type" value="${type}"> ${type}`;
                typeFiltersEl.appendChild(label);
                clusteredTypes.add(type);
            });
        }
    }
    const unclusteredTypes = allUniqueTypesFromData.filter(type => !clusteredTypes.has(type));
    if (unclusteredTypes.length > 0) {
        const otherTitle = document.createElement('h4');
        otherTitle.textContent = "Outros Tipos";
        typeFiltersEl.appendChild(otherTitle);
        unclusteredTypes.forEach(type => {
            const label = document.createElement('label');
            label.innerHTML = `<input type="checkbox" name="type" value="${type}"> ${type}`;
            typeFiltersEl.appendChild(label);
        });
    }
}

function setupHorizontalScroll(sectionElement) {
    const cardsContainer = sectionElement.querySelector('.cards-container');
    const prevArrow = sectionElement.querySelector('.prev-arrow');
    const nextArrow = sectionElement.querySelector('.next-arrow');
    
    if (!cardsContainer || !prevArrow || !nextArrow) return;

    const cardWidth = (cardsContainer.querySelector('.equipment-card')?.offsetWidth || 200) + 20; 

    function updateArrowStates() {
        if (!cardsContainer) return; 
        prevArrow.disabled = cardsContainer.scrollLeft < 10; 
        nextArrow.disabled = cardsContainer.scrollLeft + cardsContainer.clientWidth >= cardsContainer.scrollWidth - 10;
    }

    prevArrow.addEventListener('click', () => {
        cardsContainer.scrollBy({ left: -cardWidth * 2, behavior: 'smooth' }); 
        setTimeout(updateArrowStates, 350);
    });

    nextArrow.addEventListener('click', () => {
        cardsContainer.scrollBy({ left: cardWidth * 2, behavior: 'smooth' });
        setTimeout(updateArrowStates, 350);
    });
    
    cardsContainer.addEventListener('scroll', () => { 
        requestAnimationFrame(updateArrowStates); 
    });
    window.addEventListener('resize', updateArrowStates); 
    setTimeout(updateArrowStates, 50); 
}

function renderEquipmentSections(items) {
    equipmentListSectionsEl.innerHTML = ''; 
    resultsCountEl.textContent = `${items.length} item(s) filtrado(s) no total.`;

    const startDate = dateStartEl.value;
    const endDate = dateEndEl.value;

    if (startDate && endDate) {
        dateAvailabilityNoticeEl.innerHTML = `Atenção: A disponibilidade para o período de <strong>${formatDate(startDate)}</strong> a <strong>${formatDate(endDate)}</strong> precisa ser confirmada. Os status abaixo indicam a disponibilidade geral atual.`;
        dateAvailabilityNoticeEl.classList.remove('hidden');
    } else if (startDate || endDate) {
         dateAvailabilityNoticeEl.innerHTML = `Atenção: Por favor, selecione ambas as datas (início e fim) para simular a consulta de período.`;
        dateAvailabilityNoticeEl.classList.remove('hidden');
    } else {
        dateAvailabilityNoticeEl.classList.add('hidden');
    }
    
    const groupedItems = items.reduce((acc, item) => {
        const groupKey = item.type || "Outros Tipos"; 
        if (!acc[groupKey]) acc[groupKey] = [];
        acc[groupKey].push(item);
        return acc;
    }, {});

    if (items.length === 0) {
         equipmentListSectionsEl.innerHTML = '<p style="text-align:center; padding: 20px; color: var(--text-secondary);">Nenhum equipamento encontrado com os filtros selecionados.</p>';
         return;
    }

    for (const groupName in groupedItems) {
        const itemsInGroup = groupedItems[groupName];
        if (itemsInGroup.length === 0) continue;

        const sectionEl = document.createElement('div');
        sectionEl.className = 'equipment-row-section';
        
        let cardsHTML = '';
        itemsInGroup.forEach(item => {
            let availabilityClass = 'status-unavailable-card';
            let availabilityTextCard = 'Indisponível';
            let buttonDisabled = true;
            let buttonText = 'Indisponível';

            if (item.quantidade_disponivel > 0) {
                buttonDisabled = false;
                buttonText = 'Adicionar';
                if (item.quantidade_disponivel <= POUCAS_UNIDADES_THRESHOLD) {
                    availabilityClass = 'status-low-stock-card';
                    availabilityTextCard = 'Poucas Unidades';
                } else {
                    availabilityClass = 'status-available-card';
                    availabilityTextCard = 'Disponível';
                }
            }
            if (budgetItems.includes(item.id)) {
                buttonText = 'Adicionado';
                buttonDisabled = true; 
            }

            cardsHTML += `
                <div class="equipment-card" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <h4>${item.name}</h4>
                    <p class="card-meta">${item.brand || 'N/A'} | ${item.type || 'N/A'}</p>
                    <div class="card-availability ${availabilityClass}">
                        ${availabilityTextCard} (${item.quantidade_disponivel}/${item.quantidade_total})
                    </div>
                    <p class="card-price">${formatPrice(item.price)}</p>
                    <button class="add-to-cart-btn-card" data-id="${item.id}" ${buttonDisabled ? 'disabled' : ''}>
                        ${buttonText}
                    </button>
                </div>`;
        });

        sectionEl.innerHTML = `
            <div class="section-header">
                <h3>${groupName}</h3>
                <div class="navigation-arrows">
                    <button class="arrow prev-arrow" aria-label="Anterior"><</button>
                    <button class="arrow next-arrow" aria-label="Próximo">></button>
                </div>
            </div>
            <div class="cards-wrapper">
                <div class="cards-container">
                    ${cardsHTML}
                </div>
            </div>`;
        equipmentListSectionsEl.appendChild(sectionEl);

        sectionEl.querySelectorAll('.add-to-cart-btn-card').forEach(button => {
            button.addEventListener('click', handleAddToBudget);
        });
        setupHorizontalScroll(sectionEl);
    }
}

function handleAddToBudget(event) { 
    const itemId = event.target.dataset.id;
    const item = equipmentData.find(i => i.id === itemId);

    if (item && item.quantidade_disponivel > 0) { 
        if (!budgetItems.includes(itemId)) {
            budgetItems.push(itemId);
            event.target.textContent = 'Adicionado';
            event.target.disabled = true; 
        }
        updateBudgetBarDisplay();
    }
}

function updateBudgetBarDisplay() { 
    selectedBudgetItemsPreviewEl.innerHTML = ''; 
    let currentTotalPrice = 0;
    emptyBudgetBarMessageEl.style.display = budgetItems.length === 0 ? 'inline' : 'none';
    sendWhatsAppBottomBtn.disabled = budgetItems.length === 0;

    budgetItems.forEach(itemId => {
        const item = equipmentData.find(i => i.id === itemId);
        if (item) {
            currentTotalPrice += item.price;
            const chip = document.createElement('div');
            chip.className = 'budget-item-chip';
            chip.textContent = item.name.substring(0, 20) + (item.name.length > 20 ? '...' : ''); 
            
            const removeBtn = document.createElement('button');
            removeBtn.className = 'remove-budget-item-chip-btn';
            removeBtn.innerHTML = '×';
            removeBtn.dataset.id = itemId;
            removeBtn.title = "Remover " + item.name;
            removeBtn.onclick = handleRemoveFromBudgetBar;
            chip.appendChild(removeBtn);
            selectedBudgetItemsPreviewEl.appendChild(chip);
        }
    });
    budgetTotalPriceEl.textContent = `Total: ${formatPrice(currentTotalPrice)}`;
}

function handleRemoveFromBudgetBar(event) { 
    const itemIdToRemove = event.target.dataset.id;
    budgetItems = budgetItems.filter(id => id !== itemIdToRemove);
    updateBudgetBarDisplay();
    
    const cardButton = document.querySelector(`.equipment-card[data-id="${itemIdToRemove}"] .add-to-cart-btn-card`);
    if (cardButton) {
        const itemData = equipmentData.find(i => i.id === itemIdToRemove);
        if (itemData && itemData.quantidade_disponivel > 0) {
            cardButton.textContent = 'Adicionar';
            cardButton.disabled = false;
        } else if (itemData) { 
             cardButton.textContent = 'Indisponível';
             cardButton.disabled = true;
        }
    }
}

function applyFilters() { 
    const searchTerm = globalSearchBarEl.value.toLowerCase().trim(); 
    const showOnlyAvailable = availabilityFilterEl.checked;
    const getSelectedValues = (container) => Array.from(container.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
    const selectedBrands = getSelectedValues(brandFiltersEl);
    const selectedTypes = getSelectedValues(typeFiltersEl); 
    const minPrice = parseFloat(minPriceEl.value) || 0;
    const maxPrice = parseFloat(maxPriceEl.value) || Infinity;

    const filteredEquipment = equipmentData.filter(item => {
        const searchMatch = searchTerm === '' ||
                            item.name.toLowerCase().includes(searchTerm) ||
                            (item.description && item.description.toLowerCase().includes(searchTerm)) ||
                            item.brand.toLowerCase().includes(searchTerm) ||
                            (item.type && item.type.toLowerCase().includes(searchTerm));
        const availabilityMatch = !showOnlyAvailable || item.quantidade_disponivel > 0;
        const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(item.brand);
        const typeMatch = selectedTypes.length === 0 || (item.type && selectedTypes.includes(item.type));
        const priceMatch = item.price >= minPrice && item.price <= maxPrice;
        return searchMatch && availabilityMatch && brandMatch && typeMatch && priceMatch;
    });
    renderEquipmentSections(filteredEquipment); 
}

function clearAllFilters() { 
    globalSearchBarEl.value = ''; 
    dateStartEl.value = '';
    dateEndEl.value = '';
    availabilityFilterEl.checked = false;
    document.querySelectorAll('.filters-sidebar input[type="checkbox"]').forEach(cb => cb.checked = false);
    minPriceEl.value = '';
    maxPriceEl.value = '';
    dateAvailabilityNoticeEl.classList.add('hidden');
    budgetItems = [];
    updateBudgetBarDisplay();
    applyFilters(); 
}

function generateWhatsAppMessage() { 
    if (budgetItems.length === 0) {
        alert("Seu orçamento está vazio. Adicione itens antes de enviar.");
        return null;
    }
    let message = "Olá PhotoAssistant BR! Gostaria de solicitar um orçamento para os seguintes itens:\n\n";
    let totalPrice = 0;
    budgetItems.forEach(itemId => {
        const item = equipmentData.find(i => i.id === itemId);
        if (item) {
            message += `- ${item.name} (Valor diária: ${formatPrice(item.price)})\n`;
            totalPrice += item.price;
        }
    });
    message += `\nValor total estimado da diária: ${formatPrice(totalPrice)}\n`;
    const startDate = dateStartEl.value;
    const endDate = dateEndEl.value;
    if (startDate && endDate) {
        message += `\nPeríodo de interesse: de ${formatDate(startDate)} a ${formatDate(endDate)}\n`;
    }
    if (currentUser) {
         message += `\nCliente: ${currentUser.name} (Já cadastrado).\n`;
    } else {
        message += "\nSou um novo cliente e o cadastro foi/será iniciado pelo site.\n";
    }
    message += "\nPor favor, confirme a disponibilidade, o valor final e os próximos passos. Obrigado!";
    return encodeURIComponent(message);
}

function handleSignupFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('signup-name').value;
    const cpf = document.getElementById('signup-cpf').value;
    const email = document.getElementById('signup-email').value;
    const phone = document.getElementById('signup-phone').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    const social = document.getElementById('signup-social').value;
    const address = document.getElementById('signup-address').value;
    const cep = document.getElementById('signup-cep').value;
    const city = document.getElementById('signup-city').value;

    if (!name || !cpf || !email || !phone || !password || !address || !cep || !city) {
        alert("Por favor, preencha todos os campos obrigatórios do cadastro.");
        return;
    }
    if (password !== confirmPassword) {
        alert("As senhas não coincidem!");
        return;
    }
    if (registeredUsers.find(user => user.email === email || user.cpf === cpf)) {
        alert("Email ou CPF já cadastrado! Tente fazer login ou use outros dados.");
        return;
    }

    const newUser = { name, cpf, email, phone, password, social, address, cep, city };
    registeredUsers.push(newUser);
    
    let signupMessage = "Olá PhotoAssistant BR! Novo pré-cadastro realizado pelo site:\n\n";
    signupMessage += `Nome: ${name}\nCPF: ${cpf}\nEmail: ${email}\nTelefone: ${phone}\n`;
    signupMessage += `Rede Social: ${social || 'N/A'}\nEndereço: ${address}, ${cep}, ${city}\n`;
    signupMessage += "\nPor favor, entrem em contato para solicitar os documentos (Doc. com Foto e Comp. Residência) e finalizar o cadastro. Obrigado!";
    
    const encodedMessage = encodeURIComponent(signupMessage);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    
    signupActionBtn.textContent = "Cadastro Enviado";
    signupActionBtn.disabled = true; 
    loginActionBtn.textContent = "Entrar"; 
    signupModal.style.display = "none"; 
    signupForm.reset();
    alert("Dados de pré-cadastro enviados! A conversa no WhatsApp foi aberta. Envie a mensagem e aguarde o contato da PhotoAssistant BR para os próximos passos e envio dos documentos.");
}

function handleLoginFormSubmit(event) {
    event.preventDefault();
    const emailCpf = document.getElementById('login-email-cpf').value;
    const password = document.getElementById('login-password').value;

    if (!emailCpf || !password) {
        alert("Por favor, preencha email/CPF e senha.");
        return;
    }

    const foundUser = registeredUsers.find(user => (user.email === emailCpf || user.cpf === emailCpf) && user.password === password);

    if (foundUser) {
        currentUser = foundUser;
        alert(`Login bem-sucedido! Bem-vindo(a), ${currentUser.name.split(' ')[0]}!`);
        loginModal.style.display = "none";
        loginForm.reset();
        
        signupActionBtn.classList.add('hidden');
        loginActionBtn.classList.add('hidden');
        userGreetingEl.textContent = `Olá, ${currentUser.name.split(' ')[0]}`;
        userGreetingEl.classList.remove('hidden');

    } else {
        alert("Email/CPF ou senha incorretos, ou cadastro não encontrado.");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    populateFilters();
    applyFilters(); 
    updateBudgetBarDisplay(); 

    const filterInputs = [
        globalSearchBarEl, dateStartEl, dateEndEl, availabilityFilterEl, 
        minPriceEl, maxPriceEl
    ];
    filterInputs.forEach(input => {
        const eventType = (input.type === 'checkbox' || input.type === 'date') ? 'change' : 'input';
        input.addEventListener(eventType, applyFilters);
    });

    typeFiltersEl.addEventListener('change', (event) => {
        if(event.target.matches('input[name="type"]')) {
            applyFilters();
        }
    });
    brandFiltersEl.addEventListener('change', applyFilters); 
    
    clearFiltersBtn.addEventListener('click', clearAllFilters);
    
    sendWhatsAppBottomBtn.onclick = () => {
        const message = generateWhatsAppMessage();
        if (message) {
            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
        }
    };

    // Modais
    signupActionBtn.onclick = () => {
        signupModal.style.display = "block";
        signupForm.reset(); 
    }
    loginActionBtn.onclick = () => {
        loginModal.style.display = "block";
        loginForm.reset(); 
    }

    closeModalBtns.forEach(btn => {
        btn.onclick = () => {
            const modalId = btn.dataset.modalId;
            if(document.getElementById(modalId)) { 
                 document.getElementById(modalId).style.display = "none";
            }
        }
    }); // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FECHAMENTO CORRETO DO forEach ADICIONADO

    window.onclick = (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = "none";
        }
    };
    
    signupForm.addEventListener('submit', handleSignupFormSubmit);
    loginForm.addEventListener('submit', handleLoginFormSubmit);

}); // Este é o fechamento do DOMContentLoaded