var BRT_NODES = [
    [ "<span title=\"Zpět na úvod\">Úvodní stránka</span>", "main.html", "main"],
    
    [ "<span title=\"Rozsáhlá sekce s informacemi o královském nástroji. Anatomie, popis nástrojů, fotogalerie, varhanní slovník a odkazy...\">Varhany</span>", null, null,
        [ "<span title=\"Jak fungují varhany, co je uvnitř, co je co., slovník...\">Anatomie varhan</span>", null, null, 
             ["<span title=\"Úvod do anatomie a podrobný soupis všech kapitol\">Úvod a obsah</span>","texty/varhany/anatomie/anatomie.html","main"],
			 ["Varhanní skříň","","main"],
			 ["Vzdušnice","texty/varhany/anatomie/vzdusnice.html","main", 
			        ["S tónovými kancelami","texty/varhany/anatomie/vzdusnice_ton.html","main"],
				["S rejstříkovými kancelami","texty/varhany/anatomie/vzdusnice_registr.html","main"],
				["Skříňová","texty/varhany/anatomie/vzdusnice_unit.html","main"]
					 ],
			 ["Traktura","texty/varhany/anatomie/traktura.html","main", 
			        ["Mechanická","texty/varhany/anatomie/mechanika.html","main"],
				["Pneumatická","texty/varhany/anatomie/pneumatika.html","main"],
				["Elektrická","texty/varhany/anatomie/elektrika.html","main"],
				["Smíšená (hybridní)","texty/varhany/anatomie/kombinovana.html","main"]
			 ],
			 ["Vzduchové hospodářství","texty/varhany/anatomie/vzduch.html","main",
				["Jednodílné měchy","texty/varhany/anatomie/mech1.html","main"],
				["Dvoudílné měchy","texty/varhany/anatomie/mech2.html","main"],
				["Elektrický ventilátor","texty/varhany/anatomie/ventilator.html","main"]
			 ],
			 ["Píšťaly","texty/varhany/anatomie/pistaly.html","main",
			 	["Akustika","texty/varhany/anatomie/pistaly_akustika.html","main"],
				["Označování hlasů","texty/varhany/anatomie/pistaly_hlasy_oznaceni.html","main"],
				["Základní hlasy","texty/varhany/anatomie/pistaly_hlasy_zakladni.html","main"],
				["Vedlejší hlasy","texty/varhany/anatomie/pistaly_hlasy_vedlejsi.html","main"],
				["Smíšené hlasy","texty/varhany/anatomie/pistaly_hlasy_smisene.html","main"]
			 ],
			 ["Hrací stůl","texty/varhany/anatomie/stul.html","main",
				["Klaviatury","texty/varhany/anatomie/stul_klaviatury.html","main"],
				["Registrační zařízení","texty/varhany/anatomie/stul_registrace.html","main"]
			 ],
			["Pomocná zařízení","","main",
				["Rejstříkové crescendo","texty/varhany/anatomie/pomocne_crescendo.html","main"],
				["Kolektivy a volné kombinace","texty/varhany/anatomie/pomocne_kombinace.html","main"],
				["Anulátor (automat) pedálu","","main"],
			 	["Tremolo","texty/varhany/anatomie/tremolo.html","main"]
			],
			["Zvláštní konstrukce","","main",
				["Multiplexní varhany","texty/varhany/anatomie/multiplex.html","main"],
				["Vícetónové a kombinované píšťaly","","main"],
				["Zvukové efekty a hříčky","","main"]
			],
			["Materiály a technologie","","main",
				["Materiály používané při stavbě","","main"],
				["Specifické varhanářské nástroje","","main"],
				["Zpracování varhanního kovu","","main"]
			],
			["Škodlivé vlivy","","main",],
			["Přehled závad varhan","","main",],
			["Časté dotazy okolo varhan","texty/varhany/anatomie/dotazy.html","main",
				["Odpovědi na Vaše dotazy","texty/varhany/anatomie/dotazy2.html","main"]
			],
		],
		[ "<span title=\"Slovníček nejpoužívanějších varhanních a varhanářských výrazů (s vazbou na obrázky a podrobný popis v sekci Anatomie)\">Varhanní slovník</span>", "texty/varhany/slovnik/slovnik.html","main"],
        [ "<span title=\"Podrobný popis konkrétních nástrojů\">Nástroje</span>", null, null, 
            [ "<span title=\"Varhany v kostele sv. Josefa v Janovicích u Frýdku - Místku\">Janovice</span>","texty/varhany/nastroje/janovice/janovicke_varhany.html","main"],
			[ "<span title=\"Varhany Vaculín opus 7 v kostele sv. Jakuba Většího v Brtnici\">Brtnice</span>","texty/varhany/nastroje/brtnice/brtnice.html" ,"main"],
			[ "<span title=\"Rekonstrukce varhanního pozitivu v kostele sv. Antonína Paduánského v malé vísce u Jihlavy\">Panská Lhota</span>","texty/varhany/nastroje/panska_lhota/panska_lhota.html" ,"main"],
			[ "<span title=\"Varhany v katedrále Božského spasitele v Ostravě\">Ostrava - katedrála</span>","texty/varhany/nastroje/katedrala/katedrala.html","main"],
                        [ "<span title=\"Koncertní varhany Janáčkovy Konzervatoře v Ostravě\">Ostrava - JK</span>","texty/varhany/nastroje/ostrava_jk/konzervator.html","main"],
			[ "<span title=\"Nové koncertní varhany Janáčkovy filharmonie Ostrava\">Ostrava - JFO</span>","texty/varhany/nastroje/ostrava/ostrava.html","main"],
			[ "<span title=\"Varhany v kostele sv. Pavla v Ostravě - Vítkovicích\">Vítkovice</span>","texty/varhany/nastroje/vitkovice/vitkovice.html","main"],
			[ "<span title=\"Varhany Rieger v kostele v Palkovicích u Frýdku - Místku\">Palkovice</span>","texty/varhany/nastroje/palkovice/palkovice.html","main"],
			[ "<span title=\"Englerovy varhany v chrámu sv. Mořice v Olomouci\">Olomouc</span>","texty/varhany/nastroje/olomouc/olomouc.html" ,"main"],
			[ "<span title=\"Opavské varhany - trojice nástrojů ze slezské metropole - v opavské konkatedrále, chrámu sv. Ducha a Domě kultury\">Opava</span>","texty/varhany/nastroje/opava/opava.html","main"],
			[ "<span title=\"Domácí jazýčkové varhany Petrof/Rieger\">Petrof</span>","texty/varhany/nastroje/petrof/petrof.html","main"],
			[ "<span title=\"Varhany ve Velké synagoze v Plzni\">Plzeň - synagoga</span>","texty/varhany/nastroje/plzen/synagoga.html" ,"main"],
                        [ "<span title=\"Nové varhany v kostele Panny Marie růžencové v Louce u Veselí nad Moravou (okres Hodonín)\">Louka</span>","texty/varhany/nastroje/louka/louka.html","main"],
			[ "<span title=\"Varhany v kostele sv. Václava v Machově\">Machov</span>","texty/varhany/nastroje/machov/machov.html" ,"main"],
			[ "<span title=\"Fotografie, dispozice a krátký popis varhan z Rychnova nad Kněžnou\">Rychnov nad Kněžnou</span>","texty/varhany/nastroje/rychnov/rychnov.html","main"],
			[ "<span title=\"Fotografie, dispozice a krátký popis varhan v Dolnom Kubíne na Slovensku\">Dolný Kubín</span>","texty/varhany/nastroje/kubin/kubin.html","main"],
			[ "<span title=\"Varhany v kostele na Pražmě ve farnosti Morávka u Frýdku - Místku\">Pražmo (Morávka)</span>","texty/varhany/nastroje/moravka/moravka.html", "main"],
			[ "<span title=\"Varhany Kopřivnici\">Kopřivnice</span>","texty/varhany/nastroje/koprivnice/varhany-koprivnice2.html", "main"]
        ],
        [ "<span title=\"Fotogalerie moravských a slezských varhan (bez podrobnějšího popisu)\">Fotogalerie</span>", "texty/varhany/fotogalerie/fotogalerie1.html", "main"],
		[ "<span title=\"Odkazy na domácí i zahraniční stránky s varhanní tématikou\">Varhanní odkazy</span>", "odkazy.html", "main"],
		[ "<span title=\"Noty pro varhaníky - zapomenuté písně\">Noty</span>","texty/varhany/noty/noty.html", "main"]
    ],
    [ "<span title=\"Zajímavosti z okolí Ostravy (technické i společenské, fotografie...).\">Zajímavosti</span>", "texty/zajimavosti/zajimavosti.html", "main", 
        [ "<span title=\"Hodiny v kostele sv. Josefa v Janovicích, jejich rekonstrukce, popis...\">Janovice</span>", "texty/zajimavosti/janovice/hodiny.html", "main"],
        [ "<span title=\"Ostravské zajímavosti, fotografie...\">Ostrava</span>", "texty/zajimavosti/ostrava/ostravsko.html", "main"],
        [ "<span title=\"Kostel sv. Kateřiny v Ostravě - Hrabové, nejstarší ostravská památka zničená 2.4.2002 při dosud nevyjasněném požáru. Historie, fotografie, obnova kostela\">Hrabová</span>", "texty/zajimavosti/hrabova/hrabova.html", "main"]
    ],
	
 	[ "<span title=\"Informace o postupu aktualizace stránek\">Co je tu nového...</span>", "conoveho.html", "main"], 
//	[ "<span title=\"Zde můžete napsat svůj vzkaz čtenářům nebo autorovi stánek\">Návštěvní kniha</span>", "http://www.blueboard.cz/kniha_0.php?id=240180&pid=5a09rt1m2tokknu&hid=00r6pxxtvvsej6e0t8jurossj95s9a", "main"],
 [ "</a><table width=\"130\" border=\"0\"><tr><td><br><br><br><hr></td></tr></table><p align=\"center\"><a href=\"mailto:ber30@seznam.cz\"><img src=\"images/mail.gif\" width=\"45\" height=\"52\" border=\"0\" alt=\"Napište mi!\"></a></p><a>", null, null],
 //[ "</a><table width=\"130\" border=\"0\"><tr><td><hr></td></tr></table><p align=\"center\"><A HREF=\"http://counter.cnw.cz\" TARGET=\"_parent\"><IMG SRC=\"http://counter.cnw.cz/paula.cgi?brtnik&5&0000ff&BEBEBE&on\" ALT=\"[CNW:Counter]\" BORDER=\"0\"></A> ", null, null],
 //[ "</a><table width=\"130\" border=\"0\"><tr><td></td></tr></table><p align=\"center\"><font size=\"1\">(průměrná návštěvnost od r. 2002: 9 návštěvníků/den)</font></p><a>", null, null],
 [ "</a><table width=\"130\" border=\"0\"><tr><td></td></tr></table><p align=\"center\"><font size=\"1\">Poslední úpravy:  2.1.2010<br> © 2001- 2010<a href=\"mailto:ber30@seznam.cz\"> Ing. Petr Bernat </a></font></p><a>", null, null]
	  

	  	];
