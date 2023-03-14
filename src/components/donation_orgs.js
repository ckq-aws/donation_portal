const Orgs = [{"item_id":1,"organization_name":"King Inc","sector":"education"},
{"item_id":2,"organization_name":"Volkman Group","sector":"crime reduction"},
{"item_id":3,"organization_name":"Hermann-Ankunding","sector":"legal aid"},
{"item_id":4,"organization_name":"Walker LLC","sector":"womens health"},
{"item_id":5,"organization_name":"Gleason, Johns and Hodkiewicz","sector":"womens health"},
{"item_id":6,"organization_name":"Kutch, Walsh and Hegmann","sector":"legal aid"},
{"item_id":7,"organization_name":"Cassin, Bayer and Huels","sector":"women & minorities"},
{"item_id":8,"organization_name":"Raynor, Howe and Abshire","sector":"education"},
{"item_id":9,"organization_name":"Kshlerin, McCullough and Bayer","sector":"crime reduction"},
{"item_id":10,"organization_name":"Hahn-Toy","sector":"legal aid"},
{"item_id":11,"organization_name":"Wisoky, Kemmer and Murazik","sector":"education"},
{"item_id":12,"organization_name":"Trantow-Mills","sector":"welfare"},
{"item_id":13,"organization_name":"Ruecker-Larkin","sector":"welfare"},
{"item_id":14,"organization_name":"Mohr-Wintheiser","sector":"legal aid"},
{"item_id":15,"organization_name":"Kling LLC","sector":"legal aid"},
{"item_id":16,"organization_name":"Berge, Bergstrom and Rohan","sector":"education"},
{"item_id":17,"organization_name":"Nolan-Abshire","sector":"welfare"},
{"item_id":18,"organization_name":"Cole-Schneider","sector":"education"},
{"item_id":19,"organization_name":"Windler, Koss and Stark","sector":"welfare"},
{"item_id":20,"organization_name":"Ziemann-Blick","sector":"welfare"},
{"item_id":21,"organization_name":"Christiansen Inc","sector":"crime reduction"},
{"item_id":22,"organization_name":"Berge LLC","sector":"crime reduction"},
{"item_id":23,"organization_name":"Hudson Group","sector":"crime reduction"},
{"item_id":24,"organization_name":"Jaskolski-Von","sector":"crime reduction"},
{"item_id":25,"organization_name":"Labadie, Sporer and Nitzsche","sector":"women & minorities"},
{"item_id":26,"organization_name":"Steuber LLC","sector":"legal aid"},
{"item_id":27,"organization_name":"Goldner Group","sector":"womens health"},
{"item_id":28,"organization_name":"Haag, Zemlak and DuBuque","sector":"crime reduction"},
{"item_id":29,"organization_name":"Runolfsson-Weissnat","sector":"women & minorities"},
{"item_id":30,"organization_name":"Jones, Schinner and Hoeger","sector":"women & minorities"},
{"item_id":31,"organization_name":"McCullough-Olson","sector":"women & minorities"},
{"item_id":32,"organization_name":"Bergstrom, Mante and Mitchell","sector":"crime reduction"},
{"item_id":33,"organization_name":"O'Conner-Bergnaum","sector":"welfare"},
{"item_id":34,"organization_name":"Daugherty-Runolfsdottir","sector":"womens health"},
{"item_id":35,"organization_name":"Maggio-Gleichner","sector":"women & minorities"},
{"item_id":36,"organization_name":"Roberts, White and Marquardt","sector":"crime reduction"},
{"item_id":37,"organization_name":"Spinka-Jakubowski","sector":"education"},
{"item_id":38,"organization_name":"Hessel Inc","sector":"crime reduction"},
{"item_id":39,"organization_name":"Schuppe, Hamill and Emard","sector":"education"},
{"item_id":40,"organization_name":"Ledner-Walker","sector":"womens health"},
{"item_id":41,"organization_name":"Reichel-Weimann","sector":"legal aid"},
{"item_id":42,"organization_name":"Swaniawski-Stanton","sector":"crime reduction"},
{"item_id":43,"organization_name":"Mills LLC","sector":"womens health"},
{"item_id":44,"organization_name":"Schiller and Sons","sector":"women & minorities"},
{"item_id":45,"organization_name":"White, Yundt and Brekke","sector":"crime reduction"},
{"item_id":46,"organization_name":"Corwin-Orn","sector":"crime reduction"},
{"item_id":47,"organization_name":"Thiel, Hauck and Bradtke","sector":"legal aid"},
{"item_id":48,"organization_name":"Reilly-Lynch","sector":"womens health"},
{"item_id":49,"organization_name":"Grady LLC","sector":"welfare"},
{"item_id":50,"organization_name":"Zulauf-Rosenbaum","sector":"education"},
{"item_id":51,"organization_name":"Hagenes-Dare","sector":"womens health"},
{"item_id":52,"organization_name":"Witting, Hickle and Kreiger","sector":"women & minorities"},
{"item_id":53,"organization_name":"Rippin, Thompson and Ritchie","sector":"education"},
{"item_id":54,"organization_name":"Wiegand and Sons","sector":"education"},
{"item_id":55,"organization_name":"Cremin-Mills","sector":"education"},
{"item_id":56,"organization_name":"Abshire Inc","sector":"crime reduction"},
{"item_id":57,"organization_name":"Jast Inc","sector":"legal aid"},
{"item_id":58,"organization_name":"Corwin LLC","sector":"legal aid"},
{"item_id":59,"organization_name":"Jakubowski LLC","sector":"legal aid"},
{"item_id":60,"organization_name":"Senger-Anderson","sector":"crime reduction"},
{"item_id":61,"organization_name":"O'Connell-Emmerich","sector":"womens health"},
{"item_id":62,"organization_name":"Tremblay Inc","sector":"education"},
{"item_id":63,"organization_name":"Gorczany-Krajcik","sector":"crime reduction"},
{"item_id":64,"organization_name":"Gutkowski-Bogan","sector":"legal aid"},
{"item_id":65,"organization_name":"Blick, Bogan and Rodriguez","sector":"women & minorities"},
{"item_id":66,"organization_name":"McClure, Kunde and Nienow","sector":"crime reduction"},
{"item_id":67,"organization_name":"Towne Inc","sector":"welfare"},
{"item_id":68,"organization_name":"Skiles, Shields and Bernhard","sector":"welfare"},
{"item_id":69,"organization_name":"Weber-Gutmann","sector":"welfare"},
{"item_id":70,"organization_name":"Stiedemann-Block","sector":"women & minorities"},
{"item_id":71,"organization_name":"Abbott LLC","sector":"womens health"},
{"item_id":72,"organization_name":"Conroy, Pacocha and Osinski","sector":"welfare"},
{"item_id":73,"organization_name":"Effertz, Stoltenberg and Runte","sector":"education"},
{"item_id":74,"organization_name":"Rowe-Waters","sector":"education"},
{"item_id":75,"organization_name":"Walsh-Cassin","sector":"education"},
{"item_id":76,"organization_name":"Fritsch, Nikolaus and Jones","sector":"welfare"},
{"item_id":77,"organization_name":"Kohler, Rippin and Wilkinson","sector":"education"},
{"item_id":78,"organization_name":"Spencer-Tremblay","sector":"welfare"},
{"item_id":79,"organization_name":"Hane, Daugherty and Sipes","sector":"crime reduction"},
{"item_id":80,"organization_name":"Huels and Sons","sector":"crime reduction"},
{"item_id":81,"organization_name":"Waelchi, Douglas and Ratke","sector":"crime reduction"},
{"item_id":82,"organization_name":"Beahan-Stamm","sector":"welfare"},
{"item_id":83,"organization_name":"Hartmann-Yundt","sector":"welfare"},
{"item_id":84,"organization_name":"Stroman, Hermiston and Stamm","sector":"crime reduction"},
{"item_id":85,"organization_name":"Breitenberg, Larkin and Kiehn","sector":"crime reduction"},
{"item_id":86,"organization_name":"Mills-Bechtelar","sector":"crime reduction"},
{"item_id":87,"organization_name":"Raynor, Fisher and Zboncak","sector":"welfare"},
{"item_id":88,"organization_name":"Gaylord, Moore and Kshlerin","sector":"crime reduction"},
{"item_id":89,"organization_name":"Gutmann LLC","sector":"education"},
{"item_id":90,"organization_name":"Bergstrom and Sons","sector":"women & minorities"},
{"item_id":91,"organization_name":"Walker Inc","sector":"education"},
{"item_id":92,"organization_name":"Hickle Group","sector":"legal aid"},
{"item_id":93,"organization_name":"Reilly Inc","sector":"welfare"},
{"item_id":94,"organization_name":"Jerde, Schultz and D'Amore","sector":"crime reduction"},
{"item_id":95,"organization_name":"Zboncak, Mann and Reynolds","sector":"legal aid"},
{"item_id":96,"organization_name":"Tremblay-Lehner","sector":"women & minorities"},
{"item_id":97,"organization_name":"Toy LLC","sector":"legal aid"},
{"item_id":98,"organization_name":"Dibbert Group","sector":"welfare"},
{"item_id":99,"organization_name":"Murazik LLC","sector":"welfare"},
{"item_id":100,"organization_name":"Funk-Deckow","sector":"women & minorities"},
{"item_id":101,"organization_name":"Hudson-Prosacco","sector":"legal aid"},
{"item_id":102,"organization_name":"Hand-Rolfson","sector":"womens health"},
{"item_id":103,"organization_name":"Morar and Sons","sector":"womens health"},
{"item_id":104,"organization_name":"Lowe, Gusikowski and Langworth","sector":"womens health"},
{"item_id":105,"organization_name":"Gleason-Von","sector":"womens health"},
{"item_id":106,"organization_name":"Sipes Inc","sector":"legal aid"},
{"item_id":107,"organization_name":"Crona and Sons","sector":"womens health"},
{"item_id":108,"organization_name":"Yost-Rau","sector":"womens health"},
{"item_id":109,"organization_name":"Hilpert Group","sector":"legal aid"},
{"item_id":110,"organization_name":"Kshlerin, Barrows and Rice","sector":"women & minorities"},
{"item_id":111,"organization_name":"Baumbach, Monahan and Smith","sector":"education"},
{"item_id":112,"organization_name":"Deckow, Witting and Oberbrunner","sector":"women & minorities"},
{"item_id":113,"organization_name":"Senger, Larkin and Kozey","sector":"crime reduction"},
{"item_id":114,"organization_name":"McDermott LLC","sector":"crime reduction"},
{"item_id":115,"organization_name":"Padberg-Schaefer","sector":"welfare"},
{"item_id":116,"organization_name":"Bins, Hoeger and Feest","sector":"womens health"},
{"item_id":117,"organization_name":"Armstrong, Quitzon and Kessler","sector":"education"},
{"item_id":118,"organization_name":"Mraz-Funk","sector":"crime reduction"},
{"item_id":119,"organization_name":"Rolfson, Hamill and Ritchie","sector":"crime reduction"},
{"item_id":120,"organization_name":"Reilly, Johnson and Weissnat","sector":"women & minorities"},
{"item_id":121,"organization_name":"Abbott LLC","sector":"womens health"},
{"item_id":122,"organization_name":"Walsh, Considine and Wisozk","sector":"women & minorities"},
{"item_id":123,"organization_name":"Mayer, Harris and Douglas","sector":"women & minorities"},
{"item_id":124,"organization_name":"Bosco-Boyer","sector":"welfare"},
{"item_id":125,"organization_name":"Bailey, Mayer and Reichert","sector":"welfare"},
{"item_id":126,"organization_name":"Gutkowski-Jacobi","sector":"legal aid"},
{"item_id":127,"organization_name":"Kuhn Inc","sector":"crime reduction"},
{"item_id":128,"organization_name":"Brekke Inc","sector":"women & minorities"},
{"item_id":129,"organization_name":"Grimes, Harvey and O'Connell","sector":"crime reduction"},
{"item_id":130,"organization_name":"Boehm, Heller and Schumm","sector":"education"},
{"item_id":131,"organization_name":"Schroeder, O'Hara and Bins","sector":"education"},
{"item_id":132,"organization_name":"Murray, Anderson and Feeney","sector":"welfare"},
{"item_id":133,"organization_name":"Wilkinson Group","sector":"womens health"},
{"item_id":134,"organization_name":"Walker-Turner","sector":"legal aid"},
{"item_id":135,"organization_name":"Bauch Group","sector":"women & minorities"},
{"item_id":136,"organization_name":"Trantow Inc","sector":"welfare"},
{"item_id":137,"organization_name":"Cartwright, Wilderman and Will","sector":"legal aid"},
{"item_id":138,"organization_name":"Rau-Huels","sector":"education"},
{"item_id":139,"organization_name":"Batz, Rohan and Sawayn","sector":"women & minorities"},
{"item_id":140,"organization_name":"Schuster LLC","sector":"women & minorities"},
{"item_id":141,"organization_name":"Waters, Beier and Luettgen","sector":"legal aid"},
{"item_id":142,"organization_name":"Kihn, Stiedemann and Wilderman","sector":"crime reduction"},
{"item_id":143,"organization_name":"Mann-Barrows","sector":"legal aid"},
{"item_id":144,"organization_name":"Halvorson-Weimann","sector":"education"},
{"item_id":145,"organization_name":"Konopelski, O'Keefe and Skiles","sector":"legal aid"},
{"item_id":146,"organization_name":"Bruen LLC","sector":"womens health"},
{"item_id":147,"organization_name":"Hettinger-Donnelly","sector":"crime reduction"},
{"item_id":148,"organization_name":"Fisher-Schiller","sector":"womens health"},
{"item_id":149,"organization_name":"Zemlak, Hansen and Stanton","sector":"womens health"},
{"item_id":150,"organization_name":"Schulist-Cartwright","sector":"legal aid"}]

export default Orgs