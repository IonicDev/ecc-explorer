const standardsData = {
// government
  "NIST": {
    org: {
      abbr: "NIST",
      name: "National Institute of Standards and Technology",
      type: "Government",
      region: "USA",
      site: "https://csrc.nist.gov/"
    },
    standards: {
      "FIPS186-4": {
        abbr: "FIPS 186-4",
        name: "Digital Signature Standard (DSS)",
        site: "https://csrc.nist.gov/publications/detail/fips/186/4/final",
        file: "https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-4.pdf",
        free: true,
        year: "2013",
        status: {
          state: "active",
          successor: null,
          predecessor: {
            org: "NIST",
            std: "FIPS186-3"
          }
        },
        curves: {
          defined: [ 
            "prime192v1", "secp224r1", "prime256v1", "secp384r1", "secp521r1",
            "sect163k1", "sect163r2", "sect233k1", "sect233r1", "sect283k1", 
            "sect283r1", "sect409k1", "sect409r1", "sect571k1", "sect571r1"
          ],
          recommended: [],
          allowed: [],
        }
      },
      "FIPS186-3": {
        abbr: "FIPS 186-3",
        name: "Digital Signature Standard (DSS)",
        site: "https://csrc.nist.gov/publications/detail/fips/186/3/archive/2009-06-25",
        file: "https://csrc.nist.gov/CSRC/media/Publications/fips/186/3/archive/2009-06-25/documents/fips_186-3.pdf",
        free: true,
        year: "2009",
        status: {
          state: "withdrawn",
          successor: {
            org: "NIST", 
            std: "FIPS186-4"
          },
          predecessor: {
            org: "NIST",
            std: "FIPS186-2"
          }
        },
        curves: {
          defined: [ 
            "prime192v1", "secp224r1", "prime256v1", "secp384r1", "secp521r1",
            "sect163k1", "sect163r2", "sect233k1", "sect233r1", "sect283k1", 
            "sect283r1", "sect409k1", "sect409r1", "sect571k1", "sect571r1"
          ],
          recommended: [ ],
          allowed: [ ],
        }
      },
      "FIPS186-2": {
        abbr: "FIPS 186-2",
        name: "Digital Signature Standard (DSS)",
        site: "https://csrc.nist.gov/publications/detail/fips/186/2/archive/2001-10-05",
        file: "https://csrc.nist.gov/CSRC/media/Publications/fips/186/2/archive/2000-01-27/documents/fips186-2.pdf",
        free: true,
        year: "2001",
        status: {
          state: "withdrawn",
          successor: {
            org: "NIST", 
            std: "FIPS186-3"
          },
          predecessor: {
            org: "NIST",
            std: "FIPS186-1"
          }
        },
        curves: {
          defined: [ 
            "prime192v1", "secp224r1", "prime256v1", "secp384r1", "secp521r1",
            "sect163k1", "sect163r2", "sect233k1", "sect233r1", "sect283k1", 
            "sect283r1", "sect409k1", "sect409r1", "sect571k1", "sect571r1"
          ],
          recommended: [ ],
          allowed: [ ],
        }
      },
      "FIPS186-1": {
        abbr: "FIPS 186-1",
        name: "Digital Signature Standard (DSS)",
        site: "https://csrc.nist.gov/publications/detail/fips/186/1/archive/1998-12-15",
        file: "http://delta.cs.cinvestav.mx/~francisco/cripto/fips1861.pdf",
        free: true,
        year: "1998",
        status: {
          state: "withdrawn",
          successor: {
            org: "NIST", 
            std: "FIPS186-2"
          },
          predecessor: {
            org: "NIST",
            std: "FIPS186"
          }
        },
        curves: {
          defined: [ ],
          recommended: [ ],
          allowed: [ ],
        }
      },
      "FIPS186": {
        abbr: "FIPS 186",
        name: "Digital Signature Standard (DSS)",
        site: "https://csrc.nist.gov/publications/detail/fips/186/archive/1994-05-19",
        file: "",
        free: true,
        year: "1994",
        status: {
          state: "withdrawn",
          successor: {
            org: "NIST", 
            std: "FIPS186-1"
          },
          predecessor: null
        },
        curves: {
          defined: [ ],
          recommended: [ ],
          allowed: [ ]
        }
      }
    }
  },
  "NSA": {
    org: { 
      abbr: 'NSA',
      name: "National Security Agency",
      type: "Government",
      region: 'USA',
      site: 'https://www.nsa.gov/',
    },
    standards: {
      "CNSA": {
        abbr: "CNSA Suite",
        name: "Commercial National Security Algorithm (CNSA) Suite",
        site: "https://www.iad.gov/iad/programs/iad-initiatives/cnsa-suite.cfm",
        file: "https://cryptome.org/2016/01/CNSA-Suite-and-Quantum-Computing-FAQ.pdf",
        free: true,
        year: "2016",
        status: {
          state: "active",
          successor: null,
          predecessor: {
            org: "NSA", 
            std: "SuiteB"
          }
        },
        curves: {
          defined: [ ],
          recommended: [ "secp384r1" ],
          allowed: [ ]
        }
      },
      "SuiteB": {
        abbr: "Suite B",
        name: "NSA Suite B Cryptography",
        site: "http://www.nsa.gov/ia/programs/suiteb_cryptography/",
        file: "https://csrc.nist.gov/CSRC/media/Events/ISPAB-MARCH-2006-MEETING/documents/E_Barker-March2006-ISPAB.pdf",
        free: true,
        year: "2009",
        status: {
          state: "withdrawn",
          successor: {
            org: "NSA", 
            std: "CNSA"
          },
          predecessor: null
        },
        curves: {
          defined: [ ],
          recommended: [ "secp384r1" ],
          allowed: [ "prime256v1" ]
        }
      }
    }
  },
  "BSI": {
    org: {
      abbr: "BSI",
      name: "Federal Office for Information Security",
      alt: "Bundesamt für Sicherheit in der Informationstechnik",
      type: "Government",
      region: 'Germany',
      site: "https://www.bsi.bund.de/",
    },
    standards : {
      "TR-03111v2.10": {
        abbr: "BSI TR-03111 v2.10",
        name: "Elliptic Curve Cryptography",
        site: "https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03111/BSI-TR-03111_pdf.html",
        file: "https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03111/BSI-TR-03111_pdf.pdf?__blob=publicationFile&v=2",
        free: true,
        year: "2018",
        status: {
          state: "active",
          successor: null,
          predecessor: {
            org: "BSI", 
            std: "TR-03111v2.00"
          }
        },
        curves: {
          defined: [ ],
          recommended: [ 
            'brainpoolP160r1', 'brainpoolP160t1', 'brainpoolP192r1', 'brainpoolP192t1',
            'brainpoolP224r1', 'brainpoolP224t1', 'brainpoolP256r1', 'brainpoolP256t1',
            'brainpoolP320r1', 'brainpoolP320t1', 'brainpoolP384r1', 'brainpoolP384t1',
            'brainpoolP512r1', 'brainpoolP512t1'
          ],
          allowed: [  // X9.62 allowed
            'prime192v1', 'prime192v2', 'prime192v3', 'prime239v1', 'prime239v2', 
            'prime239v3', 'prime256v1', 'c2pnb163v1', 'c2pnb163v2', 'c2pnb163v3',
            'c2pnb176v1', 'c2tnb191v1', 'c2tnb191v2', 'c2tnb191v3', 'c2pnb208w1',
            'c2tnb239v1', 'c2tnb239v2', 'c2tnb239v3', 'c2pnb272w1', 'c2pnb304w1',
            'c2tnb359v1', 'c2pnb368w1', 'c2tnb431r1'
          ],
        },
      }
    }
  },
  "ANSSI": {
    org: {
      abbr: 'ANSSI',
      name: 'National Cybersecurity Agency of France',
      alt: "Agence Nationale de la Sécurité des Systèmes d’Information",
      type: 'Government',
      region: 'France',
      site: 'http://www.ssi.gouv.fr/en/',
    },
    standards: {
      "SDE-NT-35-EN": {
        abbr: "SDE-NT-35-EN",
        name: "Security Recommendations for TLS",
        site: "https://www.ssi.gouv.fr/en/publications/",
        file: "http://www.ssi.gouv.fr/uploads/2017/02/security-recommendations-for-tls_v1.1.pdf",
        free: true,
        year: "2017",
        status: {
          state: "active",
          successor: null,
          predecessor: null
        },
        curves: {
          defined: [ ],
          recommended: [ 
            'secp256r1', 'secp384r1', 'secp521r1', 'brainpoolP256r1', 'brainpoolP384r1', 'brainpoolP512r1'
          ],
          allowed: [ ],
        }
      },
      "RGS-B1v1.20": {
        abbr: "RGS B1 v1.20",
        name: "Référentiel Général de Sécurité",
        site: "https://www.ssi.gouv.fr/entreprise/reglementation/confiance-numerique/le-referentiel-general-de-securite-rgs/",
        file: "https://www.ssi.gouv.fr/uploads/2015/09/RGS_B_1.pdf",
        free: true,
        year: "2010",
        status: {
          state: "active",
          successor: null,
          predecessor: "RGS B1 v1.10"
        },
        curves: {
          defined: [ ],
          recommended: [
            // GF(2^n) rules and recommendations
            // ---------------------------------
            // Rule EC2-1: Up to 2020, use ec with subgroup order a multiple of prime with least 200-bits
            // Rule EC2-2: After 2020, use ec with subgroup order a multiple of prime with least 256-bits
            // Rule EC2-3: Make sure 'n' is prime in GF(2^n)
            // Rule EC2-4: If special curves are used, check that they are secure
            // Recommendation EC2-1: Use a prime order subgroup instead of a multiple of a prime 
            'secp256r1', 'secp384r1', 'secp521r1', 'sect283r1', 'sect409r1', 'sect571r1'
          ],
          allowed: [
            'prime239v1', 'prime239v2', 'prime239v3', 'secp224k1', 'secp224r1',
            'secp256k1', 'sect233k1', 'sect233r1', 'sect239k1', 'sect283k1', 
            'sect283r1', 'sect409k1', 'sect571k1', 'c2pnb208w1', 'c2tnb239v1', 
            'c2tnb239v2', 'c2tnb239v3', 'c2pnb272w1', 'c2pnb304w1', 'c2tnb359v1', 
            'c2pnb368w1', 'c2tnb431r1', 'wap-wsg-idm-ecid-wtls10', 
            'wap-wsg-idm-ecid-wtls11', 'wap-wsg-idm-ecid-wtls12'
          ],
        }
      },
      "FRP256V1": {
        abbr: "FRP256V1",
        name: "Avis relatif aux paramètres de courbes elliptiques définis par l'Etat français",
        site: "https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000024668816",
        file: "https://www.legifrance.gouv.fr/jo_pdf.do?id=JORFTEXT000024668816",
        free: true,
        year: '2011',
        status: {
          state: "active",
          successor: null,
          predecessor: null
        },
        curves: {
          defined: [ 'frp256v1' ],
          recommended: [ ],
          allowed: [ ],
        }
      }
    }
  },
  "OSCCA": {
    org: {
      abbr: 'OSCCA',
      name: "Office of the State Commercial Cryptography Administration",
      alt: '国家密码管理局',
      type: 'Government',
      region: 'China',
      site: 'http://www.oscca.gov.cn/',
    },
    standards: {
      // http://gmssl.org/
      // https://zh.wikipedia.org/wiki/SM2
      "GBT32918.5": {
        abbr: "GB/T 32918.5-2017",
        name: "Public Key Cryptographic Algorithm SM2 Based On Elliptic Curves - Part 5: Parameter Definition",
        site: 'https://tools.ietf.org/html/draft-openpgp-oscca-02',
        file: 'http://www.sca.gov.cn/sca/xwdt/2010-12/17/1002386/files/b965ce832cc34bc191cb1cde446b860d.pdf',
        free: true,
        year: '2017',
        status: {
          state: "active",
          successor: null,
          predecessor: {
            org: "OSCCA",
            std: "GMT0003.1"
          }
        },
        curves: {
          defined: [ 'sm2p256v1' ],
          recommended: [ ],
          allowed: [ ],
        }
      },
      "GMT0003.1": {
        abbr: "GM/T 0003.1-2012",
        name: "Public Key Cryptographic Algorithm SM2 Based on Elliptic Curves",
        site: "http://www.gmbz.org.cn/main/viewfile/20180108015515787986.html",
        file: "http://www.sca.gov.cn/sca/xwdt/2010-12/17/1002386/files/b791a9f908bb4803875ab6aeeb7b4e03.pdf",
        free: true,
        year: '2012',
        status: {
          state: "withdrawn",
          successor: {
            org: "OSCCA",
            std: "GMT0003.1"
          },
          predecessor: null
        },
        curves: {
          defined: [ 'wapip192v1', 'sm2p192test', 'sm2b193test', 'sm2b257test' ],
          recommend: [ ],
          allow: [ ],
        }
      }
    }
  },
  "GOST": {
    org: { 
      abbr: "GOST",
      name: "Federal Agency on Technical Regulation and Metrology",
      alt: 'Госстандарт',
      type: 'Government',
      region: 'Russia',
      site: "http://www.gost.ru/"
    },
    standards: {
    // https://ru.wikipedia.org/wiki/%D0%93%D0%9E%D0%A1%D0%A2_%D0%A0_34.10-2012
    // https://ru.wikipedia.org/wiki/%D0%93%D0%9E%D0%A1%D0%A2_28147-89
      "GOSTR34.10-2012": {
        abbr: "GOST R 34.10-2012",
        name: "	Information technology. Cryptographic data security. Formation and verification processes of [electronic] digital signature",
        site: "http://protect.gost.ru/document.aspx?control=7&id=180151",
        file: "https://tools.ietf.org/html/rfc7836",
        free: true,
        year: "2012",
        status: {
          state: "active",
          successor: null,
          predecessor: {
            org: "GOST",
            std: "GOSTR34.10-2001"
          }
        },
        curves: {
          defined: [
            'id-tc26-gost-3410-12-256-paramSetTest', 'id-tc26-gost-3410-12-256-paramSetA', 'id-tc26-gost-3410-12-256-paramSetB',
            'id-tc26-gost-3410-12-512-paramSetTest', 'id-tc26-gost-3410-12-512-paramSetA', 'id-tc26-gost-3410-12-512-paramSetB',
            'id-tc26-gost-3410-12-512-paramSetC', 'id-tc26-gost-3410-12-512-paramSetD', 'id-tc26-gost-28147-param-Z'
          ],
          recommended: [],
          allowed: [],
        }
      },
      "GOSTR34.10-2001": {
        abbr: "GOST R 34.10-2012",
        name: "	Information technology. Cryptographic data security. Formation and verification processes of [electronic] digital signature",
        site: "http://protect.gost.ru/document.aspx?control=7&id=180151",
        file: "https://tools.ietf.org/html/rfc4357",
        free: true,
        year: "2012",
        status: {
          state: "withdrawn",
          successor: {
            org: "GOST",
            std: "GOSTR34.10-2012"
          },
          predecessor: {
            org: "GOST",
            std: "GOSTR34.10-94"
          }
        },
        curves: {
          defined: [
            'id-GostR3410-2001-CryptoPro-TestParamSet', 'id-GostR3410-2001-CryptoPro-A-ParamSet', 
            'id-GostR3410-2001-CryptoPro-B-ParamSet', 'id-GostR3410-2001-CryptoPro-C-ParamSet',
            'id-GostR3410-2001-CryptoPro-XchA-ParamSet', 'id-GostR3410-2001-CryptoPro-XchB-ParamSet',
            'id-GostR3410-2001-ParamSet-cc'
          ],
          recommended: [],
          allowed: [],
        }
      },
      "GOSTR34.10-94": {
        abbr: "GOST R 34.10-94",
        name: "	Information technology. Cryptographic data security. Formation and verification processes of [electronic] digital signature",
        site: "http://protect.gost.ru/document.aspx?control=7&id=180151",
        file: "https://tools.ietf.org/html/rfc4491",
        free: true,
        year: "1994",
        status: {
          state: "withdrawn",
          successor: {
            org: "GOST",
            std: "GOSTR34.10-2001"
          },
          predecessor: null
        },
        curves: {
          defined: [
            'id-GostR3410-94-TestParamSet', 'id-GostR3410-94-CryptoPro-A-ParamSet', 'id-GostR3410-94-CryptoPro-B-ParamSet',
            'id-GostR3410-94-CryptoPro-C-ParamSet', 'id-GostR3410-94-CryptoPro-D-ParamSet', 'id-GostR3410-94-CryptoPro-XchA-ParamSet',
            'id-GostR3410-94-CryptoPro-XchB-ParamSet', 'id-GostR3410-94-CryptoPro-XchC-ParamSet'
          ],
          recommended: [],
          allowed: [],
        }
      },
    },
  },
  "ANSI": {
    org: {
      abbr: "ANSI",
      name: "American National Standards Institute",
      type: 'Industry',
      region: 'USA',
      site: "https://www.ansi.org/",
    },
    standards: {
      "X9.62-2005": {
        abbr: "ANS X9.62–2005",
        name: "Public Key Cryptography For The Financial Services Industry: The Elliptic Curve Digital Signature Algorithm (ECDSA)",
        site: "https://infostore.saiglobal.com/en-us/Standards/ANSI-X9-62-2005-205647/",
        file: "",
        year: "2005",
        status: {
          state: "withdrawn",
          successor: {
            org: "ANSI",
            std: "X9.63-2011"
          },
          predecessor: {
            org: "ANSI",
            std: "X9.62-1998"
          }
        },
        curves: {
          defined: [],
          recommended: [],
          allowed: [],
        }
      },
      "X9.62-1998": {
        abbr: "ANS X9.62-1998",
        name: "Public Key Cryptography For The Financial Services Industry: The Elliptic Curve Digital Signature Algorithm (ECDSA)",
        site: "https://infostore.saiglobal.com/en-us/Standards/ANSI-X9-62-1998-986434/",
        file: "http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.202.2977&rep=rep1&type=pdf",
        free: false,
        year: "1998",
        status: {
          state: "withdrawn",
          successor: {
            org: "ANSI",
            std: "X9.62-2005"
          },
          predecessor: null
        },
        curves: {
          defined: [
            'prime192v1', 'prime192v2', 'prime192v3', 'prime239v1', 'prime239v2', 'prime239v3', 'prime256v1',
            'c2pnb163v1', 'c2pnb163v2', 'c2pnb163v3', 'c2pnb176w1', 'c2tnb191v1', 'c2tnb191v2', 'c2tnb191v3',
            'c2onb191v4', 'c2onb191v5', 'c2pnb208w1', 'c2tnb239v1', 'c2tnb239v2', 'c2tnb239v3', 'c2tnb239v4',
            'c2onb239v5', 'c2pnb272w1', 'c2pnb304w1', 'c2tnb359v1', 'c2pnb368w1', 'c2tnb431r1'
          ],
          recommended: [],
          allowed: [],
        }
      },
      "X9.63-2011": {
        abbr: "ANSI X9.63-2011 (R2017)",
        name: "Public Key Cryptography for the Financial Services Industry - Key Agreement and Key Transport Using Elliptic Curve Cryptography",
        site: "https://webstore.ansi.org/RecordDetail.aspx?sku=ANSI+X9.63-2011+(R2017)",
        file: "",
        free: false,
        year: "2011",
        status: {
          state: "active",
          successor: null,
          predecessor: {
            org: "ANSI",
            std: "X9.63-2001"
          },            
        },
        curves: {
          defined: [],
          recommended: [],
          allowed: [],
        }
      },
      "X9.63-2001": {
        abbr: "ANSI X9.63-2001",
        name: "Public Key Cryptography for the Financial Services Industry - Key Agreement and Key Transport Using Elliptic Curve Cryptography",
        site: "",
        file: "",
        free: false,
        year: "2011",
        status: {
          state: "withdrawn",
          successor: {
            org: "ANSI",
            std: "X9.63-2001"
          },
          predecessor: null
        },
        curves: {
          defined: [],
          recommended: [],
          allowed: [],
        }
      },
      "X9.92-2009": {
        abbr: "ANSI X9.92-1-2009 (R2017)",
        name: "Public Key Cryptography for the Financial Services Industry - Digital Signature Algorithms Giving Partial Message Recovery - Part 1: Elliptic Curve Pintsov-Vanstone Signatures (ECPVS)",
        site: "https://webstore.ansi.org/RecordDetail.aspx?sku=ANSI+X9.92-1-2009+(R2017)",
        file: "",
        free: false,
        year: "2009",
        status: {
          state: "active",
          successor: null,
          predecessor: {
            org: "ANSI",
            std: "X9.92-2002"
          }
        },
        curves: {
          defined: [],
          recommended: [],
          allowed: [],
        }
      },
      "X9.92-2002": {
        abbr: "ANSI X9.92-2002",
        name: "Public Key Cryptography for the Financial Services Industry - Digital Signature Algorithms Giving Partial Message Recovery - Part 1: Elliptic Curve Pintsov-Vanstone Signatures (ECPVS)",
        site: "",
        file: "",
        free: false,
        year: "2002",
        status: {
          state: "withdrawn",
          successor: {
            org: "ANSI",
            std: "X9.92-2009"
          },
          predecessor: null
        },
        curves: {
          defined: [],
          recommended: [],
          allowed: [],
        }
      },
    }
  },
  // ISO 11770-3 [35] and ISO 9798-3  ISO 15946-2
  // IEEE Standard P1363-2000 & P1363A (https://standards.ieee.org/findstds/standard/1363-2000.html)
  // ecc brainpool https://tools.ietf.org/html/rfc5639
  "SECG": {
    org: {
      abbr: "SECG",
      name: "Standards for Efficient Cryptography Group",
      type: 'Industry',
      region: 'International',
      site: "http://www.secg.org/",
    },
    standards: {
      "SEC2-2": {
        abbr: "SEC 2 v2.0",
        name: "Elliptic Curve Cryptography",
        site: "http://www.secg.org/",
        file: "http://www.secg.org/sec2-v2.pdf",
        free: true,
        year: "2010",
        status: {
          state: "active",
          successor: null,
          predecessor: {
            org: "SECG",
            std: "SEC2-1"
          }
        },
        curves: {
          defined: [ 
            'secp192k1', 'secp192r1', 'secp224k1', 'secp224r1', 'secp256k1',
            'secp256r1', 'secp384r1', 'secp521r1', 'sect163k1', 'sect163r1',
            'sect163r2', 'sect233k1', 'sect233r1', 'sect239k1', 'sect283k1',
            'sect283r1', 'sect409k1', 'sect409r1', 'sect571k1', 'sect571r1'
          ],
          recommended: [],
          allowed: [],
        }
      },
    }
  }
};

const curveData = {
  "brainpoolP160r1" : {
    alias: null,
    oid: '1.3.36.3.3.2.8.1.1.1',
    standard: 'brainpool10',
    generated: 'random',
    form: 'short-weierstrass',
    field: 'prime',
    bitsize: '160',
    params: {
      hex: {
        p: 'e95e4a5f737059dc60dfc7ad95b3d8139515620f',
        a: '340e7be2a280eb74e2be61bada745d97e8f7c300',
        b: '1e589a8595423412134faa2dbdec95c8d8675e58',
        x: 'bed5af16ea3f6a4f62938c4631eb5af7bdbcdbc3',
        y: '1667cb477a1a8ec338f94741669c976316da6321',
        q: 'e95e4a5f737059dc60df5991d45029409e60fc09',
        h: '1',
        s: '2b7e151628aed2a6abf7158809cf4f3c762e7160'
      },
      dec: {
        p: '1332297598440044874827085558802491743757193798159',
        a: '297190522446607939568481567949428902921613329152',
        b: '173245649450172891208247283053495198538671808088',
        x: '1089473557631435284577962539738532515920566082499',
        y: '127912481829969033206777085249718746721365418785',
        q: '1332297598440044874827085038830181364212942568457',
        h: '1'
      }
    },
    testvec: {
      mult: {
        hex: {
          '1': { x: 'bed5af16ea3f6a4f62938c4631eb5af7bdbcdbc3', y: '1667cb477a1a8ec338f94741669c976316da6321'},
          '2': { x: 'c750db2af5a6b9543147a858a3225161c2a2459d', y: '115e0a63d46bb965a09d3b195b44bce791641ef7'},
          '3': { x: '8a7c28a550682cda519ce7bc73778ea9ac7812b5', y: '868562a3f2101faf2fb5ee7a0f366dcbac9147fe'},
          '10': { x: 'ba6b0d8d37967ab7bb598d7688f651f45b359509', y: '32d02006456d93277eeb1759adc752e963b673e0'},
          '100': { x: '3a2dca6b8c80f7f8a5830345f7ce15fcbcd08ce4', y: 'd6d89a19f50b382644a6da377a2bedeaafc9a144'}
        },
        dec: {
          '1': { x: '1089473557631435284577962539738532515920566082499', y: '127912481829969033206777085249718746721365418785'},
          '2': { x: '1137892315218831520509164456451412339610395755933', y: '99150018245836464430436315677324551390180417271'},
          '3': { x: '790609559523214612237537473869870562329948066485', y: '767979355193603084106284532719999252884312115198'},
          '10': { x: '1064259643622896650226696779615061681810988963081', y: '290090883269616040388748981403185923287621727200'},
          '100': { x: '332142631520449609419890157847142361049055923428', y: '1226554410043996049965512616514658667723965964612'}
        }
      }
    }
  },
  "brainpoolP192r1" : {
    alias: null,
    oid: '1.3.36.3.3.2.8.1.1.3',
    standard: 'brainpool10',
    generated: 'random',
    form: 'short-weierstrass',
    field: 'prime',
    bitsize: '192',
    params: {
      hex: {
        p: 'c302f41d932a36cda7a3463093d18db78fce476de1a86297',
        a: '6a91174076b1e0e19c39c031fe8685c1cae040e5c69a28ef',
        b: '469a28ef7c28cca3dc721d044f4496bcca7ef4146fbf25c9',
        x: 'c0a0647eaab6a48753b033c56cb0f0900a2f5c4853375fd6',
        y: '14b690866abd5bb88b5f4828c1490002e6773fa2fa299b8f',
        q: 'c302f41d932a36cda7a3462f9e9e916b5be8f1029ac4acc1',
        h: '1',
        s: 'f38b4da56a784d9045190cfef324e7738926cfbe'
      },
      dec: {
        p: '4781668983906166242955001894344923773259119655253013193367',
        a: '2613009377683017747869391908421543348309181741502784219375',
        b: '1731160591135112004210203499537764623771657619977468323273',
        x: '4723188856514392935399337699153522173525168621081341681622',
        y: '507884783101387741749746950209061101579755255809652136847',
        q: '4781668983906166242955001894269038308119863659119834868929',
        h: '1'
      }
    },
    testvec: {
      mult: {
        hex: {
          '1': { x: 'c0a0647eaab6a48753b033c56cb0f0900a2f5c4853375fd6', y: '14b690866abd5bb88b5f4828c1490002e6773fa2fa299b8f'},
          '2': { x: '1228a61ba5548cb176d68c4263bfa0f4cf2a38d70c9e4cdb', y: '7add94a63a87407f44bc1cb3cfb8ed58ca3cd2d28107a44e'},
          '3': { x: '15372d94937774620bdbff366d5677d8464866c7b0b20626', y: '240f7e24234c9ecc309f54b7d88002eaf78341ab1d1e4919'},
          '10': { x: '18ebffd8979c849c53a794a1fa40ad5d3c35303cdc70b110', y: '56ce718f561292801871e6201cbe08de140fe0bdd20ea973'},
          '100': { x: '346f035aadbc621b1c93fc6f4fd4901303790761bc1f1553', y: '4b8f5df64e3aaeb237f37dd0b74853015693d400d0256355'}
        },
        dec: {
          '1': { x: '4723188856514392935399337699153522173525168621081341681622', y: '507884783101387741749746950209061101579755255809652136847'},
          '2': { x: '445252102999533931228472971787923157067784235220903808219', y: '3012654506745869815354326184153517047588057400912292324430'},
          '3': { x: '520203508795655096712594413571917843839669679278997505574', y: '884201341120709809573486489350830006999934879004046018841'},
          '10': { x: '611082539325755763696632978172362711861693180420761366800', y: '2128487232125597616517989948774147084151602570688071641459'},
          '100': { x: '1285669232775437953703189563570386181678696352358923703635', y: '1852726483342549810768548147555026156296733180310187238229'}
        }
      }
    }          
  },
  "prime256v1" : {
    alias: [ 'secp256r1', 'nistP256' ],
    oid: '1.2.840.10045.3.1.7',
    standard: 'fips186',
    generated: 'random',
    form: 'short-weierstrass',
    field: 'prime',
    bitsize: '256',
    params: {
      hex: {
        p: 'ffffffff00000001000000000000000000000000ffffffffffffffffffffffff',
        a: 'ffffffff00000001000000000000000000000000fffffffffffffffffffffffc',
        b: '5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b',
        x: '6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296',
        y: '4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5',
        q: 'ffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551',
        h: '1',
        s: 'c49d360886e704936a6678e1139d26b7819f7e90'
      },
      dec: {
        p: '115792089210356248762697446949407573530086143415290314195533631308867097853951',
        a: '115792089210356248762697446949407573530086143415290314195533631308867097853948',
        b: '41058363725152142129326129780047268409114441015993725554835256314039467401291',
        x: '48439561293906451759052585252797914202762949526041747995844080717082404635286',
        y: '36134250956749795798585127919587881956611106672985015071877198253568414405109',
        q: '115792089210356248762697446949407573529996955224135760342422259061068512044369',
        h: '1'
      }
    },
    testvec: {
      mult: {
        hex: {
          '1': { x: '6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296', y: '4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5'},
          '2': { x: '1228a61ba5548cb176d68c4263bfa0f4cf2a38d70c9e4cdb', y: '7add94a63a87407f44bc1cb3cfb8ed58ca3cd2d28107a44e'},
          '3': { x: '15372d94937774620bdbff366d5677d8464866c7b0b20626', y: '240f7e24234c9ecc309f54b7d88002eaf78341ab1d1e4919'},
          '10': { x: '18ebffd8979c849c53a794a1fa40ad5d3c35303cdc70b110', y: '56ce718f561292801871e6201cbe08de140fe0bdd20ea973'},
          '100': { x: '346f035aadbc621b1c93fc6f4fd4901303790761bc1f1553', y: '4b8f5df64e3aaeb237f37dd0b74853015693d400d0256355'}
        },
        dec: {
          '1': { x: '48439561293906451759052585252797914202762949526041747995844080717082404635286', y: '36134250956749795798585127919587881956611106672985015071877198253568414405109'},
          '2': { x: '445252102999533931228472971787923157067784235220903808219', y: '3012654506745869815354326184153517047588057400912292324430'},
          '3': { x: '520203508795655096712594413571917843839669679278997505574', y: '884201341120709809573486489350830006999934879004046018841'},
          '10': { x: '611082539325755763696632978172362711861693180420761366800', y: '2128487232125597616517989948774147084151602570688071641459'},
          '100': { x: '1285669232775437953703189563570386181678696352358923703635', y: '1852726483342549810768548147555026156296733180310187238229'}
        }
      }
    }          
  },
};