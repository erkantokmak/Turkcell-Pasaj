import { Row } from '@/styles/Global';
import { MenuItem, SubMenu, SubMenuItem } from '@/styles/Header/HeaderStyle';
import React from 'react';

const Menu = () => {
    const menuItems: { [key: string]: { name: string, subcategories?: { [key: string]: string } } } = {
        "cep-telefonu": {
            name: "Cep Telefonu-Aksesuar",
            subcategories: {
                "apple-telefonlar": "Apple Telefonlar",
                "android-telefonlar": "Android Telefonlar",
                "ai-telefonlar": "Yapay Zeka(AI) Telefonlar",
                "giyilebilir-teknolojiler": "Giyilebilir Teknolojiler",
                "aksesuarlar": "Aksesuarlar",
                "yenilenmis-telefonlar": "Yenilenmiş Telefonlar"
            }
        },
        "bilgisayar-tablet": {
            name: "Bilgisayar-Tablet",
            subcategories: {
                "masaustu-bilgisyarlar": "Masaüstü Bilgisayarlar",
                "dizustu-bilgisayarlar": "Dizüstü Bilgisayarlar",
                "tabletler": "Tabletler",
                "e-kitap-okuyucular": "E-Kitap Okuyucular",
                "modem-network-urunleri": "Modem & Network Ürünleri",
                "veri-depolama-urunleri": "Veri Depolama Ürünleri",
                "yazilim-urunleri": "Yazılım Ürünleri",
                "bilgisayar-parcalari": "Bilgisayar Parçaları (OEM)",
                "tablet-aksesuarlari": "Tablet Aksesuarları",
                "bilgisayar-cevre-birimleri": "Bilgisayar Çevre Birimleri"
            }
        },
        "elektrikli-ev-aletleri": {
            name: "Elektrikli Ev Aletleri",
            subcategories: {
                "utuler": "Ütüler",
                "supurgeler": "Süpürgeler",
                "elektrikli-mutfak-aletleri": "Elektrikli Mutfak Aletleri",
                "mutfak-gerecleri": "Mutfak Gereçleri",
                "saglikli-yasam-urunleri": "Sağlıklı Yaşam Ürünleri",
                "yapi-aletleri": "Yapı Aletleri",
                "hava-temizleme-cihazlari": "Hava Temizleme Cihazları",
                "dikis-makineleri": "Dikiş Makineleri"
            }
        },
        "beyaz-esya": {
            name: "Beyaz Eşya",
            subcategories: {
                "buzdolaplari": "Buzdolapları",
                "camasir-makineleri": "Çamaşır Makineleri",
                "bulasik-makineleri": "Bulaşık Makineleri",
                "kurutma-makineleri": "Kurutma Makineleri",
                "firinlar": "Fırınlar",
                "mikrodalga-firinlar": "Mikrodalga Fırınlar",
                "derin-dondurucular": "Derin Dondurucular",
                "ankastre-setler": "Ankastre Setler",
                "ocak-set-ustu-ocaklar": "Ocak & Set Üstü Ocaklar",
                "davlumbazlar": "Davlumbazlar",
                "su-sebilleri": "Su Sebilleri",
                "isitma-ve-sogutma-sistemleri": "Isıtma ve Soğutma Sistemleri"
            }
        },
        "saglik-kisisel-bakim": {
            name: "Sağlık-Kişisel Bakım",
            subcategories: {
                "cilt-bakim-teknolojileri": "Cilt Bakım Teknolojileri",
                "sac-bakim-urunleri": "Saç Bakım Ürünleri",
                "erkek-bakim-urunleri": "Erkek Bakım Ürünleri",
                "agiz-bakim-urunleri": "Ağız Bakım Ürünleri",
                "epilatorler-ıpl-cihazlari": "Epilatörler & IPL Cihazları",
                "ates-olcerler-tansiyon-aletleri": "Ateş Ölçerler & Tansiyon Aletleri",
                "tartilar": "Tartılar"
            }
        },
        "hobi-oyun": {
            name: "Hobi-Oyun",
            subcategories: {
                "oyun-konsollari": "Oyun Konsolları",
                "dijital-urun-kodlari": "Dijital Ürün Kodları",
                "oyuncu-aksesuarlari": "Oyuncu Aksesuarları",
                "oyunlar": "Oyunlar",
                "fotograf-kameralar": "Fotoğraf & Kameralar",
                "youtuber-yayinci-urunleri": "Youtuber & Yayıncı Ürünleri",
                "dronelar": "Dronelar",
                "scooterlar-bisikletler": "Scooterlar ve Bisikletler",
                "yetiskin-hobi-eglence": "Yetişkin Hobi & Eğlence",
                "muzik-urunleri": "Müzik Ürünleri",
                "odeme-kartlari": "Ödeme Kartları",
            }
        },
        "tv-ses-sistemleri": {
            name: "TV-Ses Sistemleri",
            subcategories: {
                "iphone": "iPhone",
                "samsung": "Samsung"
            }
        },
        "ev-yasam": {
            name: "Ev-Yaşam",
            subcategories: {
                "iphone": "iPhone",
                "samsung": "Samsung"
            }
        },
        "anne-bebek-oyuncak": {
            name: "Anne-Bebek-Oyuncak",
            subcategories: {
                "iphone": "iPhone",
                "samsung": "Samsung"
            }
        }
    };
    return (
        <Row className='menu'>
            {Object.entries(menuItems).map(([key, value]) => (
                <div className="menuItem" key={key}>
                    <MenuItem href={key}>{value.name}</MenuItem>
                    {value.subcategories && (
                        <SubMenu className="subMenu">
                            {Object.entries(value.subcategories).map(([subKey, subValue]) => (
                                <SubMenuItem key={subKey} href={`${key}/${subKey}`}>{subValue}</SubMenuItem>
                            ))}
                        </SubMenu>
                    )}
                </div>
            ))}
        </Row>
    );
}

export default Menu;
