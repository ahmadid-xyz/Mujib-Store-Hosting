<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mujib Store Toko Hosting</title>
    <style>
        /* General Styling */
        body {
            margin: 0;
            font-family: 'Poppins', sans-serif;
            background: #f5f7fa;
            color: #333;
            overflow-x: hidden;
        }

        header {
            background: #1d3557; /* Biru Tua */
            position: fixed;
            width: 100%;
            padding: 15px 30px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            z-index: 1000;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }

        header .logo {
            font-size: 1.8rem;
            font-weight: bold;
            color: #f4a261; /* Emas */
        }

        header nav a {
            color: #fff;
            margin-left: 20px;
            text-decoration: none;
            font-weight: 500;
        }

        header nav a:hover {
            color: #f4a261; /* Emas */
        }

        .hero {
            text-align: center;
            padding: 120px 20px 80px;
            background: url('https://files.catbox.moe/h6ip4n.jpg') no-repeat center center fixed;
            background-size: cover;
            color: #fff;
            box-shadow: inset 0 0 200px rgba(0, 0, 0, 0.5);
        }

        .hero h1 {
            font-size: 4rem;
            margin-bottom: 15px;
            text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.7);
        }

        .hero p {
            font-size: 1.2rem;
            margin-bottom: 30px;
        }

        .hero .cta-btn {
            display: inline-block;
            background: #f4a261; /* Emas */
            color: #1d3557; /* Biru Tua */
            padding: 15px 30px;
            border-radius: 50px;
            font-weight: bold;
            text-decoration: none;
            font-size: 1.2rem;
            transition: transform 0.3s ease, background 0.3s ease;
        }

        .hero .cta-btn:hover {
            transform: scale(1.1);
            background: #e76f51; /* Emas Lebih Gelap */
        }

        .section {
            padding: 60px 20px;
            max-width: 1200px;
            margin: auto;
        }

        .section h2 {
            text-align: center;
            font-size: 2.5rem;
            color: #1d3557;
            margin-bottom: 40px;
        }

        .products {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
        }

        .product {
            background: #fff;
            border-radius: 15px;
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .product:hover {
            transform: translateY(-10px);
            box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
        }

        .product img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

        .product h2 {
            font-size: 1.4rem;
            margin: 15px 0;
            color: #1d3557;
            padding: 0 15px;
        }

        .product p {
            font-size: 0.95rem;
            margin: 0 15px 20px;
            color: #555;
        }

        .product .btn {
            display: inline-block;
            background: #f4a261; /* Emas */
            color: #fff;
            padding: 10px 20px;
            border-radius: 20px;
            text-decoration: none;
            font-weight: bold;
            margin-bottom: 20px;
            transition: transform 0.3s ease, background 0.3s ease;
        }

        .product .btn:hover {
            background: #e76f51; /* Emas Lebih Gelap */
            transform: scale(1.1);
        }

        .articles {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
        }

        .article {
            background: #fff;
            border-radius: 15px;
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .article:hover {
            transform: translateY(-10px);
            box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
        }

        .article img {
            width: 100%;
            height: 150px;
            object-fit: cover;
        }

        .article h3 {
            font-size: 1.4rem;
            margin: 15px 15px 10px;
            color: #1d3557;
        }

        .article p {
            font-size: 0.95rem;
            margin: 0 15px 20px;
            color: #555;
        }

        footer {
            text-align: center;
            background: #1d3557; /* Biru Tua */
            color: #fff;
            padding: 20px 0;
            font-size: 0.9rem;
            margin-top: 40px;
        }
        
        .container {
            max-width: 600px;
            margin: 50px auto;
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333;
        }
        .contact-link {
            display: block;
            margin: 15px 0;
            padding: 10px 15px;
            font-size: 18px;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
        }
        .contact-link.tiktok {
            background-color: #010101;
        }
        .contact-link.whatsapp {
            background-color: #25D366;
        }
        .contact-link.youtube {
            background-color: #FF0000;
        }
        .contact-link:hover {
            opacity: 0.9;
        }
    </style>
</head>
<body>
    <header>
        <div class="logo">Mujib Store</div>
        <nav>
            <a href="#home">Home</a>
            <a href="#products">Produk</a>
            <a href="">Nyaman</a>
            <a href="">...</a>
      

        </nav>
    </header>

    <div class="hero" id="home">
        <h1>Halaman 2 Mujib Store</h1>
        <p>Belanja produk pilihan terbaik dengan mudah dan nyaman.</p>
        <a href="https://whatsapp.com/channel/0029VafxnCk9MF8wV4sGvT3i" class="cta-btn">Testimoni</a>
    </div>

    <div class="section" id="products">
        <h2>Produk Terbaik Kami</h2>
        <div class="products">
            <div class="product">
                <img src="https://img100.pixhost.to/images/414/537485819_skyzopedia.jpg" alt="Produk 1">
                <h2>Install Thema Panel</h2>
                <p>Kami Melayani Jasa Install Thema Panel. Dengan Tampilan Yang Keren</p>
                <a class="btn" href="https://wa.me/6283866043444?text=Halo,%20saya%20ingin%20membeli%20Thema">Beli Sekarang</a>
            </div>
        <div class="products">
            <div class="product">
                <img src="https://i.top4top.io/p_32532anj41.jpg" alt="Produk 1">
                <h2>Rename Script</h2>
                <p>Kami Melayani Jasa Rename Scrip. Untuk Bertanya Tanya Silahkan Klik Tombol Di Bawah</p>
                <a class="btn" href="https://wa.me/6283866043444?text=Halo,%20saya%20ingin%20membeli%20rename">Beli Sekarang</a>
            </div>
       
    <div class="section" id="articles">
        <h2>Baca Sebelum Membeli</h2>
        <div class="articles">
            <div class="article">
                <img src="https://img100.pixhost.to/images/401/537320211_skyzopedia.jpg" alt="Artikel 1">
                <h3>Hindari Clone</h3>
                <p>Jangan Mudah Percaya Terhadap Clone Yang Mengatasnamakan Mujib Store</p>
            </div>
            <div class="article">
                <img src="https://img100.pixhost.to/images/401/537321562_skyzopedia.jpg" alt="Artikel 2">
                <h3>Produk Pilihan Terbaik</h3>
                <p>Produk Kami Sudah Terjamin Aman Dan Terpercaya. Dan Ketika Anda Sudah Membeli Barang Jangan Melanggar Apapun Yang Sudah Ditentukan</p>
            </div>
            <div class="container">
        <h1>Hubungi Kami</h1>
        <p>Silakan hubungi kami melalui platform berikut:</p>
        <a href="https://www.tiktok.com/@mujib_store?_r=1&_d=ede5agc10ea3a3&sec_uid=MS4wLjABAAAAX4xK6QfaF9-1OKfoIbAzrfO8_VdakzlUIu8dEb6oSMb7pOADs9AR1aLdjr7MhhrT&share_author_id=7014463264076186626&sharer_language=id&source=h5_t&u_code=egjeh04m0h60k1&timestamp=1732683601&user_id=7425857051056391174&sec_user_id=MS4wLjABAAAAHe6jEWXNkZBJw6_z4s7R_Ay4ZlXlaIjQ15yRfXGPXMArDQgrkjUGbHB7XftR84--&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7439899813124146962&share_link_id=b2bd0229-0f58-4bb6-b42b-fe340509ddf0&share_app_id=1180&ugbiz_name=ACCOUNT&ug_btm=b6880%2Cb5836&social_share_type=5&enable_checksum=1" target="_blank" class="contact-link tiktok">Hubungi di TikTok</a>
        <a href="https://wa.me/6283866043444" target="_blank" class="contact-link whatsapp">Hubungi di WhatsApp</a>
        <a href="https://youtube.com/@mujibstore?si=ks3fF2z4nfsTQnbO" target="_blank" class="contact-link youtube">Subscribe YouTube Kami</a>
    </div>
        </div>
    </div>

    <footer>
        &copy; 2024 MujibStore. Police Private
    </footer>
    
</body>
</html>
