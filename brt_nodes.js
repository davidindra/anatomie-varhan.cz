var BRT_NODES = [
    [ "<span title=\"Zp�t na �vod\">�vodn� str�nka</span>", "main.htm", "main"],
    
    [ "<span title=\"Rozs�hl� sekce s informacemi o kr�lovsk�m n�stroji. Anatomie, popis n�stroj�, fotogalerie, varhann� slovn�k a odkazy...\">Varhany</span>", null, null,
        [ "<span title=\"Jak funguj� varhany, co je uvnit�, co je co., slovn�k...\">Anatomie varhan</span>", null, null, 
             ["<span title=\"�vod do anatomie a podrobn� soupis v�ech kapitol\">�vod a obsah</span>","texty/varhany/anatomie/anatomie.htm","main"],
			 ["Varhann� sk���","","main"],
			 ["Vzdu�nice","texty/varhany/anatomie/vzdusnice.htm","main", 
			        ["S t�nov�mi kancelami","texty/varhany/anatomie/vzdusnice_ton.htm","main"],
				["S rejst��kov�mi kancelami","texty/varhany/anatomie/vzdusnice_registr.htm","main"],
				["Sk���ov�","texty/varhany/anatomie/vzdusnice_unit.htm","main"]
					 ],
			 ["Traktura","texty/varhany/anatomie/traktura.htm","main", 
			        ["Mechanick�","texty/varhany/anatomie/mechanika.htm","main"],
				["Pneumatick�","texty/varhany/anatomie/pneumatika.htm","main"],
				["Elektrick�","texty/varhany/anatomie/elektrika.htm","main"],
				["Sm�en� (hybridn�)","texty/varhany/anatomie/kombinovana.htm","main"]
			 ],
			 ["Vzduchov� hospod��stv�","texty/varhany/anatomie/vzduch.htm","main",
				["Jednod�ln� m�chy","texty/varhany/anatomie/mech1.htm","main"],
				["Dvoud�ln� m�chy","texty/varhany/anatomie/mech2.htm","main"],
				["Elektrick� ventil�tor","texty/varhany/anatomie/ventilator.htm","main"]
			 ],
			 ["P횝aly","texty/varhany/anatomie/pistaly.htm","main",
			 	["Akustika","texty/varhany/anatomie/pistaly_akustika.htm","main"],
				["Ozna�ov�n� hlas�","texty/varhany/anatomie/pistaly_hlasy_oznaceni.htm","main"],
				["Z�kladn� hlasy","texty/varhany/anatomie/pistaly_hlasy_zakladni.htm","main"],
				["Vedlej�� hlasy","texty/varhany/anatomie/pistaly_hlasy_vedlejsi.htm","main"],
				["Sm�en� hlasy","texty/varhany/anatomie/pistaly_hlasy_smisene.htm","main"]
			 ],
			 ["Hrac� st�l","texty/varhany/anatomie/stul.htm","main",
				["Klaviatury","texty/varhany/anatomie/stul_klaviatury.htm","main"],
				["Registra�n� za��zen�","texty/varhany/anatomie/stul_registrace.htm","main"]
			 ],
			["Pomocn� za��zen�","","main",
				["Rejst��kov� crescendo","texty/varhany/anatomie/pomocne_crescendo.htm","main"],
				["Kolektivy a voln� kombinace","texty/varhany/anatomie/pomocne_kombinace.htm","main"],
				["Anul�tor (automat) ped�lu","","main"],
			 	["Tremolo","texty/varhany/anatomie/tremolo.htm","main"]
			],
			["Zvl�tn� konstrukce","","main",
				["Multiplexn� varhany","texty/varhany/anatomie/multiplex.htm","main"],
				["V�cet�nov� a kombinovan� p횝aly","","main"],
				["Zvukov� efekty a h���ky","","main"]
			],
			["Materi�ly a technologie","","main",
				["Materi�ly pou��van� p�i stavb�","","main"],
				["Specifick� varhan��sk� n�stroje","","main"],
				["Zpracov�n� varhann�ho kovu","","main"]
			],
			["�kodliv� vlivy","","main",],
			["P�ehled z�vad varhan","","main",],
			["�ast� dotazy okolo varhan","texty/varhany/anatomie/dotazy.htm","main",
				["Odpov�di na Va�e dotazy","texty/varhany/anatomie/dotazy2.htm","main"]
			],
		],
		[ "<span title=\"Slovn��ek nejpou��van�j��ch varhann�ch a varhan��sk�ch v�raz� (s vazbou na obr�zky a podrobn� popis v sekci Anatomie)\">Varhann� slovn�k</span>", "texty/varhany/slovnik/slovnik.htm","main"],
        [ "<span title=\"Podrobn� popis konkr�tn�ch n�stroj�\">N�stroje</span>", null, null, 
            [ "<span title=\"Varhany v kostele sv. Josefa v Janovic�ch u Fr�dku - M�stku\">Janovice</span>","texty/varhany/nastroje/janovice/janovicke_varhany.htm","main"],
			[ "<span title=\"Varhany Vacul�n opus 7 v kostele sv. Jakuba V�t��ho v Brtnici\">Brtnice</span>","texty/varhany/nastroje/brtnice/brtnice.htm" ,"main"],
			[ "<span title=\"Rekonstrukce varhann�ho pozitivu v kostele sv. Anton�na Padu�nsk�ho v mal� v�sce u Jihlavy\">Pansk� Lhota</span>","texty/varhany/nastroje/panska_lhota/panska_lhota.htm" ,"main"],
			[ "<span title=\"Varhany v katedr�le Bo�sk�ho spasitele v Ostrav�\">Ostrava - katedr�la</span>","texty/varhany/nastroje/katedrala/katedrala.htm","main"],
                        [ "<span title=\"Koncertn� varhany Jan��kovy Konzervato�e v Ostrav�\">Ostrava - JK</span>","texty/varhany/nastroje/ostrava_jk/konzervator.htm","main"],
			[ "<span title=\"Nov� koncertn� varhany Jan��kovy filharmonie Ostrava\">Ostrava - JFO</span>","texty/varhany/nastroje/ostrava/ostrava.htm","main"],
			[ "<span title=\"Varhany v kostele sv. Pavla v Ostrav� - V�tkovic�ch\">V�tkovice</span>","texty/varhany/nastroje/vitkovice/vitkovice.htm","main"],
			[ "<span title=\"Varhany Rieger v kostele v Palkovic�ch u Fr�dku - M�stku\">Palkovice</span>","texty/varhany/nastroje/palkovice/palkovice.htm","main"],
			[ "<span title=\"Englerovy varhany v chr�mu sv. Mo�ice v Olomouci\">Olomouc</span>","texty/varhany/nastroje/olomouc/olomouc.htm" ,"main"],
			[ "<span title=\"Opavsk� varhany - trojice n�stroj� ze slezsk� metropole - v opavsk� konkatedr�le, chr�mu sv. Ducha a Dom� kultury\">Opava</span>","texty/varhany/nastroje/opava/opava.htm","main"],
			[ "<span title=\"Dom�c� jaz��kov� varhany Petrof/Rieger\">Petrof</span>","texty/varhany/nastroje/petrof/petrof.htm","main"],
			[ "<span title=\"Varhany ve Velk� synagoze v Plzni\">Plze� - synagoga</span>","texty/varhany/nastroje/plzen/synagoga.htm" ,"main"],
                        [ "<span title=\"Nov� varhany v kostele Panny Marie r��encov� v Louce u Vesel� nad Moravou (okres Hodon�n)\">Louka</span>","texty/varhany/nastroje/louka/louka.htm","main"],
			[ "<span title=\"Varhany v kostele sv. V�clava v Machov�\">Machov</span>","texty/varhany/nastroje/machov/machov.htm" ,"main"],
			[ "<span title=\"Fotografie, dispozice a kr�tk� popis varhan z Rychnova nad Kn�nou\">Rychnov nad Kn�nou</span>","texty/varhany/nastroje/rychnov/rychnov.htm","main"],
			[ "<span title=\"Fotografie, dispozice a kr�tk� popis varhan v Dolnom Kub�ne na Slovensku\">Doln� Kub�n</span>","texty/varhany/nastroje/kubin/kubin.htm","main"],
			[ "<span title=\"Varhany v kostele na Pra�m� ve farnosti Mor�vka u Fr�dku - M�stku\">Pra�mo (Mor�vka)</span>","texty/varhany/nastroje/moravka/moravka.htm", "main"],
			[ "<span title=\"Varhany Kop�ivnici\">Kop�ivnice</span>","texty/varhany/nastroje/koprivnice/varhany-koprivnice2.htm", "main"]
        ],
        [ "<span title=\"Fotogalerie moravsk�ch a slezsk�ch varhan (bez podrobn�j��ho popisu)\">Fotogalerie</span>", "texty/varhany/fotogalerie/fotogalerie1.htm", "main"],
		[ "<span title=\"Odkazy na dom�c� i zahrani�n� str�nky s varhann� t�matikou\">Varhann� odkazy</span>", "odkazy.htm", "main"],
		[ "<span title=\"Noty pro varhan�ky - zapomenut� p�sn�\">Noty</span>","texty/varhany/noty/noty.htm", "main"]
    ],
    [ "<span title=\"Zaj�mavosti z okol� Ostravy (technick� i spole�ensk�, fotografie...).\">Zaj�mavosti</span>", "texty/zajimavosti/zajimavosti.htm", "main", 
        [ "<span title=\"Hodiny v kostele sv. Josefa v Janovic�ch, jejich rekonstrukce, popis...\">Janovice</span>", "texty/zajimavosti/janovice/hodiny.htm", "main"],
        [ "<span title=\"Ostravsk� zaj�mavosti, fotografie...\">Ostrava</span>", "texty/zajimavosti/ostrava/ostravsko.htm", "main"],
        [ "<span title=\"Kostel sv. Kate�iny v Ostrav� - Hrabov�, nejstar�� ostravsk� pam�tka zni�en� 2.4.2002 p�i dosud nevyjasn�n�m po��ru. Historie, fotografie, obnova kostela\">Hrabov�</span>", "texty/zajimavosti/hrabova/hrabova.htm", "main"]
    ],
	
 	[ "<span title=\"Informace o postupu aktualizace str�nek\">Co je tu nov�ho...</span>", "conoveho.htm", "main"], 
	[ "<span title=\"Zde m��ete napsat sv�j vzkaz �ten���m nebo autorovi st�nek\">N�v�t�vn� kniha</span>", "http://www.blueboard.cz/kniha_0.php?id=240180&pid=5a09rt1m2tokknu&hid=00r6pxxtvvsej6e0t8jurossj95s9a", "main"],
 [ "</a><table width=\"130\" border=\"0\"><tr><td><br><br><br><hr></td></tr></table><p align=\"center\"><a href=\"mailto:ber30@seznam.cz\"><img src=\"images/mail.gif\" width=\"45\" height=\"52\" border=\"0\" alt=\"Napi�te mi!\"></a></p><a>", null, null],
 [ "</a><table width=\"130\" border=\"0\"><tr><td><hr></td></tr></table><p align=\"center\"><A HREF=\"http://counter.cnw.cz\" TARGET=\"_parent\"><IMG SRC=\"http://counter.cnw.cz/paula.cgi?brtnik&5&0000ff&BEBEBE&on\" ALT=\"[CNW:Counter]\" BORDER=\"0\"></A> ", null, null],
 [ "</a><table width=\"130\" border=\"0\"><tr><td></td></tr></table><p align=\"center\"><font size=\"1\">(pr�m�rn� n�v�t�vnost od r. 2002: 9 n�v�t�vn�k�/den)</font></p><a>", null, null],
 [ "</a><table width=\"130\" border=\"0\"><tr><td></td></tr></table><p align=\"center\"><font size=\"1\">Posledn� �pravy:  2.1.2010<br> � 2001- 2010<a href=\"mailto:ber30@seznam.cz\"> Ing. Petr Bernat </a></font></p><a>", null, null]
	  

	  	];
