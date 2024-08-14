import { FooterMenuItem, FooterTitle, FooterMenus, FooterNavLink, FooterShowMore } from '@/styles/Footer/FooterStyle'
import { Grid, GridColumn } from '@/styles/Global'
import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'


const hakkimizda = {
  "genel-bakis": "Genel Bakış",
  "haberler-duyurular": "Haberler & Duyurular",
  "kurumsal-iletisim-surdurulebilirlik": "Kurumsal İletişim ve Sürdürülebilirlik",
  "kariyer": "Kariyer",
  "gizlilik-guvenlik": "Gizlilik ve Güvenlik",
  "iletisim": "İletişim",
  "pasajda-satici-ol": "Pasaj'da Satıcı Ol",
  "pasaj-blog": "Pasaj Blog",
  "pasaj-gaming": "Pasaj Gaming",
  "telefon-sat": "Telefon Sat"
}

const popular = {
  "android-telefonlar": "Android Telefonlar",
  "iphone-telefonlar": "iPhone Telefonlar",
  "ikinci-el-yenilenmis-telefonlar": "İkinci El / Yenilenmiş Telefonlar",
  "akilli-saatler": "Akıllı Saatler",
  "bluetooth-kulakliklar": "Bluetooth Kulaklıklar",
  "telefon-kiliflari": "Telefon Kılıfları",
  "tabletler": "Tabletler",
  "laptop": "Laptop",
  "oyun-bilgisayarlari": "Oyun Bilgisayarları",
  "modemler": "Modemler",
  "dikey-supurgeler": "Dikey Süpürgeler",
  "robot-supurgeler": "Robot Süpürgeler",
  "kahve-makineleri": "Kahve Makineleri",
  "klimalar": "Klimalar",
  "televizyonlar": "Televizyonlar",
  "oyun-konsollari": "Oyun Konsolları",
  "scooter-bisikletler": "Scooter & Bisikletler",
}

const markalar = {
  "apple": "Apple",
  "samsung": "Samsung",
  "dyson": "Dyson"
}

const help = {
  "yardim-merkezi": "Yardım Merkezi",
  "islem-rehberi": "İşlem Rehberi",
  "siparis-sorgulama": "Sipariş Sorgulama",
  "nasil-iade-edebilirim": "Nasıl İade Edebilirim?",
}

const kampanyalar = {
  "ramazan-kampanyasi": "Ramazan Kampanyası",
  "ramazan-teklifleri": "Ramazan Teklifleri",
  "dugun-ceyiz-paketleri": "Düğün Çeyiz Paketleri",
  "telefon-sat": "Telefon Sat",
  "eskiyi-getir-yeniyi-al": "Eskiyi Getir Yeniyi Al",
  "teknolojik-cihaz-destegi": "Teknolojik Cihaz Desteği",
  "vergisiz-telefonlar": "Vergisiz Telefonlar",
  "vergisiz-bilgisayarlar": "Vergisiz Bilgisayarlar",
  "firsatlar-pasaji": "Fırsatlar Pasajı",
  "pasaj-gunleri": "Pasaj Günleri",
  "sari-gunler": "Sarı Günler",
  "uykusu-kacanlar-kulubu": "Uykusu Kaçanlar Kulübü",
  "sevgililer-gunu-hediyeleri": "Sevgililer Günü Hediyeleri",
  "anneler-gunu-hediyeleri": "Anneler Günü Hediyeleri",
  "babalar-gunu": "Babalar Günü",
  "okula-donus-kampanyasi": "Okula Dönüş Kampanyası",
  "sehre-donus-kampanyasi": "Şehre Dönüş Kampanyası",
  "karne-hediyeleri": "Karne Hediyeleri",
  "yilbasi-hediyeleri": "Yılbaşı Hediyeleri",
  "kurban-bayrami-kampanyasi": "Kurban Bayramı Kampanyası",
}

const popularProducts = {
  "iphone-15": "iPhone 15",
  "iphone-15-plus": "iPhone 15 Plus",
  "iphone-15-pro": "iPhone 15 Pro",
  "iphone-15-pro-max": "iPhone 15 Pro Max",
  "iphone-14": "iPhone 14",
  "iphone-14-plus": "iPhone 14 Plus",
  "iphone-14-pro": "iPhone 14 Pro",
  "iphone-14-pro-max": "iPhone 14 Pro Max",
  "iphone-13": "iPhone 13",
  "iphone-13-mini": "iPhone 13 Mini",
  "iphone-11": "iPhone 11",
  "dyson-v15s-detect": "Dyson V15S Detect",
  "xiaomi-redmi-note-13": "Xiaomi Redmi Note 13",
  "samsung-galaxy-s24-ultra": "Samsung Galaxy S24 Ultra",
  "samsung-galaxy-a04": "Samsung Galaxy A04",
  "samsung-galaxy-a25": "Samsung Galaxy A25",
  "ps5": "PS5/Playsation 5",
  "dyson-airstrait": "Dyson Airstrait",
  "tv-ready": "TV+ Ready"
}

const FooterMenu = () => {
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const handleShowMoreMenu = () => {
    setShowMoreMenu(!showMoreMenu);
  };

  const [showMorePopular, setShowMorePopular] = useState(false);

  const handleShowMorePopular = () => {
    setShowMorePopular(!showMorePopular);
  };

  const [showMoreMarka, setShowMoreMarka] = useState(false);

  const handleShowMoreMarka = () => {
    setShowMoreMarka(!showMoreMarka);
  };
  const [showMoreHelp, setShowMoreHelp] = useState(false);

  const handleShowMoreHelp = () => {
    setShowMoreHelp(!showMoreHelp);
  };
  const [showMoreKampanya, setShowMoreKampanya] = useState(false);

  const handleShowMoreKampanya = () => {
    setShowMoreKampanya(!showMoreKampanya);
  };
  const [showMorePopularProd, setShowMorePopularProd] = useState(false);

  const handleShowMorePopularProd = () => {
    setShowMorePopularProd(!showMorePopularProd);
  };

  return (
    <>
    <Grid columns={6} padding='70px 0 30px 0'>
      <GridColumn>
        <FooterTitle>Hakkımızda</FooterTitle>
        <FooterMenus>
          {
            Object.entries(hakkimizda).slice(0, showMoreMenu ? Object.entries(popularProducts).length : 10).map(([key, value]) => (
              <FooterMenuItem key={key}>
                <FooterNavLink href={`/${key}`}>
                  {value}
                </FooterNavLink>
              </FooterMenuItem>
            ))
          }
          {Object.entries(hakkimizda).length > 10 && (
            <FooterShowMore onClick={handleShowMoreMenu}>
              {showMoreMenu ? <>Daha Az Göster <FaChevronUp/></> : <>Daha Fazla Göster <FaChevronDown /></>}
            </FooterShowMore>
          )}
        </FooterMenus>
      </GridColumn>
      <GridColumn>
        <FooterTitle>Popüler Kategoriler</FooterTitle>
        <FooterMenus>
          {
            Object.entries(popular).slice(0, showMorePopular ? Object.entries(popularProducts).length : 10).map(([key, value]) => (
              <FooterMenuItem key={key}>
                <FooterNavLink href={`/${key}`}>
                  {value}
                </FooterNavLink>
              </FooterMenuItem>
            ))
          }
          {Object.entries(popular).length > 10 && (
            <FooterShowMore onClick={handleShowMorePopular}>
              {showMorePopular ? <>Daha Az Göster <FaChevronUp/></> : <>Daha Fazla Göster <FaChevronDown /></>}
            </FooterShowMore>
          )}
        </FooterMenus>
      </GridColumn>
      <GridColumn>
        <FooterTitle>Markalar</FooterTitle>
        <FooterMenus>
          {
            Object.entries(markalar).slice(0, showMoreMarka ? Object.entries(popularProducts).length : 10).map(([key, value]) => (
              <FooterMenuItem key={key}>
                <FooterNavLink href={`/${key}`}>
                  {value}
                </FooterNavLink>
              </FooterMenuItem>
            ))
          }
          {Object.entries(markalar).length > 10 && (
            <FooterShowMore onClick={handleShowMoreMarka}>
              {showMoreMarka ? <>Daha Az Göster <FaChevronUp/></> : <>Daha Fazla Göster <FaChevronDown /></>}
            </FooterShowMore>
          )}
        </FooterMenus>
      </GridColumn>
      <GridColumn>
        <FooterTitle>Hakkımızda</FooterTitle>
        <FooterMenus>
          {
            Object.entries(help).slice(0, showMoreHelp ? Object.entries(popularProducts).length : 10).map(([key, value]) => (
              <FooterMenuItem key={key}>
                <FooterNavLink href={`/${key}`}>
                  {value}
                </FooterNavLink>
              </FooterMenuItem>
            ))
          }
          { Object.entries(help).length > 10 && (
            <FooterShowMore onClick={handleShowMoreHelp}>
              {showMoreHelp ? <>Daha Az Göster <FaChevronUp/></> : <>Daha Fazla Göster <FaChevronDown /></>}
            </FooterShowMore>
          )}
        </FooterMenus>
      </GridColumn>
      <GridColumn>
        <FooterTitle>Özel Günler & Kampanyalar</FooterTitle>
        <FooterMenus>
          {
            Object.entries(kampanyalar).slice(0, showMoreKampanya ? Object.entries(popularProducts).length : 10).map(([key, value]) => (
              <FooterMenuItem key={key}>
                <FooterNavLink href={`/${key}`}>
                  {value}
                </FooterNavLink>
              </FooterMenuItem>
            ))
          }
          { Object.entries(kampanyalar).length > 10 && (
            <FooterShowMore onClick={handleShowMoreKampanya}>
               {showMoreKampanya? <>Daha Az Göster <FaChevronUp/></> : <>Daha Fazla Göster <FaChevronDown /></>}
            </FooterShowMore>
          )}
        </FooterMenus>
      </GridColumn>
      <GridColumn>
        <FooterTitle>Popüler Ürünler</FooterTitle>
        <FooterMenus>
          {
            Object.entries(popularProducts).slice(0, showMorePopularProd ? Object.entries(popularProducts).length : 10).map(([key, value]) => (
              <FooterMenuItem key={key}>
                <FooterNavLink href={`/${key}`}>
                  {value}
                </FooterNavLink>
              </FooterMenuItem>
            ))
          }
          { Object.entries(popularProducts).length > 10 && (
            <FooterShowMore onClick={handleShowMorePopularProd}>
            {showMorePopularProd ? <>Daha Az Göster <FaChevronUp/></> : <>Daha Fazla Göster <FaChevronDown /></>}
          </FooterShowMore>
          )}
        </FooterMenus>
      </GridColumn>
    </Grid>
    </>
  )
}

export default FooterMenu