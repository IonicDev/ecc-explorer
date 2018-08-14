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
