{
    "name": "17-modern-js-modules-tooling",
    "version": "1.0.0",
    "lockfileVersion": 1,
    "requires": true,
    "dependencies": {
      "@babel/code-frame": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.10.4.tgz",
        "integrity": "sha512-vG6SvB6oYEhvgisZNFRmRCUkLz11c7rp+tbNTynGqc6mS1d5ATd/sGyV6W0KZZnXRKMTzZDRgQT3Ou9jhpAfUg==",
        "dev": true,
        "requires": {
          "@babel/highlight": "^7.10.4"
        }
      },
      "@babel/compat-data": {
        "version": "7.11.0",
        "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.11.0.tgz",
        "integrity": "sha512-TPSvJfv73ng0pfnEOh17bYMPQbI95+nGWc71Ss4vZdRBHTDqmM9Z8ZV4rYz8Ks7sfzc95n30k6ODIq5UGnXcYQ==",
        "dev": true,
        "requires": {
          "browserslist": "^4.12.0",
          "invariant": "^2.2.4",
          "semver": "^5.5.0"
        }
      },
      "@babel/core": {
        "version": "7.11.4",
        "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.11.4.tgz",
        "integrity": "sha512-5deljj5HlqRXN+5oJTY7Zs37iH3z3b++KjiKtIsJy1NrjOOVSEaJHEetLBhyu0aQOSNNZ/0IuEAan9GzRuDXHg==",
        "dev": true,
        "requires": {
          "@babel/code-frame": "^7.10.4",
          "@babel/generator": "^7.11.4",
          "@babel/helper-module-transforms": "^7.11.0",
          "@babel/helpers": "^7.10.4",
          "@babel/parser": "^7.11.4",
          "@babel/template": "^7.10.4",
          "@babel/traverse": "^7.11.0",
          "@babel/types": "^7.11.0",
          "convert-source-map": "^1.7.0",
          "debug": "^4.1.0",
          "gensync": "^1.0.0-beta.1",
          "json5": "^2.1.2",
          "lodash": "^4.17.19",
          "resolve": "^1.3.2",
          "semver": "^5.4.1",
          "source-map": "^0.5.0"
        },
        "dependencies": {
          "json5": {
            "version": "2.1.3",
            "resolved": "https://registry.npmjs.org/json5/-/json5-2.1.3.tgz",
            "integrity": "sha512-KXPvOm8K9IJKFM0bmdn8QXh7udDh1g/giieX0NLCaMnb4hEiVFqnop2ImTXCc5e0/oHz3LTqmHGtExn5hfMkOA==",
            "dev": true,
            "requires": {
              "minimist": "^1.2.5"
            }
          },
          "source-map": {
            "version": "0.5.7",
            "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
            "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
            "dev": true
          }
        }
      },
      "@babel/generator": {
        "version": "7.11.4",
        "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.11.4.tgz",
        "integrity": "sha512-Rn26vueFx0eOoz7iifCN2UHT6rGtnkSGWSoDRIy8jZN3B91PzeSULbswfLoOWuTuAcNwpG/mxy+uCTDnZ9Mp1g==",
        "dev": true,
        "requires": {
          "@babel/types": "^7.11.0",
          "jsesc": "^2.5.1",
          "source-map": "^0.5.0"
        },
        "dependencies": {
          "source-map": {
            "version": "0.5.7",
            "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
            "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
            "dev": true
          }
        }
      },
      "@babel/helper-annotate-as-pure": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.10.4.tgz",
        "integrity": "sha512-XQlqKQP4vXFB7BN8fEEerrmYvHp3fK/rBkRFz9jaJbzK0B1DSfej9Kc7ZzE8Z/OnId1jpJdNAZ3BFQjWG68rcA==",
        "dev": true,
        "requires": {
          "@babel/types": "^7.10.4"
        }
      },
      "@babel/helper-builder-binary-assignment-operator-visitor": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/helper-builder-binary-assignment-operator-visitor/-/helper-builder-binary-assignment-operator-visitor-7.10.4.tgz",
        "integrity": "sha512-L0zGlFrGWZK4PbT8AszSfLTM5sDU1+Az/En9VrdT8/LmEiJt4zXt+Jve9DCAnQcbqDhCI+29y/L93mrDzddCcg==",
        "dev": true,
        "requires": {
          "@babel/helper-explode-assignable-expression": "^7.10.4",
          "@babel/types": "^7.10.4"
        }
      },
      "@babel/helper-builder-react-jsx": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/helper-builder-react-jsx/-/helper-builder-react-jsx-7.10.4.tgz",
        "integrity": "sha512-5nPcIZ7+KKDxT1427oBivl9V9YTal7qk0diccnh7RrcgrT/pGFOjgGw1dgryyx1GvHEpXVfoDF6Ak3rTiWh8Rg==",
        "dev": true,
        "requires": {
          "@babel/helper-annotate-as-pure": "^7.10.4",
          "@babel/types": "^7.10.4"
        }
      },
      "@babel/helper-builder-react-jsx-experimental": {
        "version": "7.10.5",
        "resolved": "https://registry.npmjs.org/@babel/helper-builder-react-jsx-experimental/-/helper-builder-react-jsx-experimental-7.10.5.tgz",
        "integrity": "sha512-Buewnx6M4ttG+NLkKyt7baQn7ScC/Td+e99G914fRU8fGIUivDDgVIQeDHFa5e4CRSJQt58WpNHhsAZgtzVhsg==",
        "dev": true,
        "requires": {
          "@babel/helper-annotate-as-pure": "^7.10.4",
          "@babel/helper-module-imports": "^7.10.4",
          "@babel/types": "^7.10.5"
        }
      },
      "@babel/helper-compilation-targets": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.10.4.tgz",
        "integrity": "sha512-a3rYhlsGV0UHNDvrtOXBg8/OpfV0OKTkxKPzIplS1zpx7CygDcWWxckxZeDd3gzPzC4kUT0A4nVFDK0wGMh4MQ==",
        "dev": true,
        "requires": {
          "@babel/compat-data": "^7.10.4",
          "browserslist": "^4.12.0",
          "invariant": "^2.2.4",
          "levenary": "^1.1.1",
          "semver": "^5.5.0"
        }
      },
      "@babel/helper-create-class-features-plugin": {
        "version": "7.10.5",
        "resolved": "https://registry.npmjs.org/@babel/helper-create-class-features-plugin/-/helper-create-class-features-plugin-7.10.5.tgz",
        "integrity": "sha512-0nkdeijB7VlZoLT3r/mY3bUkw3T8WG/hNw+FATs/6+pG2039IJWjTYL0VTISqsNHMUTEnwbVnc89WIJX9Qed0A==",
        "dev": true,
        "requires": {
          "@babel/helper-function-name": "^7.10.4",
          "@babel/helper-member-expression-to-functions": "^7.10.5",
          "@babel/helper-optimise-call-expression": "^7.10.4",
          "@babel/helper-plugin-utils": "^7.10.4",
          "@babel/helper-replace-supers": "^7.10.4",
          "@babel/helper-split-export-declaration": "^7.10.4"
        }
      },
      "@babel/helper-create-regexp-features-plugin": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/helper-create-regexp-features-plugin/-/helper-create-regexp-features-plugin-7.10.4.tgz",
        "integrity": "sha512-2/hu58IEPKeoLF45DBwx3XFqsbCXmkdAay4spVr2x0jYgRxrSNp+ePwvSsy9g6YSaNDcKIQVPXk1Ov8S2edk2g==",
        "dev": true,
        "requires": {
          "@babel/helper-annotate-as-pure": "^7.10.4",
          "@babel/helper-regex": "^7.10.4",
          "regexpu-core": "^4.7.0"
        }
      },
      "@babel/helper-define-map": {
        "version": "7.10.5",
        "resolved": "https://registry.npmjs.org/@babel/helper-define-map/-/helper-define-map-7.10.5.tgz",
        "integrity": "sha512-fMw4kgFB720aQFXSVaXr79pjjcW5puTCM16+rECJ/plGS+zByelE8l9nCpV1GibxTnFVmUuYG9U8wYfQHdzOEQ==",
        "dev": true,
        "requires": {
          "@babel/helper-function-name": "^7.10.4",
          "@babel/types": "^7.10.5",
          "lodash": "^4.17.19"
        }
      },
      "@babel/helper-explode-assignable-expression": {
        "version": "7.11.4",
        "resolved": "https://registry.npmjs.org/@babel/helper-explode-assignable-expression/-/helper-explode-assignable-expression-7.11.4.tgz",
        "integrity": "sha512-ux9hm3zR4WV1Y3xXxXkdG/0gxF9nvI0YVmKVhvK9AfMoaQkemL3sJpXw+Xbz65azo8qJiEz2XVDUpK3KYhH3ZQ==",
        "dev": true,
        "requires": {
          "@babel/types": "^7.10.4"
        }
      },
      "@babel/helper-function-name": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.10.4.tgz",
        "integrity": "sha512-YdaSyz1n8gY44EmN7x44zBn9zQ1Ry2Y+3GTA+3vH6Mizke1Vw0aWDM66FOYEPw8//qKkmqOckrGgTYa+6sceqQ==",
        "dev": true,
        "requires": {
          "@babel/helper-get-function-arity": "^7.10.4",
          "@babel/template": "^7.10.4",
          "@babel/types": "^7.10.4"
        }
      },
      "@babel/helper-get-function-arity": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/helper-get-function-arity/-/helper-get-function-arity-7.10.4.tgz",
        "integrity": "sha512-EkN3YDB+SRDgiIUnNgcmiD361ti+AVbL3f3Henf6dqqUyr5dMsorno0lJWJuLhDhkI5sYEpgj6y9kB8AOU1I2A==",
        "dev": true,
        "requires": {
          "@babel/types": "^7.10.4"
        }
      },
      "@babel/helper-hoist-variables": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/helper-hoist-variables/-/helper-hoist-variables-7.10.4.tgz",
        "integrity": "sha512-wljroF5PgCk2juF69kanHVs6vrLwIPNp6DLD+Lrl3hoQ3PpPPikaDRNFA+0t81NOoMt2DL6WW/mdU8k4k6ZzuA==",
        "dev": true,
        "requires": {
          "@babel/types": "^7.10.4"
        }
      },
      "@babel/helper-member-expression-to-functions": {
        "version": "7.11.0",
        "resolved": "https://registry.npmjs.org/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.11.0.tgz",
        "integrity": "sha512-JbFlKHFntRV5qKw3YC0CvQnDZ4XMwgzzBbld7Ly4Mj4cbFy3KywcR8NtNctRToMWJOVvLINJv525Gd6wwVEx/Q==",
        "dev": true,
        "requires": {
          "@babel/types": "^7.11.0"
        }
      },
      "@babel/helper-module-imports": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.10.4.tgz",
        "integrity": "sha512-nEQJHqYavI217oD9+s5MUBzk6x1IlvoS9WTPfgG43CbMEeStE0v+r+TucWdx8KFGowPGvyOkDT9+7DHedIDnVw==",
        "dev": true,
        "requires": {
          "@babel/types": "^7.10.4"
        }
      },
      "@babel/helper-module-transforms": {
        "version": "7.11.0",
        "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.11.0.tgz",
        "integrity": "sha512-02EVu8COMuTRO1TAzdMtpBPbe6aQ1w/8fePD2YgQmxZU4gpNWaL9gK3Jp7dxlkUlUCJOTaSeA+Hrm1BRQwqIhg==",
        "dev": true,
        "requires": {
          "@babel/helper-module-imports": "^7.10.4",
          "@babel/helper-replace-supers": "^7.10.4",
          "@babel/helper-simple-access": "^7.10.4",
          "@babel/helper-split-export-declaration": "^7.11.0",
          "@babel/template": "^7.10.4",
          "@babel/types": "^7.11.0",
          "lodash": "^4.17.19"
        }
      },
      "@babel/helper-optimise-call-expression": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/helper-optimise-call-expression/-/helper-optimise-call-expression-7.10.4.tgz",
        "integrity": "sha512-n3UGKY4VXwXThEiKrgRAoVPBMqeoPgHVqiHZOanAJCG9nQUL2pLRQirUzl0ioKclHGpGqRgIOkgcIJaIWLpygg==",
        "dev": true,
        "requires": {
          "@babel/types": "^7.10.4"
        }
      },
      "@babel/helper-plugin-utils": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.10.4.tgz",
        "integrity": "sha512-O4KCvQA6lLiMU9l2eawBPMf1xPP8xPfB3iEQw150hOVTqj/rfXz0ThTb4HEzqQfs2Bmo5Ay8BzxfzVtBrr9dVg==",
        "dev": true
      },
      "@babel/helper-regex": {
        "version": "7.10.5",
        "resolved": "https://registry.npmjs.org/@babel/helper-regex/-/helper-regex-7.10.5.tgz",
        "integrity": "sha512-68kdUAzDrljqBrio7DYAEgCoJHxppJOERHOgOrDN7WjOzP0ZQ1LsSDRXcemzVZaLvjaJsJEESb6qt+znNuENDg==",
        "dev": true,
        "requires": {
          "lodash": "^4.17.19"
        }
      },
      "@babel/helper-remap-async-to-generator": {
        "version": "7.11.4",
        "resolved": "https://registry.npmjs.org/@babel/helper-remap-async-to-generator/-/helper-remap-async-to-generator-7.11.4.tgz",
        "integrity": "sha512-tR5vJ/vBa9wFy3m5LLv2faapJLnDFxNWff2SAYkSE4rLUdbp7CdObYFgI7wK4T/Mj4UzpjPwzR8Pzmr5m7MHGA==",
        "dev": true,
        "requires": {
          "@babel/helper-annotate-as-pure": "^7.10.4",
          "@babel/helper-wrap-function": "^7.10.4",
          "@babel/template": "^7.10.4",
          "@babel/types": "^7.10.4"
        }
      },
      "@babel/helper-replace-supers": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/helper-replace-supers/-/helper-replace-supers-7.10.4.tgz",
        "integrity": "sha512-sPxZfFXocEymYTdVK1UNmFPBN+Hv5mJkLPsYWwGBxZAxaWfFu+xqp7b6qWD0yjNuNL2VKc6L5M18tOXUP7NU0A==",
        "dev": true,
        "requires": {
          "@babel/helper-member-expression-to-functions": "^7.10.4",
          "@babel/helper-optimise-call-expression": "^7.10.4",
          "@babel/traverse": "^7.10.4",
          "@babel/types": "^7.10.4"
        }
      },
      "@babel/helper-simple-access": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.10.4.tgz",
        "integrity": "sha512-0fMy72ej/VEvF8ULmX6yb5MtHG4uH4Dbd6I/aHDb/JVg0bbivwt9Wg+h3uMvX+QSFtwr5MeItvazbrc4jtRAXw==",
        "dev": true,
        "requires": {
          "@babel/template": "^7.10.4",
          "@babel/types": "^7.10.4"
        }
      },
      "@babel/helper-skip-transparent-expression-wrappers": {
        "version": "7.11.0",
        "resolved": "https://registry.npmjs.org/@babel/helper-skip-transparent-expression-wrappers/-/helper-skip-transparent-expression-wrappers-7.11.0.tgz",
        "integrity": "sha512-0XIdiQln4Elglgjbwo9wuJpL/K7AGCY26kmEt0+pRP0TAj4jjyNq1MjoRvikrTVqKcx4Gysxt4cXvVFXP/JO2Q==",
        "dev": true,
        "requires": {
          "@babel/types": "^7.11.0"
        }
      },
      "@babel/helper-split-export-declaration": {
        "version": "7.11.0",
        "resolved": "https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.11.0.tgz",
        "integrity": "sha512-74Vejvp6mHkGE+m+k5vHY93FX2cAtrw1zXrZXRlG4l410Nm9PxfEiVTn1PjDPV5SnmieiueY4AFg2xqhNFuuZg==",
        "dev": true,
        "requires": {
          "@babel/types": "^7.11.0"
        }
      },
      "@babel/helper-validator-identifier": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.10.4.tgz",
        "integrity": "sha512-3U9y+43hz7ZM+rzG24Qe2mufW5KhvFg/NhnNph+i9mgCtdTCtMJuI1TMkrIUiK7Ix4PYlRF9I5dhqaLYA/ADXw==",
        "dev": true
      },
      "@babel/helper-wrap-function": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/helper-wrap-function/-/helper-wrap-function-7.10.4.tgz",
        "integrity": "sha512-6py45WvEF0MhiLrdxtRjKjufwLL1/ob2qDJgg5JgNdojBAZSAKnAjkyOCNug6n+OBl4VW76XjvgSFTdaMcW0Ug==",
        "dev": true,
        "requires": {
          "@babel/helper-function-name": "^7.10.4",
          "@babel/template": "^7.10.4",
          "@babel/traverse": "^7.10.4",
          "@babel/types": "^7.10.4"
        }
      },
      "@babel/helpers": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.10.4.tgz",
        "integrity": "sha512-L2gX/XeUONeEbI78dXSrJzGdz4GQ+ZTA/aazfUsFaWjSe95kiCuOZ5HsXvkiw3iwF+mFHSRUfJU8t6YavocdXA==",
        "dev": true,
        "requires": {
          "@babel/template": "^7.10.4",
          "@babel/traverse": "^7.10.4",
          "@babel/types": "^7.10.4"
        }
      },
      "@babel/highlight": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.10.4.tgz",
        "integrity": "sha512-i6rgnR/YgPEQzZZnbTHHuZdlE8qyoBNalD6F+q4vAFlcMEcqmkoG+mPqJYJCo63qPf74+Y1UZsl3l6f7/RIkmA==",
        "dev": true,
        "requires": {
          "@babel/helper-validator-identifier": "^7.10.4",
          "chalk": "^2.0.0",
          "js-tokens": "^4.0.0"
        }
      },
      "@babel/parser": {
        "version": "7.11.4",
        "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.11.4.tgz",
        "integrity": "sha512-MggwidiH+E9j5Sh8pbrX5sJvMcsqS5o+7iB42M9/k0CD63MjYbdP4nhSh7uB5wnv2/RVzTZFTxzF/kIa5mrCqA==",
        "dev": true
      },
      "@babel/plugin-proposal-async-generator-functions": {
        "version": "7.10.5",
        "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-async-generator-functions/-/plugin-proposal-async-generator-functions-7.10.5.tgz",
        "integrity": "sha512-cNMCVezQbrRGvXJwm9fu/1sJj9bHdGAgKodZdLqOQIpfoH3raqmRPBM17+lh7CzhiKRRBrGtZL9WcjxSoGYUSg==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4",
          "@babel/helper-remap-async-to-generator": "^7.10.4",
          "@babel/plugin-syntax-async-generators": "^7.8.0"
        }
      },
      "@babel/plugin-proposal-class-properties": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-class-properties/-/plugin-proposal-class-properties-7.10.4.tgz",
        "integrity": "sha512-vhwkEROxzcHGNu2mzUC0OFFNXdZ4M23ib8aRRcJSsW8BZK9pQMD7QB7csl97NBbgGZO7ZyHUyKDnxzOaP4IrCg==",
        "dev": true,
        "requires": {
          "@babel/helper-create-class-features-plugin": "^7.10.4",
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-proposal-dynamic-import": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-dynamic-import/-/plugin-proposal-dynamic-import-7.10.4.tgz",
        "integrity": "sha512-up6oID1LeidOOASNXgv/CFbgBqTuKJ0cJjz6An5tWD+NVBNlp3VNSBxv2ZdU7SYl3NxJC7agAQDApZusV6uFwQ==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4",
          "@babel/plugin-syntax-dynamic-import": "^7.8.0"
        }
      },
      "@babel/plugin-proposal-export-namespace-from": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-export-namespace-from/-/plugin-proposal-export-namespace-from-7.10.4.tgz",
        "integrity": "sha512-aNdf0LY6/3WXkhh0Fdb6Zk9j1NMD8ovj3F6r0+3j837Pn1S1PdNtcwJ5EG9WkVPNHPxyJDaxMaAOVq4eki0qbg==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4",
          "@babel/plugin-syntax-export-namespace-from": "^7.8.3"
        }
      },
      "@babel/plugin-proposal-json-strings": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-json-strings/-/plugin-proposal-json-strings-7.10.4.tgz",
        "integrity": "sha512-fCL7QF0Jo83uy1K0P2YXrfX11tj3lkpN7l4dMv9Y9VkowkhkQDwFHFd8IiwyK5MZjE8UpbgokkgtcReH88Abaw==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4",
          "@babel/plugin-syntax-json-strings": "^7.8.0"
        }
      },
      "@babel/plugin-proposal-logical-assignment-operators": {
        "version": "7.11.0",
        "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-logical-assignment-operators/-/plugin-proposal-logical-assignment-operators-7.11.0.tgz",
        "integrity": "sha512-/f8p4z+Auz0Uaf+i8Ekf1iM7wUNLcViFUGiPxKeXvxTSl63B875YPiVdUDdem7hREcI0E0kSpEhS8tF5RphK7Q==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4",
          "@babel/plugin-syntax-logical-assignment-operators": "^7.10.4"
        }
      },
      "@babel/plugin-proposal-nullish-coalescing-operator": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-nullish-coalescing-operator/-/plugin-proposal-nullish-coalescing-operator-7.10.4.tgz",
        "integrity": "sha512-wq5n1M3ZUlHl9sqT2ok1T2/MTt6AXE0e1Lz4WzWBr95LsAZ5qDXe4KnFuauYyEyLiohvXFMdbsOTMyLZs91Zlw==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4",
          "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.0"
        }
      },
      "@babel/plugin-proposal-numeric-separator": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-numeric-separator/-/plugin-proposal-numeric-separator-7.10.4.tgz",
        "integrity": "sha512-73/G7QoRoeNkLZFxsoCCvlg4ezE4eM+57PnOqgaPOozd5myfj7p0muD1mRVJvbUWbOzD+q3No2bWbaKy+DJ8DA==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4",
          "@babel/plugin-syntax-numeric-separator": "^7.10.4"
        }
      },
      "@babel/plugin-proposal-object-rest-spread": {
        "version": "7.11.0",
        "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-object-rest-spread/-/plugin-proposal-object-rest-spread-7.11.0.tgz",
        "integrity": "sha512-wzch41N4yztwoRw0ak+37wxwJM2oiIiy6huGCoqkvSTA9acYWcPfn9Y4aJqmFFJ70KTJUu29f3DQ43uJ9HXzEA==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4",
          "@babel/plugin-syntax-object-rest-spread": "^7.8.0",
          "@babel/plugin-transform-parameters": "^7.10.4"
        }
      },
      "@babel/plugin-proposal-optional-catch-binding": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-optional-catch-binding/-/plugin-proposal-optional-catch-binding-7.10.4.tgz",
        "integrity": "sha512-LflT6nPh+GK2MnFiKDyLiqSqVHkQnVf7hdoAvyTnnKj9xB3docGRsdPuxp6qqqW19ifK3xgc9U5/FwrSaCNX5g==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4",
          "@babel/plugin-syntax-optional-catch-binding": "^7.8.0"
        }
      },
      "@babel/plugin-proposal-optional-chaining": {
        "version": "7.11.0",
        "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-optional-chaining/-/plugin-proposal-optional-chaining-7.11.0.tgz",
        "integrity": "sha512-v9fZIu3Y8562RRwhm1BbMRxtqZNFmFA2EG+pT2diuU8PT3H6T/KXoZ54KgYisfOFZHV6PfvAiBIZ9Rcz+/JCxA==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4",
          "@babel/helper-skip-transparent-expression-wrappers": "^7.11.0",
          "@babel/plugin-syntax-optional-chaining": "^7.8.0"
        }
      },
      "@babel/plugin-proposal-private-methods": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-private-methods/-/plugin-proposal-private-methods-7.10.4.tgz",
        "integrity": "sha512-wh5GJleuI8k3emgTg5KkJK6kHNsGEr0uBTDBuQUBJwckk9xs1ez79ioheEVVxMLyPscB0LfkbVHslQqIzWV6Bw==",
        "dev": true,
        "requires": {
          "@babel/helper-create-class-features-plugin": "^7.10.4",
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-proposal-unicode-property-regex": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-unicode-property-regex/-/plugin-proposal-unicode-property-regex-7.10.4.tgz",
        "integrity": "sha512-H+3fOgPnEXFL9zGYtKQe4IDOPKYlZdF1kqFDQRRb8PK4B8af1vAGK04tF5iQAAsui+mHNBQSAtd2/ndEDe9wuA==",
        "dev": true,
        "requires": {
          "@babel/helper-create-regexp-features-plugin": "^7.10.4",
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-syntax-async-generators": {
        "version": "7.8.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-async-generators/-/plugin-syntax-async-generators-7.8.4.tgz",
        "integrity": "sha512-tycmZxkGfZaxhMRbXlPXuVFpdWlXpir2W4AMhSJgRKzk/eDlIXOhb2LHWoLpDF7TEHylV5zNhykX6KAgHJmTNw==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.0"
        }
      },
      "@babel/plugin-syntax-class-properties": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-class-properties/-/plugin-syntax-class-properties-7.10.4.tgz",
        "integrity": "sha512-GCSBF7iUle6rNugfURwNmCGG3Z/2+opxAMLs1nND4bhEG5PuxTIggDBoeYYSujAlLtsupzOHYJQgPS3pivwXIA==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-syntax-dynamic-import": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-dynamic-import/-/plugin-syntax-dynamic-import-7.8.3.tgz",
        "integrity": "sha512-5gdGbFon+PszYzqs83S3E5mpi7/y/8M9eC90MRTZfduQOYW76ig6SOSPNe41IG5LoP3FGBn2N0RjVDSQiS94kQ==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.0"
        }
      },
      "@babel/plugin-syntax-export-namespace-from": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-export-namespace-from/-/plugin-syntax-export-namespace-from-7.8.3.tgz",
        "integrity": "sha512-MXf5laXo6c1IbEbegDmzGPwGNTsHZmEy6QGznu5Sh2UCWvueywb2ee+CCE4zQiZstxU9BMoQO9i6zUFSY0Kj0Q==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/plugin-syntax-flow": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-flow/-/plugin-syntax-flow-7.10.4.tgz",
        "integrity": "sha512-yxQsX1dJixF4qEEdzVbst3SZQ58Nrooz8NV9Z9GL4byTE25BvJgl5lf0RECUf0fh28rZBb/RYTWn/eeKwCMrZQ==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-syntax-json-strings": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-json-strings/-/plugin-syntax-json-strings-7.8.3.tgz",
        "integrity": "sha512-lY6kdGpWHvjoe2vk4WrAapEuBR69EMxZl+RoGRhrFGNYVK8mOPAW8VfbT/ZgrFbXlDNiiaxQnAtgVCZ6jv30EA==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.0"
        }
      },
      "@babel/plugin-syntax-jsx": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-jsx/-/plugin-syntax-jsx-7.10.4.tgz",
        "integrity": "sha512-KCg9mio9jwiARCB7WAcQ7Y1q+qicILjoK8LP/VkPkEKaf5dkaZZK1EcTe91a3JJlZ3qy6L5s9X52boEYi8DM9g==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-syntax-logical-assignment-operators": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-logical-assignment-operators/-/plugin-syntax-logical-assignment-operators-7.10.4.tgz",
        "integrity": "sha512-d8waShlpFDinQ5MtvGU9xDAOzKH47+FFoney2baFIoMr952hKOLp1HR7VszoZvOsV/4+RRszNY7D17ba0te0ig==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-syntax-nullish-coalescing-operator": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-nullish-coalescing-operator/-/plugin-syntax-nullish-coalescing-operator-7.8.3.tgz",
        "integrity": "sha512-aSff4zPII1u2QD7y+F8oDsz19ew4IGEJg9SVW+bqwpwtfFleiQDMdzA/R+UlWDzfnHFCxxleFT0PMIrR36XLNQ==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.0"
        }
      },
      "@babel/plugin-syntax-numeric-separator": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-numeric-separator/-/plugin-syntax-numeric-separator-7.10.4.tgz",
        "integrity": "sha512-9H6YdfkcK/uOnY/K7/aA2xpzaAgkQn37yzWUMRK7OaPOqOpGS1+n0H5hxT9AUw9EsSjPW8SVyMJwYRtWs3X3ug==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-syntax-object-rest-spread": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-object-rest-spread/-/plugin-syntax-object-rest-spread-7.8.3.tgz",
        "integrity": "sha512-XoqMijGZb9y3y2XskN+P1wUGiVwWZ5JmoDRwx5+3GmEplNyVM2s2Dg8ILFQm8rWM48orGy5YpI5Bl8U1y7ydlA==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.0"
        }
      },
      "@babel/plugin-syntax-optional-catch-binding": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-catch-binding/-/plugin-syntax-optional-catch-binding-7.8.3.tgz",
        "integrity": "sha512-6VPD0Pc1lpTqw0aKoeRTMiB+kWhAoT24PA+ksWSBrFtl5SIRVpZlwN3NNPQjehA2E/91FV3RjLWoVTglWcSV3Q==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.0"
        }
      },
      "@babel/plugin-syntax-optional-chaining": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-chaining/-/plugin-syntax-optional-chaining-7.8.3.tgz",
        "integrity": "sha512-KoK9ErH1MBlCPxV0VANkXW2/dw4vlbGDrFgz8bmUsBGYkFRcbRwMh6cIJubdPrkxRwuGdtCk0v/wPTKbQgBjkg==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.0"
        }
      },
      "@babel/plugin-syntax-top-level-await": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-top-level-await/-/plugin-syntax-top-level-await-7.10.4.tgz",
        "integrity": "sha512-ni1brg4lXEmWyafKr0ccFWkJG0CeMt4WV1oyeBW6EFObF4oOHclbkj5cARxAPQyAQ2UTuplJyK4nfkXIMMFvsQ==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-transform-arrow-functions": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-arrow-functions/-/plugin-transform-arrow-functions-7.10.4.tgz",
        "integrity": "sha512-9J/oD1jV0ZCBcgnoFWFq1vJd4msoKb/TCpGNFyyLt0zABdcvgK3aYikZ8HjzB14c26bc7E3Q1yugpwGy2aTPNA==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-transform-async-to-generator": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-async-to-generator/-/plugin-transform-async-to-generator-7.10.4.tgz",
        "integrity": "sha512-F6nREOan7J5UXTLsDsZG3DXmZSVofr2tGNwfdrVwkDWHfQckbQXnXSPfD7iO+c/2HGqycwyLST3DnZ16n+cBJQ==",
        "dev": true,
        "requires": {
          "@babel/helper-module-imports": "^7.10.4",
          "@babel/helper-plugin-utils": "^7.10.4",
          "@babel/helper-remap-async-to-generator": "^7.10.4"
        }
      },
      "@babel/plugin-transform-block-scoped-functions": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoped-functions/-/plugin-transform-block-scoped-functions-7.10.4.tgz",
        "integrity": "sha512-WzXDarQXYYfjaV1szJvN3AD7rZgZzC1JtjJZ8dMHUyiK8mxPRahynp14zzNjU3VkPqPsO38CzxiWO1c9ARZ8JA==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-transform-block-scoping": {
        "version": "7.11.1",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoping/-/plugin-transform-block-scoping-7.11.1.tgz",
        "integrity": "sha512-00dYeDE0EVEHuuM+26+0w/SCL0BH2Qy7LwHuI4Hi4MH5gkC8/AqMN5uWFJIsoXZrAphiMm1iXzBw6L2T+eA0ew==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-transform-classes": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-classes/-/plugin-transform-classes-7.10.4.tgz",
        "integrity": "sha512-2oZ9qLjt161dn1ZE0Ms66xBncQH4In8Sqw1YWgBUZuGVJJS5c0OFZXL6dP2MRHrkU/eKhWg8CzFJhRQl50rQxA==",
        "dev": true,
        "requires": {
          "@babel/helper-annotate-as-pure": "^7.10.4",
          "@babel/helper-define-map": "^7.10.4",
          "@babel/helper-function-name": "^7.10.4",
          "@babel/helper-optimise-call-expression": "^7.10.4",
          "@babel/helper-plugin-utils": "^7.10.4",
          "@babel/helper-replace-supers": "^7.10.4",
          "@babel/helper-split-export-declaration": "^7.10.4",
          "globals": "^11.1.0"
        }
      },
      "@babel/plugin-transform-computed-properties": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-computed-properties/-/plugin-transform-computed-properties-7.10.4.tgz",
        "integrity": "sha512-JFwVDXcP/hM/TbyzGq3l/XWGut7p46Z3QvqFMXTfk6/09m7xZHJUN9xHfsv7vqqD4YnfI5ueYdSJtXqqBLyjBw==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-transform-destructuring": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-destructuring/-/plugin-transform-destructuring-7.10.4.tgz",
        "integrity": "sha512-+WmfvyfsyF603iPa6825mq6Qrb7uLjTOsa3XOFzlYcYDHSS4QmpOWOL0NNBY5qMbvrcf3tq0Cw+v4lxswOBpgA==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-transform-dotall-regex": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-dotall-regex/-/plugin-transform-dotall-regex-7.10.4.tgz",
        "integrity": "sha512-ZEAVvUTCMlMFAbASYSVQoxIbHm2OkG2MseW6bV2JjIygOjdVv8tuxrCTzj1+Rynh7ODb8GivUy7dzEXzEhuPaA==",
        "dev": true,
        "requires": {
          "@babel/helper-create-regexp-features-plugin": "^7.10.4",
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-transform-duplicate-keys": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-duplicate-keys/-/plugin-transform-duplicate-keys-7.10.4.tgz",
        "integrity": "sha512-GL0/fJnmgMclHiBTTWXNlYjYsA7rDrtsazHG6mglaGSTh0KsrW04qml+Bbz9FL0LcJIRwBWL5ZqlNHKTkU3xAA==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-transform-exponentiation-operator": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-exponentiation-operator/-/plugin-transform-exponentiation-operator-7.10.4.tgz",
        "integrity": "sha512-S5HgLVgkBcRdyQAHbKj+7KyuWx8C6t5oETmUuwz1pt3WTWJhsUV0WIIXuVvfXMxl/QQyHKlSCNNtaIamG8fysw==",
        "dev": true,
        "requires": {
          "@babel/helper-builder-binary-assignment-operator-visitor": "^7.10.4",
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-transform-flow-strip-types": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-flow-strip-types/-/plugin-transform-flow-strip-types-7.10.4.tgz",
        "integrity": "sha512-XTadyuqNst88UWBTdLjM+wEY7BFnY2sYtPyAidfC7M/QaZnSuIZpMvLxqGT7phAcnGyWh/XQFLKcGf04CnvxSQ==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4",
          "@babel/plugin-syntax-flow": "^7.10.4"
        }
      },
      "@babel/plugin-transform-for-of": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-for-of/-/plugin-transform-for-of-7.10.4.tgz",
        "integrity": "sha512-ItdQfAzu9AlEqmusA/65TqJ79eRcgGmpPPFvBnGILXZH975G0LNjP1yjHvGgfuCxqrPPueXOPe+FsvxmxKiHHQ==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-transform-function-name": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-function-name/-/plugin-transform-function-name-7.10.4.tgz",
        "integrity": "sha512-OcDCq2y5+E0dVD5MagT5X+yTRbcvFjDI2ZVAottGH6tzqjx/LKpgkUepu3hp/u4tZBzxxpNGwLsAvGBvQ2mJzg==",
        "dev": true,
        "requires": {
          "@babel/helper-function-name": "^7.10.4",
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-transform-literals": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-literals/-/plugin-transform-literals-7.10.4.tgz",
        "integrity": "sha512-Xd/dFSTEVuUWnyZiMu76/InZxLTYilOSr1UlHV+p115Z/Le2Fi1KXkJUYz0b42DfndostYlPub3m8ZTQlMaiqQ==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-transform-member-expression-literals": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-member-expression-literals/-/plugin-transform-member-expression-literals-7.10.4.tgz",
        "integrity": "sha512-0bFOvPyAoTBhtcJLr9VcwZqKmSjFml1iVxvPL0ReomGU53CX53HsM4h2SzckNdkQcHox1bpAqzxBI1Y09LlBSw==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-transform-modules-amd": {
        "version": "7.10.5",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-amd/-/plugin-transform-modules-amd-7.10.5.tgz",
        "integrity": "sha512-elm5uruNio7CTLFItVC/rIzKLfQ17+fX7EVz5W0TMgIHFo1zY0Ozzx+lgwhL4plzl8OzVn6Qasx5DeEFyoNiRw==",
        "dev": true,
        "requires": {
          "@babel/helper-module-transforms": "^7.10.5",
          "@babel/helper-plugin-utils": "^7.10.4",
          "babel-plugin-dynamic-import-node": "^2.3.3"
        }
      },
      "@babel/plugin-transform-modules-commonjs": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-commonjs/-/plugin-transform-modules-commonjs-7.10.4.tgz",
        "integrity": "sha512-Xj7Uq5o80HDLlW64rVfDBhao6OX89HKUmb+9vWYaLXBZOma4gA6tw4Ni1O5qVDoZWUV0fxMYA0aYzOawz0l+1w==",
        "dev": true,
        "requires": {
          "@babel/helper-module-transforms": "^7.10.4",
          "@babel/helper-plugin-utils": "^7.10.4",
          "@babel/helper-simple-access": "^7.10.4",
          "babel-plugin-dynamic-import-node": "^2.3.3"
        }
      },
      "@babel/plugin-transform-modules-systemjs": {
        "version": "7.10.5",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-systemjs/-/plugin-transform-modules-systemjs-7.10.5.tgz",
        "integrity": "sha512-f4RLO/OL14/FP1AEbcsWMzpbUz6tssRaeQg11RH1BP/XnPpRoVwgeYViMFacnkaw4k4wjRSjn3ip1Uw9TaXuMw==",
        "dev": true,
        "requires": {
          "@babel/helper-hoist-variables": "^7.10.4",
          "@babel/helper-module-transforms": "^7.10.5",
          "@babel/helper-plugin-utils": "^7.10.4",
          "babel-plugin-dynamic-import-node": "^2.3.3"
        }
      },
      "@babel/plugin-transform-modules-umd": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-umd/-/plugin-transform-modules-umd-7.10.4.tgz",
        "integrity": "sha512-mohW5q3uAEt8T45YT7Qc5ws6mWgJAaL/8BfWD9Dodo1A3RKWli8wTS+WiQ/knF+tXlPirW/1/MqzzGfCExKECA==",
        "dev": true,
        "requires": {
          "@babel/helper-module-transforms": "^7.10.4",
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-transform-named-capturing-groups-regex": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-named-capturing-groups-regex/-/plugin-transform-named-capturing-groups-regex-7.10.4.tgz",
        "integrity": "sha512-V6LuOnD31kTkxQPhKiVYzYC/Jgdq53irJC/xBSmqcNcqFGV+PER4l6rU5SH2Vl7bH9mLDHcc0+l9HUOe4RNGKA==",
        "dev": true,
        "requires": {
          "@babel/helper-create-regexp-features-plugin": "^7.10.4"
        }
      },
      "@babel/plugin-transform-new-target": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-new-target/-/plugin-transform-new-target-7.10.4.tgz",
        "integrity": "sha512-YXwWUDAH/J6dlfwqlWsztI2Puz1NtUAubXhOPLQ5gjR/qmQ5U96DY4FQO8At33JN4XPBhrjB8I4eMmLROjjLjw==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-transform-object-super": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-object-super/-/plugin-transform-object-super-7.10.4.tgz",
        "integrity": "sha512-5iTw0JkdRdJvr7sY0vHqTpnruUpTea32JHmq/atIWqsnNussbRzjEDyWep8UNztt1B5IusBYg8Irb0bLbiEBCQ==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4",
          "@babel/helper-replace-supers": "^7.10.4"
        }
      },
      "@babel/plugin-transform-parameters": {
        "version": "7.10.5",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-parameters/-/plugin-transform-parameters-7.10.5.tgz",
        "integrity": "sha512-xPHwUj5RdFV8l1wuYiu5S9fqWGM2DrYc24TMvUiRrPVm+SM3XeqU9BcokQX/kEUe+p2RBwy+yoiR1w/Blq6ubw==",
        "dev": true,
        "requires": {
          "@babel/helper-get-function-arity": "^7.10.4",
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-transform-property-literals": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-property-literals/-/plugin-transform-property-literals-7.10.4.tgz",
        "integrity": "sha512-ofsAcKiUxQ8TY4sScgsGeR2vJIsfrzqvFb9GvJ5UdXDzl+MyYCaBj/FGzXuv7qE0aJcjWMILny1epqelnFlz8g==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-transform-react-jsx": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx/-/plugin-transform-react-jsx-7.10.4.tgz",
        "integrity": "sha512-L+MfRhWjX0eI7Js093MM6MacKU4M6dnCRa/QPDwYMxjljzSCzzlzKzj9Pk4P3OtrPcxr2N3znR419nr3Xw+65A==",
        "dev": true,
        "requires": {
          "@babel/helper-builder-react-jsx": "^7.10.4",
          "@babel/helper-builder-react-jsx-experimental": "^7.10.4",
          "@babel/helper-plugin-utils": "^7.10.4",
          "@babel/plugin-syntax-jsx": "^7.10.4"
        }
      },
      "@babel/plugin-transform-regenerator": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-regenerator/-/plugin-transform-regenerator-7.10.4.tgz",
        "integrity": "sha512-3thAHwtor39A7C04XucbMg17RcZ3Qppfxr22wYzZNcVIkPHfpM9J0SO8zuCV6SZa265kxBJSrfKTvDCYqBFXGw==",
        "dev": true,
        "requires": {
          "regenerator-transform": "^0.14.2"
        }
      },
      "@babel/plugin-transform-reserved-words": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-reserved-words/-/plugin-transform-reserved-words-7.10.4.tgz",
        "integrity": "sha512-hGsw1O6Rew1fkFbDImZIEqA8GoidwTAilwCyWqLBM9f+e/u/sQMQu7uX6dyokfOayRuuVfKOW4O7HvaBWM+JlQ==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-transform-shorthand-properties": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-shorthand-properties/-/plugin-transform-shorthand-properties-7.10.4.tgz",
        "integrity": "sha512-AC2K/t7o07KeTIxMoHneyX90v3zkm5cjHJEokrPEAGEy3UCp8sLKfnfOIGdZ194fyN4wfX/zZUWT9trJZ0qc+Q==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-transform-spread": {
        "version": "7.11.0",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-spread/-/plugin-transform-spread-7.11.0.tgz",
        "integrity": "sha512-UwQYGOqIdQJe4aWNyS7noqAnN2VbaczPLiEtln+zPowRNlD+79w3oi2TWfYe0eZgd+gjZCbsydN7lzWysDt+gw==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4",
          "@babel/helper-skip-transparent-expression-wrappers": "^7.11.0"
        }
      },
      "@babel/plugin-transform-sticky-regex": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-sticky-regex/-/plugin-transform-sticky-regex-7.10.4.tgz",
        "integrity": "sha512-Ddy3QZfIbEV0VYcVtFDCjeE4xwVTJWTmUtorAJkn6u/92Z/nWJNV+mILyqHKrUxXYKA2EoCilgoPePymKL4DvQ==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4",
          "@babel/helper-regex": "^7.10.4"
        }
      },
      "@babel/plugin-transform-template-literals": {
        "version": "7.10.5",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-template-literals/-/plugin-transform-template-literals-7.10.5.tgz",
        "integrity": "sha512-V/lnPGIb+KT12OQikDvgSuesRX14ck5FfJXt6+tXhdkJ+Vsd0lDCVtF6jcB4rNClYFzaB2jusZ+lNISDk2mMMw==",
        "dev": true,
        "requires": {
          "@babel/helper-annotate-as-pure": "^7.10.4",
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-transform-typeof-symbol": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-typeof-symbol/-/plugin-transform-typeof-symbol-7.10.4.tgz",
        "integrity": "sha512-QqNgYwuuW0y0H+kUE/GWSR45t/ccRhe14Fs/4ZRouNNQsyd4o3PG4OtHiIrepbM2WKUBDAXKCAK/Lk4VhzTaGA==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-transform-unicode-escapes": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-escapes/-/plugin-transform-unicode-escapes-7.10.4.tgz",
        "integrity": "sha512-y5XJ9waMti2J+e7ij20e+aH+fho7Wb7W8rNuu72aKRwCHFqQdhkdU2lo3uZ9tQuboEJcUFayXdARhcxLQ3+6Fg==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-transform-unicode-regex": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-regex/-/plugin-transform-unicode-regex-7.10.4.tgz",
        "integrity": "sha512-wNfsc4s8N2qnIwpO/WP2ZiSyjfpTamT2C9V9FDH/Ljub9zw6P3SjkXcFmc0RQUt96k2fmIvtla2MMjgTwIAC+A==",
        "dev": true,
        "requires": {
          "@babel/helper-create-regexp-features-plugin": "^7.10.4",
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/preset-env": {
        "version": "7.11.0",
        "resolved": "https://registry.npmjs.org/@babel/preset-env/-/preset-env-7.11.0.tgz",
        "integrity": "sha512-2u1/k7rG/gTh02dylX2kL3S0IJNF+J6bfDSp4DI2Ma8QN6Y9x9pmAax59fsCk6QUQG0yqH47yJWA+u1I1LccAg==",
        "dev": true,
        "requires": {
          "@babel/compat-data": "^7.11.0",
          "@babel/helper-compilation-targets": "^7.10.4",
          "@babel/helper-module-imports": "^7.10.4",
          "@babel/helper-plugin-utils": "^7.10.4",
          "@babel/plugin-proposal-async-generator-functions": "^7.10.4",
          "@babel/plugin-proposal-class-properties": "^7.10.4",
          "@babel/plugin-proposal-dynamic-import": "^7.10.4",
          "@babel/plugin-proposal-export-namespace-from": "^7.10.4",
          "@babel/plugin-proposal-json-strings": "^7.10.4",
          "@babel/plugin-proposal-logical-assignment-operators": "^7.11.0",
          "@babel/plugin-proposal-nullish-coalescing-operator": "^7.10.4",
          "@babel/plugin-proposal-numeric-separator": "^7.10.4",
          "@babel/plugin-proposal-object-rest-spread": "^7.11.0",
          "@babel/plugin-proposal-optional-catch-binding": "^7.10.4",
          "@babel/plugin-proposal-optional-chaining": "^7.11.0",
          "@babel/plugin-proposal-private-methods": "^7.10.4",
          "@babel/plugin-proposal-unicode-property-regex": "^7.10.4",
          "@babel/plugin-syntax-async-generators": "^7.8.0",
          "@babel/plugin-syntax-class-properties": "^7.10.4",
          "@babel/plugin-syntax-dynamic-import": "^7.8.0",
          "@babel/plugin-syntax-export-namespace-from": "^7.8.3",
          "@babel/plugin-syntax-json-strings": "^7.8.0",
          "@babel/plugin-syntax-logical-assignment-operators": "^7.10.4",
          "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.0",
          "@babel/plugin-syntax-numeric-separator": "^7.10.4",
          "@babel/plugin-syntax-object-rest-spread": "^7.8.0",
          "@babel/plugin-syntax-optional-catch-binding": "^7.8.0",
          "@babel/plugin-syntax-optional-chaining": "^7.8.0",
          "@babel/plugin-syntax-top-level-await": "^7.10.4",
          "@babel/plugin-transform-arrow-functions": "^7.10.4",
          "@babel/plugin-transform-async-to-generator": "^7.10.4",
          "@babel/plugin-transform-block-scoped-functions": "^7.10.4",
          "@babel/plugin-transform-block-scoping": "^7.10.4",
          "@babel/plugin-transform-classes": "^7.10.4",
          "@babel/plugin-transform-computed-properties": "^7.10.4",
          "@babel/plugin-transform-destructuring": "^7.10.4",
          "@babel/plugin-transform-dotall-regex": "^7.10.4",
          "@babel/plugin-transform-duplicate-keys": "^7.10.4",
          "@babel/plugin-transform-exponentiation-operator": "^7.10.4",
          "@babel/plugin-transform-for-of": "^7.10.4",
          "@babel/plugin-transform-function-name": "^7.10.4",
          "@babel/plugin-transform-literals": "^7.10.4",
          "@babel/plugin-transform-member-expression-literals": "^7.10.4",
          "@babel/plugin-transform-modules-amd": "^7.10.4",
          "@babel/plugin-transform-modules-commonjs": "^7.10.4",
          "@babel/plugin-transform-modules-systemjs": "^7.10.4",
          "@babel/plugin-transform-modules-umd": "^7.10.4",
          "@babel/plugin-transform-named-capturing-groups-regex": "^7.10.4",
          "@babel/plugin-transform-new-target": "^7.10.4",
          "@babel/plugin-transform-object-super": "^7.10.4",
          "@babel/plugin-transform-parameters": "^7.10.4",
          "@babel/plugin-transform-property-literals": "^7.10.4",
          "@babel/plugin-transform-regenerator": "^7.10.4",
          "@babel/plugin-transform-reserved-words": "^7.10.4",
          "@babel/plugin-transform-shorthand-properties": "^7.10.4",
          "@babel/plugin-transform-spread": "^7.11.0",
          "@babel/plugin-transform-sticky-regex": "^7.10.4",
          "@babel/plugin-transform-template-literals": "^7.10.4",
          "@babel/plugin-transform-typeof-symbol": "^7.10.4",
          "@babel/plugin-transform-unicode-escapes": "^7.10.4",
          "@babel/plugin-transform-unicode-regex": "^7.10.4",
          "@babel/preset-modules": "^0.1.3",
          "@babel/types": "^7.11.0",
          "browserslist": "^4.12.0",
          "core-js-compat": "^3.6.2",
          "invariant": "^2.2.2",
          "levenary": "^1.1.1",
          "semver": "^5.5.0"
        }
      },
      "@babel/preset-modules": {
        "version": "0.1.3",
        "resolved": "https://registry.npmjs.org/@babel/preset-modules/-/preset-modules-0.1.3.tgz",
        "integrity": "sha512-Ra3JXOHBq2xd56xSF7lMKXdjBn3T772Y1Wet3yWnkDly9zHvJki029tAFzvAAK5cf4YV3yoxuP61crYRol6SVg==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.0.0",
          "@babel/plugin-proposal-unicode-property-regex": "^7.4.4",
          "@babel/plugin-transform-dotall-regex": "^7.4.4",
          "@babel/types": "^7.4.4",
          "esutils": "^2.0.2"
        }
      },
      "@babel/runtime": {
        "version": "7.11.2",
        "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.11.2.tgz",
        "integrity": "sha512-TeWkU52so0mPtDcaCTxNBI/IHiz0pZgr8VEFqXFtZWpYD08ZB6FaSwVAS8MKRQAP3bYKiVjwysOJgMFY28o6Tw==",
        "dev": true,
        "requires": {
          "regenerator-runtime": "^0.13.4"
        }
      },
      "@babel/template": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.10.4.tgz",
        "integrity": "sha512-ZCjD27cGJFUB6nmCB1Enki3r+L5kJveX9pq1SvAUKoICy6CZ9yD8xO086YXdYhvNjBdnekm4ZnaP5yC8Cs/1tA==",
        "dev": true,
        "requires": {
          "@babel/code-frame": "^7.10.4",
          "@babel/parser": "^7.10.4",
          "@babel/types": "^7.10.4"
        }
      },
      "@babel/traverse": {
        "version": "7.11.0",
        "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.11.0.tgz",
        "integrity": "sha512-ZB2V+LskoWKNpMq6E5UUCrjtDUh5IOTAyIl0dTjIEoXum/iKWkoIEKIRDnUucO6f+2FzNkE0oD4RLKoPIufDtg==",
        "dev": true,
        "requires": {
          "@babel/code-frame": "^7.10.4",
          "@babel/generator": "^7.11.0",
          "@babel/helper-function-name": "^7.10.4",
          "@babel/helper-split-export-declaration": "^7.11.0",
          "@babel/parser": "^7.11.0",
          "@babel/types": "^7.11.0",
          "debug": "^4.1.0",
          "globals": "^11.1.0",
          "lodash": "^4.17.19"
        }
      },
      "@babel/types": {
        "version": "7.11.0",
        "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.11.0.tgz",
        "integrity": "sha512-O53yME4ZZI0jO1EVGtF1ePGl0LHirG4P1ibcD80XyzZcKhcMFeCXmh4Xb1ifGBIV233Qg12x4rBfQgA+tmOukA==",
        "dev": true,
        "requires": {
          "@babel/helper-validator-identifier": "^7.10.4",
          "lodash": "^4.17.19",
          "to-fast-properties": "^2.0.0"
        }
      },
      "@iarna/toml": {
        "version": "2.2.5",
        "resolved": "https://registry.npmjs.org/@iarna/toml/-/toml-2.2.5.tgz",
        "integrity": "sha512-trnsAYxU3xnS1gPHPyU961coFyLkh4gAD/0zQ5mymY4yOZ+CYvsPqUbOFSw0aDM4y0tV7tiFxL/1XfXPNC6IPg==",
        "dev": true
      },
      "@mrmlnc/readdir-enhanced": {
        "version": "2.2.1",
        "resolved": "https://registry.npmjs.org/@mrmlnc/readdir-enhanced/-/readdir-enhanced-2.2.1.tgz",
        "integrity": "sha512-bPHp6Ji8b41szTOcaP63VlnbbO5Ny6dwAATtY6JTjh5N2OLrb5Qk/Th5cRkRQhkWCt+EJsYrNB0MiL+Gpn6e3g==",
        "dev": true,
        "requires": {
          "call-me-maybe": "^1.0.1",
          "glob-to-regexp": "^0.3.0"
        }
      },
      "@nodelib/fs.stat": {
        "version": "1.1.3",
        "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-1.1.3.tgz",
        "integrity": "sha512-shAmDyaQC4H92APFoIaVDHCx5bStIocgvbwQyxPRrbUY20V1EYTbSDchWbuwlMG3V17cprZhA6+78JfB+3DTPw==",
        "dev": true
      },
      "@parcel/fs": {
        "version": "1.11.0",
        "resolved": "https://registry.npmjs.org/@parcel/fs/-/fs-1.11.0.tgz",
        "integrity": "sha512-86RyEqULbbVoeo8OLcv+LQ1Vq2PKBAvWTU9fCgALxuCTbbs5Ppcvll4Vr+Ko1AnmMzja/k++SzNAwJfeQXVlpA==",
        "dev": true,
        "requires": {
          "@parcel/utils": "^1.11.0",
          "mkdirp": "^0.5.1",
          "rimraf": "^2.6.2"
        }
      },
      "@parcel/logger": {
        "version": "1.11.1",
        "resolved": "https://registry.npmjs.org/@parcel/logger/-/logger-1.11.1.tgz",
        "integrity": "sha512-9NF3M6UVeP2udOBDILuoEHd8VrF4vQqoWHEafymO1pfSoOMfxrSJZw1MfyAAIUN/IFp9qjcpDCUbDZB+ioVevA==",
        "dev": true,
        "requires": {
          "@parcel/workers": "^1.11.0",
          "chalk": "^2.1.0",
          "grapheme-breaker": "^0.3.2",
          "ora": "^2.1.0",
          "strip-ansi": "^4.0.0"
        }
      },
      "@parcel/utils": {
        "version": "1.11.0",
        "resolved": "https://registry.npmjs.org/@parcel/utils/-/utils-1.11.0.tgz",
        "integrity": "sha512-cA3p4jTlaMeOtAKR/6AadanOPvKeg8VwgnHhOyfi0yClD0TZS/hi9xu12w4EzA/8NtHu0g6o4RDfcNjqN8l1AQ==",
        "dev": true
      },
      "@parcel/watcher": {
        "version": "1.12.1",
        "resolved": "https://registry.npmjs.org/@parcel/watcher/-/watcher-1.12.1.tgz",
        "integrity": "sha512-od+uCtCxC/KoNQAIE1vWx1YTyKYY+7CTrxBJPRh3cDWw/C0tCtlBMVlrbplscGoEpt6B27KhJDCv82PBxOERNA==",
        "dev": true,
        "requires": {
          "@parcel/utils": "^1.11.0",
          "chokidar": "^2.1.5"
        }
      },
      "@parcel/workers": {
        "version": "1.11.0",
        "resolved": "https://registry.npmjs.org/@parcel/workers/-/workers-1.11.0.tgz",
        "integrity": "sha512-USSjRAAQYsZFlv43FUPdD+jEGML5/8oLF0rUzPQTtK4q9kvaXr49F5ZplyLz5lox78cLZ0TxN2bIDQ1xhOkulQ==",
        "dev": true,
        "requires": {
          "@parcel/utils": "^1.11.0",
          "physical-cpu-count": "^2.0.0"
        }
      },
      "@types/q": {
        "version": "1.5.4",
        "resolved": "https://registry.npmjs.org/@types/q/-/q-1.5.4.tgz",
        "integrity": "sha512-1HcDas8SEj4z1Wc696tH56G8OlRaH/sqZOynNNB+HF0WOeXPaxTtbYzJY2oEfiUxjSKjhCKr+MvR7dCHcEelug==",
        "dev": true
      },
      "abab": {
        "version": "2.0.4",
        "resolved": "https://registry.npmjs.org/abab/-/abab-2.0.4.tgz",
        "integrity": "sha512-Eu9ELJWCz/c1e9gTiCY+FceWxcqzjYEbqMgtndnuSqZSUCOL73TWNK2mHfIj4Cw2E/ongOp+JISVNCmovt2KYQ==",
        "dev": true
      },
      "acorn": {
        "version": "7.4.0",
        "resolved": "https://registry.npmjs.org/acorn/-/acorn-7.4.0.tgz",
        "integrity": "sha512-+G7P8jJmCHr+S+cLfQxygbWhXy+8YTVGzAkpEbcLo2mLoL7tij/VG41QSHACSf5QgYRhMZYHuNc6drJaO0Da+w==",
        "dev": true
      },
      "acorn-globals": {
        "version": "4.3.4",
        "resolved": "https://registry.npmjs.org/acorn-globals/-/acorn-globals-4.3.4.tgz",
        "integrity": "sha512-clfQEh21R+D0leSbUdWf3OcfqyaCSAQ8Ryq00bofSekfr9W8u1jyYZo6ir0xu9Gtcf7BjcHJpnbZH7JOCpP60A==",
        "dev": true,
        "requires": {
          "acorn": "^6.0.1",
          "acorn-walk": "^6.0.1"
        },
        "dependencies": {
          "acorn": {
            "version": "6.4.1",
            "resolved": "https://registry.npmjs.org/acorn/-/acorn-6.4.1.tgz",
            "integrity": "sha512-ZVA9k326Nwrj3Cj9jlh3wGFutC2ZornPNARZwsNYqQYgN0EsV2d53w5RN/co65Ohn4sUAUtb1rSUAOD6XN9idA==",
            "dev": true
          }
        }
      },
      "acorn-walk": {
        "version": "6.2.0",
        "resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-6.2.0.tgz",
        "integrity": "sha512-7evsyfH1cLOCdAzZAd43Cic04yKydNx0cF+7tiA19p1XnLLPU4dpCQOqpjqwokFe//vS0QqfqqjCS2JkiIs0cA==",
        "dev": true
      },
      "ajv": {
        "version": "6.12.4",
        "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.4.tgz",
        "integrity": "sha512-eienB2c9qVQs2KWexhkrdMLVDoIQCz5KSeLxwg9Lzk4DOfBtIK9PQwwufcsn1jjGuf9WZmqPMbGxOzfcuphJCQ==",
        "dev": true,
        "requires": {
          "fast-deep-equal": "^3.1.1",
          "fast-json-stable-stringify": "^2.0.0",
          "json-schema-traverse": "^0.4.1",
          "uri-js": "^4.2.2"
        }
      },
      "alphanum-sort": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/alphanum-sort/-/alphanum-sort-1.0.2.tgz",
        "integrity": "sha1-l6ERlkmyEa0zaR2fn0hqjsn74KM=",
        "dev": true
      },
      "ansi-regex": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
        "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
        "dev": true
      },
      "ansi-styles": {
        "version": "3.2.1",
        "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
        "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
        "dev": true,
        "requires": {
          "color-convert": "^1.9.0"
        }
      },
      "ansi-to-html": {
        "version": "0.6.14",
        "resolved": "https://registry.npmjs.org/ansi-to-html/-/ansi-to-html-0.6.14.tgz",
        "integrity": "sha512-7ZslfB1+EnFSDO5Ju+ue5Y6It19DRnZXWv8jrGHgIlPna5Mh4jz7BV5jCbQneXNFurQcKoolaaAjHtgSBfOIuA==",
        "dev": true,
        "requires": {
          "entities": "^1.1.2"
        }
      },
      "anymatch": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-2.0.0.tgz",
        "integrity": "sha512-5teOsQWABXHHBFP9y3skS5P3d/WfWXpv3FUpy+LorMrNYaT9pI4oLMQX7jzQ2KklNpGpWHzdCXTDT2Y3XGlZBw==",
        "dev": true,
        "requires": {
          "micromatch": "^3.1.4",
          "normalize-path": "^2.1.1"
        },
        "dependencies": {
          "normalize-path": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz",
            "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
            "dev": true,
            "requires": {
              "remove-trailing-separator": "^1.0.1"
            }
          }
        }
      },
      "argparse": {
        "version": "1.0.10",
        "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
        "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
        "dev": true,
        "requires": {
          "sprintf-js": "~1.0.2"
        }
      },
      "arr-diff": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
        "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",
        "dev": true
      },
      "arr-flatten": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/arr-flatten/-/arr-flatten-1.1.0.tgz",
        "integrity": "sha512-L3hKV5R/p5o81R7O02IGnwpDmkp6E982XhtbuwSe3O4qOtMMMtodicASA1Cny2U+aCXcNpml+m4dPsvsJ3jatg==",
        "dev": true
      },
      "arr-union": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/arr-union/-/arr-union-3.1.0.tgz",
        "integrity": "sha1-45sJrqne+Gao8gbiiK9jkZuuOcQ=",
        "dev": true
      },
      "array-equal": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/array-equal/-/array-equal-1.0.0.tgz",
        "integrity": "sha1-jCpe8kcv2ep0KwTHenUJO6J1fJM=",
        "dev": true
      },
      "array-unique": {
        "version": "0.3.2",
        "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
        "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg=",
        "dev": true
      },
      "asn1": {
        "version": "0.2.4",
        "resolved": "https://registry.npmjs.org/asn1/-/asn1-0.2.4.tgz",
        "integrity": "sha512-jxwzQpLQjSmWXgwaCZE9Nz+glAG01yF1QnWgbhGwHI5A6FRIEY6IVqtHhIepHqI7/kyEyQEagBC5mBEFlIYvdg==",
        "dev": true,
        "requires": {
          "safer-buffer": "~2.1.0"
        }
      },
      "asn1.js": {
        "version": "5.4.1",
        "resolved": "https://registry.npmjs.org/asn1.js/-/asn1.js-5.4.1.tgz",
        "integrity": "sha512-+I//4cYPccV8LdmBLiX8CYvf9Sp3vQsrqu2QNXRcrbiWvcx/UdlFiqUJJzxRQxgsZmvhXhn4cSKeSmoFjVdupA==",
        "dev": true,
        "requires": {
          "bn.js": "^4.0.0",
          "inherits": "^2.0.1",
          "minimalistic-assert": "^1.0.0",
          "safer-buffer": "^2.1.0"
        },
        "dependencies": {
          "bn.js": {
            "version": "4.11.9",
            "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
            "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
            "dev": true
          }
        }
      },
      "assert": {
        "version": "1.5.0",
        "resolved": "https://registry.npmjs.org/assert/-/assert-1.5.0.tgz",
        "integrity": "sha512-EDsgawzwoun2CZkCgtxJbv392v4nbk9XDD06zI+kQYoBM/3RBWLlEyJARDOmhAAosBjWACEkKL6S+lIZtcAubA==",
        "dev": true,
        "requires": {
          "object-assign": "^4.1.1",
          "util": "0.10.3"
        },
        "dependencies": {
          "inherits": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.1.tgz",
            "integrity": "sha1-sX0I0ya0Qj5Wjv9xn5GwscvfafE=",
            "dev": true
          },
          "util": {
            "version": "0.10.3",
            "resolved": "https://registry.npmjs.org/util/-/util-0.10.3.tgz",
            "integrity": "sha1-evsa/lCAUkZInj23/g7TeTNqwPk=",
            "dev": true,
            "requires": {
              "inherits": "2.0.1"
            }
          }
        }
      },
      "assert-plus": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz",
        "integrity": "sha1-8S4PPF13sLHN2RRpQuTpbB5N1SU=",
        "dev": true
      },
      "assign-symbols": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/assign-symbols/-/assign-symbols-1.0.0.tgz",
        "integrity": "sha1-WWZ/QfrdTyDMvCu5a41Pf3jsA2c=",
        "dev": true
      },
      "async-each": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/async-each/-/async-each-1.0.3.tgz",
        "integrity": "sha512-z/WhQ5FPySLdvREByI2vZiTWwCnF0moMJ1hK9YQwDTHKh6I7/uSckMetoRGb5UBZPC1z0jlw+n/XCgjeH7y1AQ==",
        "dev": true
      },
      "async-limiter": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/async-limiter/-/async-limiter-1.0.1.tgz",
        "integrity": "sha512-csOlWGAcRFJaI6m+F2WKdnMKr4HhdhFVBk0H/QbJFMCr+uO2kwohwXQPxw/9OCxp05r5ghVBFSyioixx3gfkNQ==",
        "dev": true
      },
      "asynckit": {
        "version": "0.4.0",
        "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
        "integrity": "sha1-x57Zf380y48robyXkLzDZkdLS3k=",
        "dev": true
      },
      "atob": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/atob/-/atob-2.1.2.tgz",
        "integrity": "sha512-Wm6ukoaOGJi/73p/cl2GvLjTI5JM1k/O14isD73YML8StrH/7/lRFgmg8nICZgD3bZZvjwCGxtMOD3wWNAu8cg==",
        "dev": true
      },
      "aws-sign2": {
        "version": "0.7.0",
        "resolved": "https://registry.npmjs.org/aws-sign2/-/aws-sign2-0.7.0.tgz",
        "integrity": "sha1-tG6JCTSpWR8tL2+G1+ap8bP+dqg=",
        "dev": true
      },
      "aws4": {
        "version": "1.10.1",
        "resolved": "https://registry.npmjs.org/aws4/-/aws4-1.10.1.tgz",
        "integrity": "sha512-zg7Hz2k5lI8kb7U32998pRRFin7zJlkfezGJjUc2heaD4Pw2wObakCDVzkKztTm/Ln7eiVvYsjqak0Ed4LkMDA==",
        "dev": true
      },
      "babel-plugin-dynamic-import-node": {
        "version": "2.3.3",
        "resolved": "https://registry.npmjs.org/babel-plugin-dynamic-import-node/-/babel-plugin-dynamic-import-node-2.3.3.tgz",
        "integrity": "sha512-jZVI+s9Zg3IqA/kdi0i6UDCybUI3aSBLnglhYbSSjKlV7yF1F/5LWv8MakQmvYpnbJDS6fcBL2KzHSxNCMtWSQ==",
        "dev": true,
        "requires": {
          "object.assign": "^4.1.0"
        }
      },
      "babel-runtime": {
        "version": "6.26.0",
        "resolved": "https://registry.npmjs.org/babel-runtime/-/babel-runtime-6.26.0.tgz",
        "integrity": "sha1-llxwWGaOgrVde/4E/yM3vItWR/4=",
        "dev": true,
        "requires": {
          "core-js": "^2.4.0",
          "regenerator-runtime": "^0.11.0"
        },
        "dependencies": {
          "core-js": {
            "version": "2.6.11",
            "resolved": "https://registry.npmjs.org/core-js/-/core-js-2.6.11.tgz",
            "integrity": "sha512-5wjnpaT/3dV+XB4borEsnAYQchn00XSgTAWKDkEqv+K8KevjbzmofK6hfJ9TZIlpj2N0xQpazy7PiRQiWHqzWg==",
            "dev": true
          },
          "regenerator-runtime": {
            "version": "0.11.1",
            "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.11.1.tgz",
            "integrity": "sha512-MguG95oij0fC3QV3URf4V2SDYGJhJnJGqvIIgdECeODCT98wSWDAJ94SSuVpYQUoTcGUIL6L4yNB7j1DFFHSBg==",
            "dev": true
          }
        }
      },
      "babel-types": {
        "version": "6.26.0",
        "resolved": "https://registry.npmjs.org/babel-types/-/babel-types-6.26.0.tgz",
        "integrity": "sha1-o7Bz+Uq0nrb6Vc1lInozQ4BjJJc=",
        "dev": true,
        "requires": {
          "babel-runtime": "^6.26.0",
          "esutils": "^2.0.2",
          "lodash": "^4.17.4",
          "to-fast-properties": "^1.0.3"
        },
        "dependencies": {
          "to-fast-properties": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-1.0.3.tgz",
            "integrity": "sha1-uDVx+k2MJbguIxsG46MFXeTKGkc=",
            "dev": true
          }
        }
      },
      "babylon-walk": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/babylon-walk/-/babylon-walk-1.0.2.tgz",
        "integrity": "sha1-OxWl3btIKni0zpwByLoYFwLZ1s4=",
        "dev": true,
        "requires": {
          "babel-runtime": "^6.11.6",
          "babel-types": "^6.15.0",
          "lodash.clone": "^4.5.0"
        }
      },
      "balanced-match": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
        "integrity": "sha1-ibTRmasr7kneFk6gK4nORi1xt2c=",
        "dev": true
      },
      "base": {
        "version": "0.11.2",
        "resolved": "https://registry.npmjs.org/base/-/base-0.11.2.tgz",
        "integrity": "sha512-5T6P4xPgpp0YDFvSWwEZ4NoE3aM4QBQXDzmVbraCkFj8zHM+mba8SyqB5DbZWyR7mYHo6Y7BdQo3MoA4m0TeQg==",
        "dev": true,
        "requires": {
          "cache-base": "^1.0.1",
          "class-utils": "^0.3.5",
          "component-emitter": "^1.2.1",
          "define-property": "^1.0.0",
          "isobject": "^3.0.1",
          "mixin-deep": "^1.2.0",
          "pascalcase": "^0.1.1"
        },
        "dependencies": {
          "define-property": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
            "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
            "dev": true,
            "requires": {
              "is-descriptor": "^1.0.0"
            }
          },
          "is-accessor-descriptor": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
            "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
            "dev": true,
            "requires": {
              "kind-of": "^6.0.0"
            }
          },
          "is-data-descriptor": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
            "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
            "dev": true,
            "requires": {
              "kind-of": "^6.0.0"
            }
          },
          "is-descriptor": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
            "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
            "dev": true,
            "requires": {
              "is-accessor-descriptor": "^1.0.0",
              "is-data-descriptor": "^1.0.0",
              "kind-of": "^6.0.2"
            }
          }
        }
      },
      "base64-js": {
        "version": "1.3.1",
        "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.3.1.tgz",
        "integrity": "sha512-mLQ4i2QO1ytvGWFWmcngKO//JXAQueZvwEKtjgQFM4jIK0kU+ytMfplL8j+n5mspOfjHwoAg+9yhb7BwAHm36g==",
        "dev": true
      },
      "bcrypt-pbkdf": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/bcrypt-pbkdf/-/bcrypt-pbkdf-1.0.2.tgz",
        "integrity": "sha1-pDAdOJtqQ/m2f/PKEaP2Y342Dp4=",
        "dev": true,
        "requires": {
          "tweetnacl": "^0.14.3"
        }
      },
      "binary-extensions": {
        "version": "1.13.1",
        "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-1.13.1.tgz",
        "integrity": "sha512-Un7MIEDdUC5gNpcGDV97op1Ywk748MpHcFTHoYs6qnj1Z3j7I53VG3nwZhKzoBZmbdRNnb6WRdFlwl7tSDuZGw==",
        "dev": true
      },
      "bindings": {
        "version": "1.5.0",
        "resolved": "https://registry.npmjs.org/bindings/-/bindings-1.5.0.tgz",
        "integrity": "sha512-p2q/t/mhvuOj/UeLlV6566GD/guowlr0hHxClI0W9m7MWYkL1F0hLo+0Aexs9HSPCtR1SXQ0TD3MMKrXZajbiQ==",
        "dev": true,
        "requires": {
          "file-uri-to-path": "1.0.0"
        }
      },
      "bn.js": {
        "version": "5.1.3",
        "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-5.1.3.tgz",
        "integrity": "sha512-GkTiFpjFtUzU9CbMeJ5iazkCzGL3jrhzerzZIuqLABjbwRaFt33I9tUdSNryIptM+RxDet6OKm2WnLXzW51KsQ==",
        "dev": true
      },
      "boolbase": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",
        "integrity": "sha1-aN/1++YMUes3cl6p4+0xDcwed24=",
        "dev": true
      },
      "brace-expansion": {
        "version": "1.1.11",
        "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
        "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
        "dev": true,
        "requires": {
          "balanced-match": "^1.0.0",
          "concat-map": "0.0.1"
        }
      },
      "braces": {
        "version": "2.3.2",
        "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
        "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
        "dev": true,
        "requires": {
          "arr-flatten": "^1.1.0",
          "array-unique": "^0.3.2",
          "extend-shallow": "^2.0.1",
          "fill-range": "^4.0.0",
          "isobject": "^3.0.1",
          "repeat-element": "^1.1.2",
          "snapdragon": "^0.8.1",
          "snapdragon-node": "^2.0.1",
          "split-string": "^3.0.2",
          "to-regex": "^3.0.1"
        },
        "dependencies": {
          "extend-shallow": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
            "dev": true,
            "requires": {
              "is-extendable": "^0.1.0"
            }
          }
        }
      },
      "brfs": {
        "version": "1.6.1",
        "resolved": "https://registry.npmjs.org/brfs/-/brfs-1.6.1.tgz",
        "integrity": "sha512-OfZpABRQQf+Xsmju8XE9bDjs+uU4vLREGolP7bDgcpsI17QREyZ4Bl+2KLxxx1kCgA0fAIhKQBaBYh+PEcCqYQ==",
        "dev": true,
        "requires": {
          "quote-stream": "^1.0.1",
          "resolve": "^1.1.5",
          "static-module": "^2.2.0",
          "through2": "^2.0.0"
        }
      },
      "brorand": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/brorand/-/brorand-1.1.0.tgz",
        "integrity": "sha1-EsJe/kCkXjwyPrhnWgoM5XsiNx8=",
        "dev": true
      },
      "browser-process-hrtime": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/browser-process-hrtime/-/browser-process-hrtime-1.0.0.tgz",
        "integrity": "sha512-9o5UecI3GhkpM6DrXr69PblIuWxPKk9Y0jHBRhdocZ2y7YECBFCsHm79Pr3OyR2AvjhDkabFJaDJMYRazHgsow==",
        "dev": true
      },
      "browserify-aes": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/browserify-aes/-/browserify-aes-1.2.0.tgz",
        "integrity": "sha512-+7CHXqGuspUn/Sl5aO7Ea0xWGAtETPXNSAjHo48JfLdPWcMng33Xe4znFvQweqc/uzk5zSOI3H52CYnjCfb5hA==",
        "dev": true,
        "requires": {
          "buffer-xor": "^1.0.3",
          "cipher-base": "^1.0.0",
          "create-hash": "^1.1.0",
          "evp_bytestokey": "^1.0.3",
          "inherits": "^2.0.1",
          "safe-buffer": "^5.0.1"
        }
      },
      "browserify-cipher": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/browserify-cipher/-/browserify-cipher-1.0.1.tgz",
        "integrity": "sha512-sPhkz0ARKbf4rRQt2hTpAHqn47X3llLkUGn+xEJzLjwY8LRs2p0v7ljvI5EyoRO/mexrNunNECisZs+gw2zz1w==",
        "dev": true,
        "requires": {
          "browserify-aes": "^1.0.4",
          "browserify-des": "^1.0.0",
          "evp_bytestokey": "^1.0.0"
        }
      },
      "browserify-des": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/browserify-des/-/browserify-des-1.0.2.tgz",
        "integrity": "sha512-BioO1xf3hFwz4kc6iBhI3ieDFompMhrMlnDFC4/0/vd5MokpuAc3R+LYbwTA9A5Yc9pq9UYPqffKpW2ObuwX5A==",
        "dev": true,
        "requires": {
          "cipher-base": "^1.0.1",
          "des.js": "^1.0.0",
          "inherits": "^2.0.1",
          "safe-buffer": "^5.1.2"
        }
      },
      "browserify-rsa": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/browserify-rsa/-/browserify-rsa-4.0.1.tgz",
        "integrity": "sha1-IeCr+vbyApzy+vsTNWenAdQTVSQ=",
        "dev": true,
        "requires": {
          "bn.js": "^4.1.0",
          "randombytes": "^2.0.1"
        },
        "dependencies": {
          "bn.js": {
            "version": "4.11.9",
            "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
            "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
            "dev": true
          }
        }
      },
      "browserify-sign": {
        "version": "4.2.1",
        "resolved": "https://registry.npmjs.org/browserify-sign/-/browserify-sign-4.2.1.tgz",
        "integrity": "sha512-/vrA5fguVAKKAVTNJjgSm1tRQDHUU6DbwO9IROu/0WAzC8PKhucDSh18J0RMvVeHAn5puMd+QHC2erPRNf8lmg==",
        "dev": true,
        "requires": {
          "bn.js": "^5.1.1",
          "browserify-rsa": "^4.0.1",
          "create-hash": "^1.2.0",
          "create-hmac": "^1.1.7",
          "elliptic": "^6.5.3",
          "inherits": "^2.0.4",
          "parse-asn1": "^5.1.5",
          "readable-stream": "^3.6.0",
          "safe-buffer": "^5.2.0"
        },
        "dependencies": {
          "readable-stream": {
            "version": "3.6.0",
            "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
            "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
            "dev": true,
            "requires": {
              "inherits": "^2.0.3",
              "string_decoder": "^1.1.1",
              "util-deprecate": "^1.0.1"
            }
          },
          "safe-buffer": {
            "version": "5.2.1",
            "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
            "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
            "dev": true
          }
        }
      },
      "browserify-zlib": {
        "version": "0.2.0",
        "resolved": "https://registry.npmjs.org/browserify-zlib/-/browserify-zlib-0.2.0.tgz",
        "integrity": "sha512-Z942RysHXmJrhqk88FmKBVq/v5tqmSkDz7p54G/MGyjMnCFFnC79XWNbg+Vta8W6Wb2qtSZTSxIGkJrRpCFEiA==",
        "dev": true,
        "requires": {
          "pako": "~1.0.5"
        },
        "dependencies": {
          "pako": {
            "version": "1.0.11",
            "resolved": "https://registry.npmjs.org/pako/-/pako-1.0.11.tgz",
            "integrity": "sha512-4hLB8Py4zZce5s4yd9XzopqwVv/yGNhV1Bl8NTmCq1763HeK2+EwVTv+leGeL13Dnh2wfbqowVPXCIO0z4taYw==",
            "dev": true
          }
        }
      },
      "browserslist": {
        "version": "4.14.0",
        "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.14.0.tgz",
        "integrity": "sha512-pUsXKAF2lVwhmtpeA3LJrZ76jXuusrNyhduuQs7CDFf9foT4Y38aQOserd2lMe5DSSrjf3fx34oHwryuvxAUgQ==",
        "dev": true,
        "requires": {
          "caniuse-lite": "^1.0.30001111",
          "electron-to-chromium": "^1.3.523",
          "escalade": "^3.0.2",
          "node-releases": "^1.1.60"
        }
      },
      "buffer": {
        "version": "4.9.2",
        "resolved": "https://registry.npmjs.org/buffer/-/buffer-4.9.2.tgz",
        "integrity": "sha512-xq+q3SRMOxGivLhBNaUdC64hDTQwejJ+H0T/NB1XMtTVEwNTrfFF3gAxiyW0Bu/xWEGhjVKgUcMhCrUy2+uCWg==",
        "dev": true,
        "requires": {
          "base64-js": "^1.0.2",
          "ieee754": "^1.1.4",
          "isarray": "^1.0.0"
        }
      },
      "buffer-equal": {
        "version": "0.0.1",
        "resolved": "https://registry.npmjs.org/buffer-equal/-/buffer-equal-0.0.1.tgz",
        "integrity": "sha1-kbx0sR6kBbyRa8aqkI+q+ltKrEs=",
        "dev": true
      },
      "buffer-from": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.1.tgz",
        "integrity": "sha512-MQcXEUbCKtEo7bhqEs6560Hyd4XaovZlO/k9V3hjVUF/zwW7KBVdSK4gIt/bzwS9MbR5qob+F5jusZsb0YQK2A==",
        "dev": true
      },
      "buffer-xor": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/buffer-xor/-/buffer-xor-1.0.3.tgz",
        "integrity": "sha1-JuYe0UIvtw3ULm42cp7VHYVf6Nk=",
        "dev": true
      },
      "builtin-status-codes": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/builtin-status-codes/-/builtin-status-codes-3.0.0.tgz",
        "integrity": "sha1-hZgoeOIbmOHGZCXgPQF0eI9Wnug=",
        "dev": true
      },
      "cache-base": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/cache-base/-/cache-base-1.0.1.tgz",
        "integrity": "sha512-AKcdTnFSWATd5/GCPRxr2ChwIJ85CeyrEyjRHlKxQ56d4XJMGym0uAiKn0xbLOGOl3+yRpOTi484dVCEc5AUzQ==",
        "dev": true,
        "requires": {
          "collection-visit": "^1.0.0",
          "component-emitter": "^1.2.1",
          "get-value": "^2.0.6",
          "has-value": "^1.0.0",
          "isobject": "^3.0.1",
          "set-value": "^2.0.0",
          "to-object-path": "^0.3.0",
          "union-value": "^1.0.0",
          "unset-value": "^1.0.0"
        }
      },
      "call-me-maybe": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/call-me-maybe/-/call-me-maybe-1.0.1.tgz",
        "integrity": "sha1-JtII6onje1y95gJQoV8DHBak1ms=",
        "dev": true
      },
      "caller-callsite": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/caller-callsite/-/caller-callsite-2.0.0.tgz",
        "integrity": "sha1-hH4PzgoiN1CpoCfFSzNzGtMVQTQ=",
        "dev": true,
        "requires": {
          "callsites": "^2.0.0"
        }
      },
      "caller-path": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/caller-path/-/caller-path-2.0.0.tgz",
        "integrity": "sha1-Ro+DBE42mrIBD6xfBs7uFbsssfQ=",
        "dev": true,
        "requires": {
          "caller-callsite": "^2.0.0"
        }
      },
      "callsites": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/callsites/-/callsites-2.0.0.tgz",
        "integrity": "sha1-BuuE8A7qQT2oav/vrL/7Ngk7PFA=",
        "dev": true
      },
      "caniuse-api": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/caniuse-api/-/caniuse-api-3.0.0.tgz",
        "integrity": "sha512-bsTwuIg/BZZK/vreVTYYbSWoe2F+71P7K5QGEX+pT250DZbfU1MQ5prOKpPR+LL6uWKK3KMwMCAS74QB3Um1uw==",
        "dev": true,
        "requires": {
          "browserslist": "^4.0.0",
          "caniuse-lite": "^1.0.0",
          "lodash.memoize": "^4.1.2",
          "lodash.uniq": "^4.5.0"
        }
      },
      "caniuse-lite": {
        "version": "1.0.30001118",
        "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001118.tgz",
        "integrity": "sha512-RNKPLojZo74a0cP7jFMidQI7nvLER40HgNfgKQEJ2PFm225L0ectUungNQoK3Xk3StQcFbpBPNEvoWD59436Hg==",
        "dev": true
      },
      "caseless": {
        "version": "0.12.0",
        "resolved": "https://registry.npmjs.org/caseless/-/caseless-0.12.0.tgz",
        "integrity": "sha1-G2gcIf+EAzyCZUMJBolCDRhxUdw=",
        "dev": true
      },
      "chalk": {
        "version": "2.4.2",
        "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
        "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
        "dev": true,
        "requires": {
          "ansi-styles": "^3.2.1",
          "escape-string-regexp": "^1.0.5",
          "supports-color": "^5.3.0"
        }
      },
      "chokidar": {
        "version": "2.1.8",
        "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-2.1.8.tgz",
        "integrity": "sha512-ZmZUazfOzf0Nve7duiCKD23PFSCs4JPoYyccjUFF3aQkQadqBhfzhjkwBH2mNOG9cTBwhamM37EIsIkZw3nRgg==",
        "dev": true,
        "requires": {
          "anymatch": "^2.0.0",
          "async-each": "^1.0.1",
          "braces": "^2.3.2",
          "fsevents": "^1.2.7",
          "glob-parent": "^3.1.0",
          "inherits": "^2.0.3",
          "is-binary-path": "^1.0.0",
          "is-glob": "^4.0.0",
          "normalize-path": "^3.0.0",
          "path-is-absolute": "^1.0.0",
          "readdirp": "^2.2.1",
          "upath": "^1.1.1"
        }
      },
      "cipher-base": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/cipher-base/-/cipher-base-1.0.4.tgz",
        "integrity": "sha512-Kkht5ye6ZGmwv40uUDZztayT2ThLQGfnj/T71N/XzeZeo3nf8foyW7zGTsPYkEya3m5f3cAypH+qe7YOrM1U2Q==",
        "dev": true,
        "requires": {
          "inherits": "^2.0.1",
          "safe-buffer": "^5.0.1"
        }
      },
      "class-utils": {
        "version": "0.3.6",
        "resolved": "https://registry.npmjs.org/class-utils/-/class-utils-0.3.6.tgz",
        "integrity": "sha512-qOhPa/Fj7s6TY8H8esGu5QNpMMQxz79h+urzrNYN6mn+9BnxlDGf5QZ+XeCDsxSjPqsSR56XOZOJmpeurnLMeg==",
        "dev": true,
        "requires": {
          "arr-union": "^3.1.0",
          "define-property": "^0.2.5",
          "isobject": "^3.0.0",
          "static-extend": "^0.1.1"
        },
        "dependencies": {
          "define-property": {
            "version": "0.2.5",
            "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
            "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
            "dev": true,
            "requires": {
              "is-descriptor": "^0.1.0"
            }
          }
        }
      },
      "cli-cursor": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-2.1.0.tgz",
        "integrity": "sha1-s12sN2R5+sw+lHR9QdDQ9SOP/LU=",
        "dev": true,
        "requires": {
          "restore-cursor": "^2.0.0"
        }
      },
      "cli-spinners": {
        "version": "1.3.1",
        "resolved": "https://registry.npmjs.org/cli-spinners/-/cli-spinners-1.3.1.tgz",
        "integrity": "sha512-1QL4544moEsDVH9T/l6Cemov/37iv1RtoKf7NJ04A60+4MREXNfx/QvavbH6QoGdsD4N4Mwy49cmaINR/o2mdg==",
        "dev": true
      },
      "clone": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/clone/-/clone-2.1.2.tgz",
        "integrity": "sha1-G39Ln1kfHo+DZwQBYANFoCiHQ18=",
        "dev": true
      },
      "coa": {
        "version": "2.0.2",
        "resolved": "https://registry.npmjs.org/coa/-/coa-2.0.2.tgz",
        "integrity": "sha512-q5/jG+YQnSy4nRTV4F7lPepBJZ8qBNJJDBuJdoejDyLXgmL7IEo+Le2JDZudFTFt7mrCqIRaSjws4ygRCTCAXA==",
        "dev": true,
        "requires": {
          "@types/q": "^1.5.1",
          "chalk": "^2.4.1",
          "q": "^1.1.2"
        }
      },
      "collection-visit": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/collection-visit/-/collection-visit-1.0.0.tgz",
        "integrity": "sha1-S8A3PBZLwykbTTaMgpzxqApZ3KA=",
        "dev": true,
        "requires": {
          "map-visit": "^1.0.0",
          "object-visit": "^1.0.0"
        }
      },
      "color": {
        "version": "3.1.2",
        "resolved": "https://registry.npmjs.org/color/-/color-3.1.2.tgz",
        "integrity": "sha512-vXTJhHebByxZn3lDvDJYw4lR5+uB3vuoHsuYA5AKuxRVn5wzzIfQKGLBmgdVRHKTJYeK5rvJcHnrd0Li49CFpg==",
        "dev": true,
        "requires": {
          "color-convert": "^1.9.1",
          "color-string": "^1.5.2"
        }
      },
      "color-convert": {
        "version": "1.9.3",
        "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
        "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
        "dev": true,
        "requires": {
          "color-name": "1.1.3"
        }
      },
      "color-name": {
        "version": "1.1.3",
        "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
        "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
        "dev": true
      },
      "color-string": {
        "version": "1.5.3",
        "resolved": "https://registry.npmjs.org/color-string/-/color-string-1.5.3.tgz",
        "integrity": "sha512-dC2C5qeWoYkxki5UAXapdjqO672AM4vZuPGRQfO8b5HKuKGBbKWpITyDYN7TOFKvRW7kOgAn3746clDBMDJyQw==",
        "dev": true,
        "requires": {
          "color-name": "^1.0.0",
          "simple-swizzle": "^0.2.2"
        }
      },
      "combined-stream": {
        "version": "1.0.8",
        "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
        "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
        "dev": true,
        "requires": {
          "delayed-stream": "~1.0.0"
        }
      },
      "command-exists": {
        "version": "1.2.9",
        "resolved": "https://registry.npmjs.org/command-exists/-/command-exists-1.2.9.tgz",
        "integrity": "sha512-LTQ/SGc+s0Xc0Fu5WaKnR0YiygZkm9eKFvyS+fRsU7/ZWFF8ykFM6Pc9aCVf1+xasOOZpO3BAVgVrKvsqKHV7w==",
        "dev": true
      },
      "commander": {
        "version": "2.20.3",
        "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz",
        "integrity": "sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ==",
        "dev": true
      },
      "component-emitter": {
        "version": "1.3.0",
        "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.3.0.tgz",
        "integrity": "sha512-Rd3se6QB+sO1TwqZjscQrurpEPIfO0/yYnSin6Q/rD3mOutHvUrCAhJub3r90uNb+SESBuE0QYoB90YdfatsRg==",
        "dev": true
      },
      "concat-map": {
        "version": "0.0.1",
        "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
        "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s=",
        "dev": true
      },
      "concat-stream": {
        "version": "1.6.2",
        "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-1.6.2.tgz",
        "integrity": "sha512-27HBghJxjiZtIk3Ycvn/4kbJk/1uZuJFfuPEns6LaEvpvG1f0hTea8lilrouyo9mVc2GWdcEZ8OLoGmSADlrCw==",
        "dev": true,
        "requires": {
          "buffer-from": "^1.0.0",
          "inherits": "^2.0.3",
          "readable-stream": "^2.2.2",
          "typedarray": "^0.0.6"
        }
      },
      "console-browserify": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/console-browserify/-/console-browserify-1.2.0.tgz",
        "integrity": "sha512-ZMkYO/LkF17QvCPqM0gxw8yUzigAOZOSWSHg91FH6orS7vcEj5dVZTidN2fQ14yBSdg97RqhSNwLUXInd52OTA==",
        "dev": true
      },
      "constants-browserify": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/constants-browserify/-/constants-browserify-1.0.0.tgz",
        "integrity": "sha1-wguW2MYXdIqvHBYCF2DNJ/y4y3U=",
        "dev": true
      },
      "convert-source-map": {
        "version": "1.7.0",
        "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.7.0.tgz",
        "integrity": "sha512-4FJkXzKXEDB1snCFZlLP4gpC3JILicCpGbzG9f9G7tGqGCzETQ2hWPrcinA9oU4wtf2biUaEH5065UnMeR33oA==",
        "dev": true,
        "requires": {
          "safe-buffer": "~5.1.1"
        }
      },
      "copy-descriptor": {
        "version": "0.1.1",
        "resolved": "https://registry.npmjs.org/copy-descriptor/-/copy-descriptor-0.1.1.tgz",
        "integrity": "sha1-Z29us8OZl8LuGsOpJP1hJHSPV40=",
        "dev": true
      },
      "core-js": {
        "version": "3.6.5",
        "resolved": "https://registry.npmjs.org/core-js/-/core-js-3.6.5.tgz",
        "integrity": "sha512-vZVEEwZoIsI+vPEuoF9Iqf5H7/M3eeQqWlQnYa8FSKKePuYTf5MWnxb5SDAzCa60b3JBRS5g9b+Dq7b1y/RCrA=="
      },
      "core-js-compat": {
        "version": "3.6.5",
        "resolved": "https://registry.npmjs.org/core-js-compat/-/core-js-compat-3.6.5.tgz",
        "integrity": "sha512-7ItTKOhOZbznhXAQ2g/slGg1PJV5zDO/WdkTwi7UEOJmkvsE32PWvx6mKtDjiMpjnR2CNf6BAD6sSxIlv7ptng==",
        "dev": true,
        "requires": {
          "browserslist": "^4.8.5",
          "semver": "7.0.0"
        },
        "dependencies": {
          "semver": {
            "version": "7.0.0",
            "resolved": "https://registry.npmjs.org/semver/-/semver-7.0.0.tgz",
            "integrity": "sha512-+GB6zVA9LWh6zovYQLALHwv5rb2PHGlJi3lfiqIHxR0uuwCgefcOJc59v9fv1w8GbStwxuuqqAjI9NMAOOgq1A==",
            "dev": true
          }
        }
      },
      "core-util-is": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
        "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac=",
        "dev": true
      },
      "cosmiconfig": {
        "version": "5.2.1",
        "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-5.2.1.tgz",
        "integrity": "sha512-H65gsXo1SKjf8zmrJ67eJk8aIRKV5ff2D4uKZIBZShbhGSpEmsQOPW/SKMKYhSTrqR7ufy6RP69rPogdaPh/kA==",
        "dev": true,
        "requires": {
          "import-fresh": "^2.0.0",
          "is-directory": "^0.3.1",
          "js-yaml": "^3.13.1",
          "parse-json": "^4.0.0"
        }
      },
      "create-ecdh": {
        "version": "4.0.4",
        "resolved": "https://registry.npmjs.org/create-ecdh/-/create-ecdh-4.0.4.tgz",
        "integrity": "sha512-mf+TCx8wWc9VpuxfP2ht0iSISLZnt0JgWlrOKZiNqyUZWnjIaCIVNQArMHnCZKfEYRg6IM7A+NeJoN8gf/Ws0A==",
        "dev": true,
        "requires": {
          "bn.js": "^4.1.0",
          "elliptic": "^6.5.3"
        },
        "dependencies": {
          "bn.js": {
            "version": "4.11.9",
            "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
            "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
            "dev": true
          }
        }
      },
      "create-hash": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/create-hash/-/create-hash-1.2.0.tgz",
        "integrity": "sha512-z00bCGNHDG8mHAkP7CtT1qVu+bFQUPjYq/4Iv3C3kWjTFV10zIjfSoeqXo9Asws8gwSHDGj/hl2u4OGIjapeCg==",
        "dev": true,
        "requires": {
          "cipher-base": "^1.0.1",
          "inherits": "^2.0.1",
          "md5.js": "^1.3.4",
          "ripemd160": "^2.0.1",
          "sha.js": "^2.4.0"
        }
      },
      "create-hmac": {
        "version": "1.1.7",
        "resolved": "https://registry.npmjs.org/create-hmac/-/create-hmac-1.1.7.tgz",
        "integrity": "sha512-MJG9liiZ+ogc4TzUwuvbER1JRdgvUFSB5+VR/g5h82fGaIRWMWddtKBHi7/sVhfjQZ6SehlyhvQYrcYkaUIpLg==",
        "dev": true,
        "requires": {
          "cipher-base": "^1.0.3",
          "create-hash": "^1.1.0",
          "inherits": "^2.0.1",
          "ripemd160": "^2.0.0",
          "safe-buffer": "^5.0.1",
          "sha.js": "^2.4.8"
        }
      },
      "cross-spawn": {
        "version": "6.0.5",
        "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-6.0.5.tgz",
        "integrity": "sha512-eTVLrBSt7fjbDygz805pMnstIs2VTBNkRm0qxZd+M7A5XDdxVRWO5MxGBXZhjY4cqLYLdtrGqRf8mBPmzwSpWQ==",
        "dev": true,
        "requires": {
          "nice-try": "^1.0.4",
          "path-key": "^2.0.1",
          "semver": "^5.5.0",
          "shebang-command": "^1.2.0",
          "which": "^1.2.9"
        }
      },
      "crypto-browserify": {
        "version": "3.12.0",
        "resolved": "https://registry.npmjs.org/crypto-browserify/-/crypto-browserify-3.12.0.tgz",
        "integrity": "sha512-fz4spIh+znjO2VjL+IdhEpRJ3YN6sMzITSBijk6FK2UvTqruSQW+/cCZTSNsMiZNvUeq0CqurF+dAbyiGOY6Wg==",
        "dev": true,
        "requires": {
          "browserify-cipher": "^1.0.0",
          "browserify-sign": "^4.0.0",
          "create-ecdh": "^4.0.0",
          "create-hash": "^1.1.0",
          "create-hmac": "^1.1.0",
          "diffie-hellman": "^5.0.0",
          "inherits": "^2.0.1",
          "pbkdf2": "^3.0.3",
          "public-encrypt": "^4.0.0",
          "randombytes": "^2.0.0",
          "randomfill": "^1.0.3"
        }
      },
      "css-color-names": {
        "version": "0.0.4",
        "resolved": "https://registry.npmjs.org/css-color-names/-/css-color-names-0.0.4.tgz",
        "integrity": "sha1-gIrcLnnPhHOAabZGyyDsJ762KeA=",
        "dev": true
      },
      "css-declaration-sorter": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/css-declaration-sorter/-/css-declaration-sorter-4.0.1.tgz",
        "integrity": "sha512-BcxQSKTSEEQUftYpBVnsH4SF05NTuBokb19/sBt6asXGKZ/6VP7PLG1CBCkFDYOnhXhPh0jMhO6xZ71oYHXHBA==",
        "dev": true,
        "requires": {
          "postcss": "^7.0.1",
          "timsort": "^0.3.0"
        }
      },
      "css-modules-loader-core": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/css-modules-loader-core/-/css-modules-loader-core-1.1.0.tgz",
        "integrity": "sha1-WQhmgpShvs0mGuCkziGwtVHyHRY=",
        "dev": true,
        "requires": {
          "icss-replace-symbols": "1.1.0",
          "postcss": "6.0.1",
          "postcss-modules-extract-imports": "1.1.0",
          "postcss-modules-local-by-default": "1.2.0",
          "postcss-modules-scope": "1.1.0",
          "postcss-modules-values": "1.3.0"
        },
        "dependencies": {
          "ansi-regex": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
            "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
            "dev": true
          },
          "ansi-styles": {
            "version": "2.2.1",
            "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-2.2.1.tgz",
            "integrity": "sha1-tDLdM1i2NM914eRmQ2gkBTPB3b4=",
            "dev": true
          },
          "chalk": {
            "version": "1.1.3",
            "resolved": "https://registry.npmjs.org/chalk/-/chalk-1.1.3.tgz",
            "integrity": "sha1-qBFcVeSnAv5NFQq9OHKCKn4J/Jg=",
            "dev": true,
            "requires": {
              "ansi-styles": "^2.2.1",
              "escape-string-regexp": "^1.0.2",
              "has-ansi": "^2.0.0",
              "strip-ansi": "^3.0.0",
              "supports-color": "^2.0.0"
            },
            "dependencies": {
              "supports-color": {
                "version": "2.0.0",
                "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-2.0.0.tgz",
                "integrity": "sha1-U10EXOa2Nj+kARcIRimZXp3zJMc=",
                "dev": true
              }
            }
          },
          "has-flag": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-1.0.0.tgz",
            "integrity": "sha1-nZ55MWXOAXoA8AQYxD+UKnsdEfo=",
            "dev": true
          },
          "postcss": {
            "version": "6.0.1",
            "resolved": "https://registry.npmjs.org/postcss/-/postcss-6.0.1.tgz",
            "integrity": "sha1-AA29H47vIXqjaLmiEsX8QLKo8/I=",
            "dev": true,
            "requires": {
              "chalk": "^1.1.3",
              "source-map": "^0.5.6",
              "supports-color": "^3.2.3"
            }
          },
          "source-map": {
            "version": "0.5.7",
            "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
            "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
            "dev": true
          },
          "strip-ansi": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
            "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
            "dev": true,
            "requires": {
              "ansi-regex": "^2.0.0"
            }
          },
          "supports-color": {
            "version": "3.2.3",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-3.2.3.tgz",
            "integrity": "sha1-ZawFBLOVQXHYpklGsq48u4pfVPY=",
            "dev": true,
            "requires": {
              "has-flag": "^1.0.0"
            }
          }
        }
      },
      "css-select": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/css-select/-/css-select-2.1.0.tgz",
        "integrity": "sha512-Dqk7LQKpwLoH3VovzZnkzegqNSuAziQyNZUcrdDM401iY+R5NkGBXGmtO05/yaXQziALuPogeG0b7UAgjnTJTQ==",
        "dev": true,
        "requires": {
          "boolbase": "^1.0.0",
          "css-what": "^3.2.1",
          "domutils": "^1.7.0",
          "nth-check": "^1.0.2"
        }
      },
      "css-select-base-adapter": {
        "version": "0.1.1",
        "resolved": "https://registry.npmjs.org/css-select-base-adapter/-/css-select-base-adapter-0.1.1.tgz",
        "integrity": "sha512-jQVeeRG70QI08vSTwf1jHxp74JoZsr2XSgETae8/xC8ovSnL2WF87GTLO86Sbwdt2lK4Umg4HnnwMO4YF3Ce7w==",
        "dev": true
      },
      "css-selector-tokenizer": {
        "version": "0.7.3",
        "resolved": "https://registry.npmjs.org/css-selector-tokenizer/-/css-selector-tokenizer-0.7.3.tgz",
        "integrity": "sha512-jWQv3oCEL5kMErj4wRnK/OPoBi0D+P1FR2cDCKYPaMeD2eW3/mttav8HT4hT1CKopiJI/psEULjkClhvJo4Lvg==",
        "dev": true,
        "requires": {
          "cssesc": "^3.0.0",
          "fastparse": "^1.1.2"
        }
      },
      "css-tree": {
        "version": "1.0.0-alpha.37",
        "resolved": "https://registry.npmjs.org/css-tree/-/css-tree-1.0.0-alpha.37.tgz",
        "integrity": "sha512-DMxWJg0rnz7UgxKT0Q1HU/L9BeJI0M6ksor0OgqOnF+aRCDWg/N2641HmVyU9KVIu0OVVWOb2IpC9A+BJRnejg==",
        "dev": true,
        "requires": {
          "mdn-data": "2.0.4",
          "source-map": "^0.6.1"
        }
      },
      "css-what": {
        "version": "3.3.0",
        "resolved": "https://registry.npmjs.org/css-what/-/css-what-3.3.0.tgz",
        "integrity": "sha512-pv9JPyatiPaQ6pf4OvD/dbfm0o5LviWmwxNWzblYf/1u9QZd0ihV+PMwy5jdQWQ3349kZmKEx9WXuSka2dM4cg==",
        "dev": true
      },
      "cssesc": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz",
        "integrity": "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==",
        "dev": true
      },
      "cssnano": {
        "version": "4.1.10",
        "resolved": "https://registry.npmjs.org/cssnano/-/cssnano-4.1.10.tgz",
        "integrity": "sha512-5wny+F6H4/8RgNlaqab4ktc3e0/blKutmq8yNlBFXA//nSFFAqAngjNVRzUvCgYROULmZZUoosL/KSoZo5aUaQ==",
        "dev": true,
        "requires": {
          "cosmiconfig": "^5.0.0",
          "cssnano-preset-default": "^4.0.7",
          "is-resolvable": "^1.0.0",
          "postcss": "^7.0.0"
        }
      },
      "cssnano-preset-default": {
        "version": "4.0.7",
        "resolved": "https://registry.npmjs.org/cssnano-preset-default/-/cssnano-preset-default-4.0.7.tgz",
        "integrity": "sha512-x0YHHx2h6p0fCl1zY9L9roD7rnlltugGu7zXSKQx6k2rYw0Hi3IqxcoAGF7u9Q5w1nt7vK0ulxV8Lo+EvllGsA==",
        "dev": true,
        "requires": {
          "css-declaration-sorter": "^4.0.1",
          "cssnano-util-raw-cache": "^4.0.1",
          "postcss": "^7.0.0",
          "postcss-calc": "^7.0.1",
          "postcss-colormin": "^4.0.3",
          "postcss-convert-values": "^4.0.1",
          "postcss-discard-comments": "^4.0.2",
          "postcss-discard-duplicates": "^4.0.2",
          "postcss-discard-empty": "^4.0.1",
          "postcss-discard-overridden": "^4.0.1",
          "postcss-merge-longhand": "^4.0.11",
          "postcss-merge-rules": "^4.0.3",
          "postcss-minify-font-values": "^4.0.2",
          "postcss-minify-gradients": "^4.0.2",
          "postcss-minify-params": "^4.0.2",
          "postcss-minify-selectors": "^4.0.2",
          "postcss-normalize-charset": "^4.0.1",
          "postcss-normalize-display-values": "^4.0.2",
          "postcss-normalize-positions": "^4.0.2",
          "postcss-normalize-repeat-style": "^4.0.2",
          "postcss-normalize-string": "^4.0.2",
          "postcss-normalize-timing-functions": "^4.0.2",
          "postcss-normalize-unicode": "^4.0.1",
          "postcss-normalize-url": "^4.0.1",
          "postcss-normalize-whitespace": "^4.0.2",
          "postcss-ordered-values": "^4.1.2",
          "postcss-reduce-initial": "^4.0.3",
          "postcss-reduce-transforms": "^4.0.2",
          "postcss-svgo": "^4.0.2",
          "postcss-unique-selectors": "^4.0.1"
        }
      },
      "cssnano-util-get-arguments": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/cssnano-util-get-arguments/-/cssnano-util-get-arguments-4.0.0.tgz",
        "integrity": "sha1-7ToIKZ8h11dBsg87gfGU7UnMFQ8=",
        "dev": true
      },
      "cssnano-util-get-match": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/cssnano-util-get-match/-/cssnano-util-get-match-4.0.0.tgz",
        "integrity": "sha1-wOTKB/U4a7F+xeUiULT1lhNlFW0=",
        "dev": true
      },
      "cssnano-util-raw-cache": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/cssnano-util-raw-cache/-/cssnano-util-raw-cache-4.0.1.tgz",
        "integrity": "sha512-qLuYtWK2b2Dy55I8ZX3ky1Z16WYsx544Q0UWViebptpwn/xDBmog2TLg4f+DBMg1rJ6JDWtn96WHbOKDWt1WQA==",
        "dev": true,
        "requires": {
          "postcss": "^7.0.0"
        }
      },
      "cssnano-util-same-parent": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/cssnano-util-same-parent/-/cssnano-util-same-parent-4.0.1.tgz",
        "integrity": "sha512-WcKx5OY+KoSIAxBW6UBBRay1U6vkYheCdjyVNDm85zt5K9mHoGOfsOsqIszfAqrQQFIIKgjh2+FDgIj/zsl21Q==",
        "dev": true
      },
      "csso": {
        "version": "4.0.3",
        "resolved": "https://registry.npmjs.org/csso/-/csso-4.0.3.tgz",
        "integrity": "sha512-NL3spysxUkcrOgnpsT4Xdl2aiEiBG6bXswAABQVHcMrfjjBisFOKwLDOmf4wf32aPdcJws1zds2B0Rg+jqMyHQ==",
        "dev": true,
        "requires": {
          "css-tree": "1.0.0-alpha.39"
        },
        "dependencies": {
          "css-tree": {
            "version": "1.0.0-alpha.39",
            "resolved": "https://registry.npmjs.org/css-tree/-/css-tree-1.0.0-alpha.39.tgz",
            "integrity": "sha512-7UvkEYgBAHRG9Nt980lYxjsTrCyHFN53ky3wVsDkiMdVqylqRt+Zc+jm5qw7/qyOvN2dHSYtX0e4MbCCExSvnA==",
            "dev": true,
            "requires": {
              "mdn-data": "2.0.6",
              "source-map": "^0.6.1"
            }
          },
          "mdn-data": {
            "version": "2.0.6",
            "resolved": "https://registry.npmjs.org/mdn-data/-/mdn-data-2.0.6.tgz",
            "integrity": "sha512-rQvjv71olwNHgiTbfPZFkJtjNMciWgswYeciZhtvWLO8bmX3TnhyA62I6sTWOyZssWHJJjY6/KiWwqQsWWsqOA==",
            "dev": true
          }
        }
      },
      "cssom": {
        "version": "0.3.8",
        "resolved": "https://registry.npmjs.org/cssom/-/cssom-0.3.8.tgz",
        "integrity": "sha512-b0tGHbfegbhPJpxpiBPU2sCkigAqtM9O121le6bbOlgyV+NyGyCmVfJ6QW9eRjz8CpNfWEOYBIMIGRYkLwsIYg==",
        "dev": true
      },
      "cssstyle": {
        "version": "1.4.0",
        "resolved": "https://registry.npmjs.org/cssstyle/-/cssstyle-1.4.0.tgz",
        "integrity": "sha512-GBrLZYZ4X4x6/QEoBnIrqb8B/f5l4+8me2dkom/j1Gtbxy0kBv6OGzKuAsGM75bkGwGAFkt56Iwg28S3XTZgSA==",
        "dev": true,
        "requires": {
          "cssom": "0.3.x"
        }
      },
      "dashdash": {
        "version": "1.14.1",
        "resolved": "https://registry.npmjs.org/dashdash/-/dashdash-1.14.1.tgz",
        "integrity": "sha1-hTz6D3y+L+1d4gMmuN1YEDX24vA=",
        "dev": true,
        "requires": {
          "assert-plus": "^1.0.0"
        }
      },
      "data-urls": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/data-urls/-/data-urls-1.1.0.tgz",
        "integrity": "sha512-YTWYI9se1P55u58gL5GkQHW4P6VJBJ5iBT+B5a7i2Tjadhv52paJG0qHX4A0OR6/t52odI64KP2YvFpkDOi3eQ==",
        "dev": true,
        "requires": {
          "abab": "^2.0.0",
          "whatwg-mimetype": "^2.2.0",
          "whatwg-url": "^7.0.0"
        }
      },
      "deasync": {
        "version": "0.1.20",
        "resolved": "https://registry.npmjs.org/deasync/-/deasync-0.1.20.tgz",
        "integrity": "sha512-E1GI7jMI57hL30OX6Ht/hfQU8DO4AuB9m72WFm4c38GNbUD4Q03//XZaOIHZiY+H1xUaomcot5yk2q/qIZQkGQ==",
        "dev": true,
        "requires": {
          "bindings": "^1.5.0",
          "node-addon-api": "^1.7.1"
        }
      },
      "debug": {
        "version": "4.1.1",
        "resolved": "https://registry.npmjs.org/debug/-/debug-4.1.1.tgz",
        "integrity": "sha512-pYAIzeRo8J6KPEaJ0VWOh5Pzkbw/RetuzehGM7QRRX5he4fPHx2rdKMB256ehJCkX+XRQm16eZLqLNS8RSZXZw==",
        "dev": true,
        "requires": {
          "ms": "^2.1.1"
        }
      },
      "decode-uri-component": {
        "version": "0.2.0",
        "resolved": "https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.0.tgz",
        "integrity": "sha1-6zkTMzRYd1y4TNGh+uBiEGu4dUU=",
        "dev": true
      },
      "deep-is": {
        "version": "0.1.3",
        "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.3.tgz",
        "integrity": "sha1-s2nW+128E+7PUk+RsHD+7cNXzzQ=",
        "dev": true
      },
      "defaults": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/defaults/-/defaults-1.0.3.tgz",
        "integrity": "sha1-xlYFHpgX2f8I7YgUd/P+QBnz730=",
        "dev": true,
        "requires": {
          "clone": "^1.0.2"
        },
        "dependencies": {
          "clone": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/clone/-/clone-1.0.4.tgz",
            "integrity": "sha1-2jCcwmPfFZlMaIypAheco8fNfH4=",
            "dev": true
          }
        }
      },
      "define-properties": {
        "version": "1.1.3",
        "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.1.3.tgz",
        "integrity": "sha512-3MqfYKj2lLzdMSf8ZIZE/V+Zuy+BgD6f164e8K2w7dgnpKArBDerGYpM46IYYcjnkdPNMjPk9A6VFB8+3SKlXQ==",
        "dev": true,
        "requires": {
          "object-keys": "^1.0.12"
        }
      },
      "define-property": {
        "version": "2.0.2",
        "resolved": "https://registry.npmjs.org/define-property/-/define-property-2.0.2.tgz",
        "integrity": "sha512-jwK2UV4cnPpbcG7+VRARKTZPUWowwXA8bzH5NP6ud0oeAxyYPuGZUAC7hMugpCdz4BeSZl2Dl9k66CHJ/46ZYQ==",
        "dev": true,
        "requires": {
          "is-descriptor": "^1.0.2",
          "isobject": "^3.0.1"
        },
        "dependencies": {
          "is-accessor-descriptor": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
            "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
            "dev": true,
            "requires": {
              "kind-of": "^6.0.0"
            }
          },
          "is-data-descriptor": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
            "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
            "dev": true,
            "requires": {
              "kind-of": "^6.0.0"
            }
          },
          "is-descriptor": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
            "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
            "dev": true,
            "requires": {
              "is-accessor-descriptor": "^1.0.0",
              "is-data-descriptor": "^1.0.0",
              "kind-of": "^6.0.2"
            }
          }
        }
      },
      "delayed-stream": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
        "integrity": "sha1-3zrhmayt+31ECqrgsp4icrJOxhk=",
        "dev": true
      },
      "depd": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
        "integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak=",
        "dev": true
      },
      "des.js": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/des.js/-/des.js-1.0.1.tgz",
        "integrity": "sha512-Q0I4pfFrv2VPd34/vfLrFOoRmlYj3OV50i7fskps1jZWK1kApMWWT9G6RRUeYedLcBDIhnSDaUvJMb3AhUlaEA==",
        "dev": true,
        "requires": {
          "inherits": "^2.0.1",
          "minimalistic-assert": "^1.0.0"
        }
      },
      "destroy": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz",
        "integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA=",
        "dev": true
      },
      "diffie-hellman": {
        "version": "5.0.3",
        "resolved": "https://registry.npmjs.org/diffie-hellman/-/diffie-hellman-5.0.3.tgz",
        "integrity": "sha512-kqag/Nl+f3GwyK25fhUMYj81BUOrZ9IuJsjIcDE5icNM9FJHAVm3VcUDxdLPoQtTuUylWm6ZIknYJwwaPxsUzg==",
        "dev": true,
        "requires": {
          "bn.js": "^4.1.0",
          "miller-rabin": "^4.0.0",
          "randombytes": "^2.0.0"
        },
        "dependencies": {
          "bn.js": {
            "version": "4.11.9",
            "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
            "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
            "dev": true
          }
        }
      },
      "dom-serializer": {
        "version": "0.2.2",
        "resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-0.2.2.tgz",
        "integrity": "sha512-2/xPb3ORsQ42nHYiSunXkDjPLBaEj/xTwUO4B7XCZQTRk7EBtTOPaygh10YAAh2OI1Qrp6NWfpAhzswj0ydt9g==",
        "dev": true,
        "requires": {
          "domelementtype": "^2.0.1",
          "entities": "^2.0.0"
        },
        "dependencies": {
          "domelementtype": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-2.0.1.tgz",
            "integrity": "sha512-5HOHUDsYZWV8FGWN0Njbr/Rn7f/eWSQi1v7+HsUVwXgn8nWWlL64zKDkS0n8ZmQ3mlWOMuXOnR+7Nx/5tMO5AQ==",
            "dev": true
          },
          "entities": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/entities/-/entities-2.0.3.tgz",
            "integrity": "sha512-MyoZ0jgnLvB2X3Lg5HqpFmn1kybDiIfEQmKzTb5apr51Rb+T3KdmMiqa70T+bhGnyv7bQ6WMj2QMHpGMmlrUYQ==",
            "dev": true
          }
        }
      },
      "domain-browser": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/domain-browser/-/domain-browser-1.2.0.tgz",
        "integrity": "sha512-jnjyiM6eRyZl2H+W8Q/zLMA481hzi0eszAaBUzIVnmYVDBbnLxVNnfu1HgEBvCbL+71FrxMl3E6lpKH7Ge3OXA==",
        "dev": true
      },
      "domelementtype": {
        "version": "1.3.1",
        "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-1.3.1.tgz",
        "integrity": "sha512-BSKB+TSpMpFI/HOxCNr1O8aMOTZ8hT3pM3GQ0w/mWRmkhEDSFJkkyzz4XQsBV44BChwGkrDfMyjVD0eA2aFV3w==",
        "dev": true
      },
      "domexception": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/domexception/-/domexception-1.0.1.tgz",
        "integrity": "sha512-raigMkn7CJNNo6Ihro1fzG7wr3fHuYVytzquZKX5n0yizGsTcYgzdIUwj1X9pK0VvjeihV+XiclP+DjwbsSKug==",
        "dev": true,
        "requires": {
          "webidl-conversions": "^4.0.2"
        }
      },
      "domhandler": {
        "version": "2.4.2",
        "resolved": "https://registry.npmjs.org/domhandler/-/domhandler-2.4.2.tgz",
        "integrity": "sha512-JiK04h0Ht5u/80fdLMCEmV4zkNh2BcoMFBmZ/91WtYZ8qVXSKjiw7fXMgFPnHcSZgOo3XdinHvmnDUeMf5R4wA==",
        "dev": true,
        "requires": {
          "domelementtype": "1"
        }
      },
      "domutils": {
        "version": "1.7.0",
        "resolved": "https://registry.npmjs.org/domutils/-/domutils-1.7.0.tgz",
        "integrity": "sha512-Lgd2XcJ/NjEw+7tFvfKxOzCYKZsdct5lczQ2ZaQY8Djz7pfAD3Gbp8ySJWtreII/vDlMVmxwa6pHmdxIYgttDg==",
        "dev": true,
        "requires": {
          "dom-serializer": "0",
          "domelementtype": "1"
        }
      },
      "dot-prop": {
        "version": "5.2.0",
        "resolved": "https://registry.npmjs.org/dot-prop/-/dot-prop-5.2.0.tgz",
        "integrity": "sha512-uEUyaDKoSQ1M4Oq8l45hSE26SnTxL6snNnqvK/VWx5wJhmff5z0FUVJDKDanor/6w3kzE3i7XZOk+7wC0EXr1A==",
        "dev": true,
        "requires": {
          "is-obj": "^2.0.0"
        }
      },
      "dotenv": {
        "version": "5.0.1",
        "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-5.0.1.tgz",
        "integrity": "sha512-4As8uPrjfwb7VXC+WnLCbXK7y+Ueb2B3zgNCePYfhxS1PYeaO1YTeplffTEcbfLhvFNGLAz90VvJs9yomG7bow==",
        "dev": true
      },
      "dotenv-expand": {
        "version": "5.1.0",
        "resolved": "https://registry.npmjs.org/dotenv-expand/-/dotenv-expand-5.1.0.tgz",
        "integrity": "sha512-YXQl1DSa4/PQyRfgrv6aoNjhasp/p4qs9FjJ4q4cQk+8m4r6k4ZSiEyytKG8f8W9gi8WsQtIObNmKd+tMzNTmA==",
        "dev": true
      },
      "duplexer2": {
        "version": "0.1.4",
        "resolved": "https://registry.npmjs.org/duplexer2/-/duplexer2-0.1.4.tgz",
        "integrity": "sha1-ixLauHjA1p4+eJEFFmKjL8a93ME=",
        "dev": true,
        "requires": {
          "readable-stream": "^2.0.2"
        }
      },
      "ecc-jsbn": {
        "version": "0.1.2",
        "resolved": "https://registry.npmjs.org/ecc-jsbn/-/ecc-jsbn-0.1.2.tgz",
        "integrity": "sha1-OoOpBOVDUyh4dMVkt1SThoSamMk=",
        "dev": true,
        "requires": {
          "jsbn": "~0.1.0",
          "safer-buffer": "^2.1.0"
        }
      },
      "ee-first": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
        "integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0=",
        "dev": true
      },
      "electron-to-chromium": {
        "version": "1.3.551",
        "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.3.551.tgz",
        "integrity": "sha512-11qcm2xvf2kqeFO5EIejaBx5cKXsW1quAyv3VctCMYwofnyVZLs97y6LCekss3/ghQpr7PYkSO3uId5FmxZsdw==",
        "dev": true
      },
      "elliptic": {
        "version": "6.5.3",
        "resolved": "https://registry.npmjs.org/elliptic/-/elliptic-6.5.3.tgz",
        "integrity": "sha512-IMqzv5wNQf+E6aHeIqATs0tOLeOTwj1QKbRcS3jBbYkl5oLAserA8yJTT7/VyHUYG91PRmPyeQDObKLPpeS4dw==",
        "dev": true,
        "requires": {
          "bn.js": "^4.4.0",
          "brorand": "^1.0.1",
          "hash.js": "^1.0.0",
          "hmac-drbg": "^1.0.0",
          "inherits": "^2.0.1",
          "minimalistic-assert": "^1.0.0",
          "minimalistic-crypto-utils": "^1.0.0"
        },
        "dependencies": {
          "bn.js": {
            "version": "4.11.9",
            "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
            "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
            "dev": true
          }
        }
      },
      "encodeurl": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
        "integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k=",
        "dev": true
      },
      "entities": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/entities/-/entities-1.1.2.tgz",
        "integrity": "sha512-f2LZMYl1Fzu7YSBKg+RoROelpOaNrcGmE9AZubeDfrCEia483oW4MI4VyFd5VNHIgQ/7qm1I0wUHK1eJnn2y2w==",
        "dev": true
      },
      "envinfo": {
        "version": "7.7.3",
        "resolved": "https://registry.npmjs.org/envinfo/-/envinfo-7.7.3.tgz",
        "integrity": "sha512-46+j5QxbPWza0PB1i15nZx0xQ4I/EfQxg9J8Had3b408SV63nEtor2e+oiY63amTo9KTuh2a3XLObNwduxYwwA==",
        "dev": true
      },
      "error-ex": {
        "version": "1.3.2",
        "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
        "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
        "dev": true,
        "requires": {
          "is-arrayish": "^0.2.1"
        }
      },
      "es-abstract": {
        "version": "1.17.6",
        "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.17.6.tgz",
        "integrity": "sha512-Fr89bON3WFyUi5EvAeI48QTWX0AyekGgLA8H+c+7fbfCkJwRWRMLd8CQedNEyJuoYYhmtEqY92pgte1FAhBlhw==",
        "dev": true,
        "requires": {
          "es-to-primitive": "^1.2.1",
          "function-bind": "^1.1.1",
          "has": "^1.0.3",
          "has-symbols": "^1.0.1",
          "is-callable": "^1.2.0",
          "is-regex": "^1.1.0",
          "object-inspect": "^1.7.0",
          "object-keys": "^1.1.1",
          "object.assign": "^4.1.0",
          "string.prototype.trimend": "^1.0.1",
          "string.prototype.trimstart": "^1.0.1"
        },
        "dependencies": {
          "object-inspect": {
            "version": "1.8.0",
            "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.8.0.tgz",
            "integrity": "sha512-jLdtEOB112fORuypAyl/50VRVIBIdVQOSUUGQHzJ4xBSbit81zRarz7GThkEFZy1RceYrWYcPcBFPQwHyAc1gA==",
            "dev": true
          }
        }
      },
      "es-to-primitive": {
        "version": "1.2.1",
        "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.2.1.tgz",
        "integrity": "sha512-QCOllgZJtaUo9miYBcLChTUaHNjJF3PYs1VidD7AwiEj1kYxKeQTctLAezAOH5ZKRH0g2IgPn6KwB4IT8iRpvA==",
        "dev": true,
        "requires": {
          "is-callable": "^1.1.4",
          "is-date-object": "^1.0.1",
          "is-symbol": "^1.0.2"
        }
      },
      "escalade": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.0.2.tgz",
        "integrity": "sha512-gPYAU37hYCUhW5euPeR+Y74F7BL+IBsV93j5cvGriSaD1aG6MGsqsV1yamRdrWrb2j3aiZvb0X+UBOWpx3JWtQ==",
        "dev": true
      },
      "escape-html": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
        "integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg=",
        "dev": true
      },
      "escape-string-regexp": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
        "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
        "dev": true
      },
      "escodegen": {
        "version": "1.9.1",
        "resolved": "https://registry.npmjs.org/escodegen/-/escodegen-1.9.1.tgz",
        "integrity": "sha512-6hTjO1NAWkHnDk3OqQ4YrCuwwmGHL9S3nPlzBOUG/R44rda3wLNrfvQ5fkSGjyhHFKM7ALPKcKGrwvCLe0lC7Q==",
        "dev": true,
        "requires": {
          "esprima": "^3.1.3",
          "estraverse": "^4.2.0",
          "esutils": "^2.0.2",
          "optionator": "^0.8.1",
          "source-map": "~0.6.1"
        }
      },
      "esprima": {
        "version": "3.1.3",
        "resolved": "https://registry.npmjs.org/esprima/-/esprima-3.1.3.tgz",
        "integrity": "sha1-/cpRzuYTOJXjyI1TXOSdv/YqRjM=",
        "dev": true
      },
      "estraverse": {
        "version": "4.3.0",
        "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
        "integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw==",
        "dev": true
      },
      "esutils": {
        "version": "2.0.3",
        "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
        "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
        "dev": true
      },
      "etag": {
        "version": "1.8.1",
        "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
        "integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc=",
        "dev": true
      },
      "events": {
        "version": "3.2.0",
        "resolved": "https://registry.npmjs.org/events/-/events-3.2.0.tgz",
        "integrity": "sha512-/46HWwbfCX2xTawVfkKLGxMifJYQBWMwY1mjywRtb4c9x8l5NP3KoJtnIOiL1hfdRkIuYhETxQlo62IF8tcnlg==",
        "dev": true
      },
      "evp_bytestokey": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/evp_bytestokey/-/evp_bytestokey-1.0.3.tgz",
        "integrity": "sha512-/f2Go4TognH/KvCISP7OUsHn85hT9nUkxxA9BEWxFn+Oj9o8ZNLm/40hdlgSLyuOimsrTKLUMEorQexp/aPQeA==",
        "dev": true,
        "requires": {
          "md5.js": "^1.3.4",
          "safe-buffer": "^5.1.1"
        }
      },
      "expand-brackets": {
        "version": "2.1.4",
        "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz",
        "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",
        "dev": true,
        "requires": {
          "debug": "^2.3.3",
          "define-property": "^0.2.5",
          "extend-shallow": "^2.0.1",
          "posix-character-classes": "^0.1.0",
          "regex-not": "^1.0.0",
          "snapdragon": "^0.8.1",
          "to-regex": "^3.0.1"
        },
        "dependencies": {
          "debug": {
            "version": "2.6.9",
            "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
            "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
            "dev": true,
            "requires": {
              "ms": "2.0.0"
            }
          },
          "define-property": {
            "version": "0.2.5",
            "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
            "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
            "dev": true,
            "requires": {
              "is-descriptor": "^0.1.0"
            }
          },
          "extend-shallow": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
            "dev": true,
            "requires": {
              "is-extendable": "^0.1.0"
            }
          },
          "ms": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
            "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
            "dev": true
          }
        }
      },
      "extend": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
        "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==",
        "dev": true
      },
      "extend-shallow": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
        "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
        "dev": true,
        "requires": {
          "assign-symbols": "^1.0.0",
          "is-extendable": "^1.0.1"
        },
        "dependencies": {
          "is-extendable": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
            "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
            "dev": true,
            "requires": {
              "is-plain-object": "^2.0.4"
            }
          }
        }
      },
      "extglob": {
        "version": "2.0.4",
        "resolved": "https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz",
        "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",
        "dev": true,
        "requires": {
          "array-unique": "^0.3.2",
          "define-property": "^1.0.0",
          "expand-brackets": "^2.1.4",
          "extend-shallow": "^2.0.1",
          "fragment-cache": "^0.2.1",
          "regex-not": "^1.0.0",
          "snapdragon": "^0.8.1",
          "to-regex": "^3.0.1"
        },
        "dependencies": {
          "define-property": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
            "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
            "dev": true,
            "requires": {
              "is-descriptor": "^1.0.0"
            }
          },
          "extend-shallow": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
            "dev": true,
            "requires": {
              "is-extendable": "^0.1.0"
            }
          },
          "is-accessor-descriptor": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
            "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
            "dev": true,
            "requires": {
              "kind-of": "^6.0.0"
            }
          },
          "is-data-descriptor": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
            "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
            "dev": true,
            "requires": {
              "kind-of": "^6.0.0"
            }
          },
          "is-descriptor": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
            "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
            "dev": true,
            "requires": {
              "is-accessor-descriptor": "^1.0.0",
              "is-data-descriptor": "^1.0.0",
              "kind-of": "^6.0.2"
            }
          }
        }
      },
      "extsprintf": {
        "version": "1.3.0",
        "resolved": "https://registry.npmjs.org/extsprintf/-/extsprintf-1.3.0.tgz",
        "integrity": "sha1-lpGEQOMEGnpBT4xS48V06zw+HgU=",
        "dev": true
      },
      "falafel": {
        "version": "2.2.4",
        "resolved": "https://registry.npmjs.org/falafel/-/falafel-2.2.4.tgz",
        "integrity": "sha512-0HXjo8XASWRmsS0X1EkhwEMZaD3Qvp7FfURwjLKjG1ghfRm/MGZl2r4cWUTv41KdNghTw4OUMmVtdGQp3+H+uQ==",
        "dev": true,
        "requires": {
          "acorn": "^7.1.1",
          "foreach": "^2.0.5",
          "isarray": "^2.0.1",
          "object-keys": "^1.0.6"
        },
        "dependencies": {
          "isarray": {
            "version": "2.0.5",
            "resolved": "https://registry.npmjs.org/isarray/-/isarray-2.0.5.tgz",
            "integrity": "sha512-xHjhDr3cNBK0BzdUJSPXZntQUx/mwMS5Rw4A7lPJ90XGAO6ISP/ePDNuo0vhqOZU+UD5JoodwCAAoZQd3FeAKw==",
            "dev": true
          }
        }
      },
      "fast-deep-equal": {
        "version": "3.1.3",
        "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
        "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
        "dev": true
      },
      "fast-glob": {
        "version": "2.2.7",
        "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-2.2.7.tgz",
        "integrity": "sha512-g1KuQwHOZAmOZMuBtHdxDtju+T2RT8jgCC9aANsbpdiDDTSnjgfuVsIBNKbUeJI3oKMRExcfNDtJl4OhbffMsw==",
        "dev": true,
        "requires": {
          "@mrmlnc/readdir-enhanced": "^2.2.1",
          "@nodelib/fs.stat": "^1.1.2",
          "glob-parent": "^3.1.0",
          "is-glob": "^4.0.0",
          "merge2": "^1.2.3",
          "micromatch": "^3.1.10"
        }
      },
      "fast-json-stable-stringify": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
        "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
        "dev": true
      },
      "fast-levenshtein": {
        "version": "2.0.6",
        "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
        "integrity": "sha1-PYpcZog6FqMMqGQ+hR8Zuqd5eRc=",
        "dev": true
      },
      "fastparse": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/fastparse/-/fastparse-1.1.2.tgz",
        "integrity": "sha512-483XLLxTVIwWK3QTrMGRqUfUpoOs/0hbQrl2oz4J0pAcm3A3bu84wxTFqGqkJzewCLdME38xJLJAxBABfQT8sQ==",
        "dev": true
      },
      "file-uri-to-path": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/file-uri-to-path/-/file-uri-to-path-1.0.0.tgz",
        "integrity": "sha512-0Zt+s3L7Vf1biwWZ29aARiVYLx7iMGnEUl9x33fbB/j3jR81u/O2LbqK+Bm1CDSNDKVtJ/YjwY7TUd5SkeLQLw==",
        "dev": true
      },
      "filesize": {
        "version": "3.6.1",
        "resolved": "https://registry.npmjs.org/filesize/-/filesize-3.6.1.tgz",
        "integrity": "sha512-7KjR1vv6qnicaPMi1iiTcI85CyYwRO/PSFCu6SvqL8jN2Wjt/NIYQTFtFs7fSDCYOstUkEWIQGFUg5YZQfjlcg==",
        "dev": true
      },
      "fill-range": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
        "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
        "dev": true,
        "requires": {
          "extend-shallow": "^2.0.1",
          "is-number": "^3.0.0",
          "repeat-string": "^1.6.1",
          "to-regex-range": "^2.1.0"
        },
        "dependencies": {
          "extend-shallow": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
            "dev": true,
            "requires": {
              "is-extendable": "^0.1.0"
            }
          }
        }
      },
      "for-in": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/for-in/-/for-in-1.0.2.tgz",
        "integrity": "sha1-gQaNKVqBQuwKxybG4iAMMPttXoA=",
        "dev": true
      },
      "foreach": {
        "version": "2.0.5",
        "resolved": "https://registry.npmjs.org/foreach/-/foreach-2.0.5.tgz",
        "integrity": "sha1-C+4AUBiusmDQo6865ljdATbsG5k=",
        "dev": true
      },
      "forever-agent": {
        "version": "0.6.1",
        "resolved": "https://registry.npmjs.org/forever-agent/-/forever-agent-0.6.1.tgz",
        "integrity": "sha1-+8cfDEGt6zf5bFd60e1C2P2sypE=",
        "dev": true
      },
      "form-data": {
        "version": "2.3.3",
        "resolved": "https://registry.npmjs.org/form-data/-/form-data-2.3.3.tgz",
        "integrity": "sha512-1lLKB2Mu3aGP1Q/2eCOx0fNbRMe7XdwktwOruhfqqd0rIJWwN4Dh+E3hrPSlDCXnSR7UtZ1N38rVXm+6+MEhJQ==",
        "dev": true,
        "requires": {
          "asynckit": "^0.4.0",
          "combined-stream": "^1.0.6",
          "mime-types": "^2.1.12"
        }
      },
      "fragment-cache": {
        "version": "0.2.1",
        "resolved": "https://registry.npmjs.org/fragment-cache/-/fragment-cache-0.2.1.tgz",
        "integrity": "sha1-QpD60n8T6Jvn8zeZxrxaCr//DRk=",
        "dev": true,
        "requires": {
          "map-cache": "^0.2.2"
        }
      },
      "fresh": {
        "version": "0.5.2",
        "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
        "integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac=",
        "dev": true
      },
      "fs.realpath": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
        "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8=",
        "dev": true
      },
      "fsevents": {
        "version": "1.2.13",
        "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-1.2.13.tgz",
        "integrity": "sha512-oWb1Z6mkHIskLzEJ/XWX0srkpkTQ7vaopMQkyaEIoq0fmtFVxOthb8cCxeT+p3ynTdkk/RZwbgG4brR5BeWECw==",
        "dev": true,
        "optional": true,
        "requires": {
          "bindings": "^1.5.0",
          "nan": "^2.12.1"
        }
      },
      "function-bind": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
        "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A==",
        "dev": true
      },
      "gensync": {
        "version": "1.0.0-beta.1",
        "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.1.tgz",
        "integrity": "sha512-r8EC6NO1sngH/zdD9fiRDLdcgnbayXah+mLgManTaIZJqEC1MZstmnox8KpnI2/fxQwrp5OpCOYWLp4rBl4Jcg==",
        "dev": true
      },
      "get-port": {
        "version": "3.2.0",
        "resolved": "https://registry.npmjs.org/get-port/-/get-port-3.2.0.tgz",
        "integrity": "sha1-3Xzn3hh8Bsi/NTeWrHHgmfCYDrw=",
        "dev": true
      },
      "get-value": {
        "version": "2.0.6",
        "resolved": "https://registry.npmjs.org/get-value/-/get-value-2.0.6.tgz",
        "integrity": "sha1-3BXKHGcjh8p2vTesCjlbogQqLCg=",
        "dev": true
      },
      "getpass": {
        "version": "0.1.7",
        "resolved": "https://registry.npmjs.org/getpass/-/getpass-0.1.7.tgz",
        "integrity": "sha1-Xv+OPmhNVprkyysSgmBOi6YhSfo=",
        "dev": true,
        "requires": {
          "assert-plus": "^1.0.0"
        }
      },
      "glob": {
        "version": "7.1.6",
        "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.6.tgz",
        "integrity": "sha512-LwaxwyZ72Lk7vZINtNNrywX0ZuLyStrdDtabefZKAY5ZGJhVtgdznluResxNmPitE0SAO+O26sWTHeKSI2wMBA==",
        "dev": true,
        "requires": {
          "fs.realpath": "^1.0.0",
          "inflight": "^1.0.4",
          "inherits": "2",
          "minimatch": "^3.0.4",
          "once": "^1.3.0",
          "path-is-absolute": "^1.0.0"
        }
      },
      "glob-parent": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-3.1.0.tgz",
        "integrity": "sha1-nmr2KZ2NO9K9QEMIMr0RPfkGxa4=",
        "dev": true,
        "requires": {
          "is-glob": "^3.1.0",
          "path-dirname": "^1.0.0"
        },
        "dependencies": {
          "is-glob": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-3.1.0.tgz",
            "integrity": "sha1-e6WuJCF4BKxwcHuWkiVnSGzD6Eo=",
            "dev": true,
            "requires": {
              "is-extglob": "^2.1.0"
            }
          }
        }
      },
      "glob-to-regexp": {
        "version": "0.3.0",
        "resolved": "https://registry.npmjs.org/glob-to-regexp/-/glob-to-regexp-0.3.0.tgz",
        "integrity": "sha1-jFoUlNIGbFcMw7/kSWF1rMTVAqs=",
        "dev": true
      },
      "globals": {
        "version": "11.12.0",
        "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
        "integrity": "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==",
        "dev": true
      },
      "graceful-fs": {
        "version": "4.2.4",
        "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.4.tgz",
        "integrity": "sha512-WjKPNJF79dtJAVniUlGGWHYGz2jWxT6VhN/4m1NdkbZ2nOsEF+cI1Edgql5zCRhs/VsQYRvrXctxktVXZUkixw==",
        "dev": true
      },
      "grapheme-breaker": {
        "version": "0.3.2",
        "resolved": "https://registry.npmjs.org/grapheme-breaker/-/grapheme-breaker-0.3.2.tgz",
        "integrity": "sha1-W55reMODJFLSuiuxy4MPlidkEKw=",
        "dev": true,
        "requires": {
          "brfs": "^1.2.0",
          "unicode-trie": "^0.3.1"
        }
      },
      "har-schema": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/har-schema/-/har-schema-2.0.0.tgz",
        "integrity": "sha1-qUwiJOvKwEeCoNkDVSHyRzW37JI=",
        "dev": true
      },
      "har-validator": {
        "version": "5.1.5",
        "resolved": "https://registry.npmjs.org/har-validator/-/har-validator-5.1.5.tgz",
        "integrity": "sha512-nmT2T0lljbxdQZfspsno9hgrG3Uir6Ks5afism62poxqBM6sDnMEuPmzTq8XN0OEwqKLLdh1jQI3qyE66Nzb3w==",
        "dev": true,
        "requires": {
          "ajv": "^6.12.3",
          "har-schema": "^2.0.0"
        }
      },
      "has": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
        "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
        "dev": true,
        "requires": {
          "function-bind": "^1.1.1"
        }
      },
      "has-ansi": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/has-ansi/-/has-ansi-2.0.0.tgz",
        "integrity": "sha1-NPUEnOHs3ysGSa8+8k5F7TVBbZE=",
        "dev": true,
        "requires": {
          "ansi-regex": "^2.0.0"
        },
        "dependencies": {
          "ansi-regex": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
            "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
            "dev": true
          }
        }
      },
      "has-flag": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
        "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0=",
        "dev": true
      },
      "has-symbols": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.1.tgz",
        "integrity": "sha512-PLcsoqu++dmEIZB+6totNFKq/7Do+Z0u4oT0zKOJNl3lYK6vGwwu2hjHs+68OEZbTjiUE9bgOABXbP/GvrS0Kg==",
        "dev": true
      },
      "has-value": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/has-value/-/has-value-1.0.0.tgz",
        "integrity": "sha1-GLKB2lhbHFxR3vJMkw7SmgvmsXc=",
        "dev": true,
        "requires": {
          "get-value": "^2.0.6",
          "has-values": "^1.0.0",
          "isobject": "^3.0.0"
        }
      },
      "has-values": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/has-values/-/has-values-1.0.0.tgz",
        "integrity": "sha1-lbC2P+whRmGab+V/51Yo1aOe/k8=",
        "dev": true,
        "requires": {
          "is-number": "^3.0.0",
          "kind-of": "^4.0.0"
        },
        "dependencies": {
          "kind-of": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-4.0.0.tgz",
            "integrity": "sha1-IIE989cSkosgc3hpGkUGb65y3Vc=",
            "dev": true,
            "requires": {
              "is-buffer": "^1.1.5"
            }
          }
        }
      },
      "hash-base": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/hash-base/-/hash-base-3.1.0.tgz",
        "integrity": "sha512-1nmYp/rhMDiE7AYkDw+lLwlAzz0AntGIe51F3RfFfEqyQ3feY2eI/NcwC6umIQVOASPMsWJLJScWKSSvzL9IVA==",
        "dev": true,
        "requires": {
          "inherits": "^2.0.4",
          "readable-stream": "^3.6.0",
          "safe-buffer": "^5.2.0"
        },
        "dependencies": {
          "readable-stream": {
            "version": "3.6.0",
            "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
            "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
            "dev": true,
            "requires": {
              "inherits": "^2.0.3",
              "string_decoder": "^1.1.1",
              "util-deprecate": "^1.0.1"
            }
          },
          "safe-buffer": {
            "version": "5.2.1",
            "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
            "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
            "dev": true
          }
        }
      },
      "hash.js": {
        "version": "1.1.7",
        "resolved": "https://registry.npmjs.org/hash.js/-/hash.js-1.1.7.tgz",
        "integrity": "sha512-taOaskGt4z4SOANNseOviYDvjEJinIkRgmp7LbKP2YTTmVxWBl87s/uzK9r+44BclBSp2X7K1hqeNfz9JbBeXA==",
        "dev": true,
        "requires": {
          "inherits": "^2.0.3",
          "minimalistic-assert": "^1.0.1"
        }
      },
      "hex-color-regex": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/hex-color-regex/-/hex-color-regex-1.1.0.tgz",
        "integrity": "sha512-l9sfDFsuqtOqKDsQdqrMRk0U85RZc0RtOR9yPI7mRVOa4FsR/BVnZ0shmQRM96Ji99kYZP/7hn1cedc1+ApsTQ==",
        "dev": true
      },
      "hmac-drbg": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/hmac-drbg/-/hmac-drbg-1.0.1.tgz",
        "integrity": "sha1-0nRXAQJabHdabFRXk+1QL8DGSaE=",
        "dev": true,
        "requires": {
          "hash.js": "^1.0.3",
          "minimalistic-assert": "^1.0.0",
          "minimalistic-crypto-utils": "^1.0.1"
        }
      },
      "hsl-regex": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/hsl-regex/-/hsl-regex-1.0.0.tgz",
        "integrity": "sha1-1JMwx4ntgZ4nakwNJy3/owsY/m4=",
        "dev": true
      },
      "hsla-regex": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/hsla-regex/-/hsla-regex-1.0.0.tgz",
        "integrity": "sha1-wc56MWjIxmFAM6S194d/OyJfnDg=",
        "dev": true
      },
      "html-comment-regex": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/html-comment-regex/-/html-comment-regex-1.1.2.tgz",
        "integrity": "sha512-P+M65QY2JQ5Y0G9KKdlDpo0zK+/OHptU5AaBwUfAIDJZk1MYf32Frm84EcOytfJE0t5JvkAnKlmjsXDnWzCJmQ==",
        "dev": true
      },
      "html-encoding-sniffer": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/html-encoding-sniffer/-/html-encoding-sniffer-1.0.2.tgz",
        "integrity": "sha512-71lZziiDnsuabfdYiUeWdCVyKuqwWi23L8YeIgV9jSSZHCtb6wB1BKWooH7L3tn4/FuZJMVWyNaIDr4RGmaSYw==",
        "dev": true,
        "requires": {
          "whatwg-encoding": "^1.0.1"
        }
      },
      "html-tags": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/html-tags/-/html-tags-1.2.0.tgz",
        "integrity": "sha1-x43mW1Zjqll5id0rerSSANfk25g=",
        "dev": true
      },
      "htmlnano": {
        "version": "0.2.6",
        "resolved": "https://registry.npmjs.org/htmlnano/-/htmlnano-0.2.6.tgz",
        "integrity": "sha512-HUY/99maFsWX2LRoGJpZ/8QRLCkyY0UU1El3wgLLFAHQlD3mCxCJJNcWJk5SBqaU49MLhIWVDW6cGBeuemvaPQ==",
        "dev": true,
        "requires": {
          "cssnano": "^4.1.10",
          "normalize-html-whitespace": "^1.0.0",
          "posthtml": "^0.13.1",
          "posthtml-render": "^1.2.2",
          "purgecss": "^2.3.0",
          "svgo": "^1.3.2",
          "terser": "^4.8.0",
          "uncss": "^0.17.3"
        },
        "dependencies": {
          "posthtml": {
            "version": "0.13.3",
            "resolved": "https://registry.npmjs.org/posthtml/-/posthtml-0.13.3.tgz",
            "integrity": "sha512-5NL2bBc4ihAyoYnY0EAQrFQbJNE1UdvgC1wjYts0hph7jYeU2fa5ki3/9U45ce9V6M1vLMEgUX2NXe/bYL+bCQ==",
            "dev": true,
            "requires": {
              "posthtml-parser": "^0.5.0",
              "posthtml-render": "^1.2.3"
            }
          },
          "posthtml-parser": {
            "version": "0.5.0",
            "resolved": "https://registry.npmjs.org/posthtml-parser/-/posthtml-parser-0.5.0.tgz",
            "integrity": "sha512-BsZFAqOeX9lkJJPKG2JmGgtm6t++WibU7FeS40FNNGZ1KS2szRSRQ8Wr2JLvikDgAecrQ/9V4sjugTAin2+KVw==",
            "dev": true,
            "requires": {
              "htmlparser2": "^3.9.2"
            }
          },
          "terser": {
            "version": "4.8.0",
            "resolved": "https://registry.npmjs.org/terser/-/terser-4.8.0.tgz",
            "integrity": "sha512-EAPipTNeWsb/3wLPeup1tVPaXfIaU68xMnVdPafIL1TV05OhASArYyIfFvnvJCNrR2NIOvDVNNTFRa+Re2MWyw==",
            "dev": true,
            "requires": {
              "commander": "^2.20.0",
              "source-map": "~0.6.1",
              "source-map-support": "~0.5.12"
            }
          }
        }
      },
      "htmlparser2": {
        "version": "3.10.1",
        "resolved": "https://registry.npmjs.org/htmlparser2/-/htmlparser2-3.10.1.tgz",
        "integrity": "sha512-IgieNijUMbkDovyoKObU1DUhm1iwNYE/fuifEoEHfd1oZKZDaONBSkal7Y01shxsM49R4XaMdGez3WnF9UfiCQ==",
        "dev": true,
        "requires": {
          "domelementtype": "^1.3.1",
          "domhandler": "^2.3.0",
          "domutils": "^1.5.1",
          "entities": "^1.1.1",
          "inherits": "^2.0.1",
          "readable-stream": "^3.1.1"
        },
        "dependencies": {
          "readable-stream": {
            "version": "3.6.0",
            "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
            "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
            "dev": true,
            "requires": {
              "inherits": "^2.0.3",
              "string_decoder": "^1.1.1",
              "util-deprecate": "^1.0.1"
            }
          }
        }
      },
      "http-errors": {
        "version": "1.7.3",
        "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.7.3.tgz",
        "integrity": "sha512-ZTTX0MWrsQ2ZAhA1cejAwDLycFsd7I7nVtnkT3Ol0aqodaKW+0CTZDQ1uBv5whptCnc8e8HeRRJxRs0kmm/Qfw==",
        "dev": true,
        "requires": {
          "depd": "~1.1.2",
          "inherits": "2.0.4",
          "setprototypeof": "1.1.1",
          "statuses": ">= 1.5.0 < 2",
          "toidentifier": "1.0.0"
        }
      },
      "http-signature": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/http-signature/-/http-signature-1.2.0.tgz",
        "integrity": "sha1-muzZJRFHcvPZW2WmCruPfBj7rOE=",
        "dev": true,
        "requires": {
          "assert-plus": "^1.0.0",
          "jsprim": "^1.2.2",
          "sshpk": "^1.7.0"
        }
      },
      "https-browserify": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/https-browserify/-/https-browserify-1.0.0.tgz",
        "integrity": "sha1-7AbBDgo0wPL68Zn3/X/Hj//QPHM=",
        "dev": true
      },
      "iconv-lite": {
        "version": "0.4.24",
        "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
        "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
        "dev": true,
        "requires": {
          "safer-buffer": ">= 2.1.2 < 3"
        }
      },
      "icss-replace-symbols": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/icss-replace-symbols/-/icss-replace-symbols-1.1.0.tgz",
        "integrity": "sha1-Bupvg2ead0njhs/h/oEq5dsiPe0=",
        "dev": true
      },
      "ieee754": {
        "version": "1.1.13",
        "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.1.13.tgz",
        "integrity": "sha512-4vf7I2LYV/HaWerSo3XmlMkp5eZ83i+/CDluXi/IGTs/O1sejBNhTtnxzmRZfvOUqj7lZjqHkeTvpgSFDlWZTg==",
        "dev": true
      },
      "import-fresh": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-2.0.0.tgz",
        "integrity": "sha1-2BNVwVYS04bGH53dOSLUMEgipUY=",
        "dev": true,
        "requires": {
          "caller-path": "^2.0.0",
          "resolve-from": "^3.0.0"
        }
      },
      "indexes-of": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/indexes-of/-/indexes-of-1.0.1.tgz",
        "integrity": "sha1-8w9xbI4r00bHtn0985FVZqfAVgc=",
        "dev": true
      },
      "inflight": {
        "version": "1.0.6",
        "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
        "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
        "dev": true,
        "requires": {
          "once": "^1.3.0",
          "wrappy": "1"
        }
      },
      "inherits": {
        "version": "2.0.4",
        "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
        "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
        "dev": true
      },
      "invariant": {
        "version": "2.2.4",
        "resolved": "https://registry.npmjs.org/invariant/-/invariant-2.2.4.tgz",
        "integrity": "sha512-phJfQVBuaJM5raOpJjSfkiD6BpbCE4Ns//LaXl6wGYtUBY83nWS6Rf9tXm2e8VaK60JEjYldbPif/A2B1C2gNA==",
        "dev": true,
        "requires": {
          "loose-envify": "^1.0.0"
        }
      },
      "is-absolute-url": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/is-absolute-url/-/is-absolute-url-2.1.0.tgz",
        "integrity": "sha1-UFMN+4T8yap9vnhS6Do3uTufKqY=",
        "dev": true
      },
      "is-accessor-descriptor": {
        "version": "0.1.6",
        "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
        "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
        "dev": true,
        "requires": {
          "kind-of": "^3.0.2"
        },
        "dependencies": {
          "kind-of": {
            "version": "3.2.2",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
            "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
            "dev": true,
            "requires": {
              "is-buffer": "^1.1.5"
            }
          }
        }
      },
      "is-arrayish": {
        "version": "0.2.1",
        "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
        "integrity": "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0=",
        "dev": true
      },
      "is-binary-path": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-1.0.1.tgz",
        "integrity": "sha1-dfFmQrSA8YenEcgUFh/TpKdlWJg=",
        "dev": true,
        "requires": {
          "binary-extensions": "^1.0.0"
        }
      },
      "is-buffer": {
        "version": "1.1.6",
        "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-1.1.6.tgz",
        "integrity": "sha512-NcdALwpXkTm5Zvvbk7owOUSvVvBKDgKP5/ewfXEznmQFfs4ZRmanOeKBTjRVjka3QFoN6XJ+9F3USqfHqTaU5w==",
        "dev": true
      },
      "is-callable": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.0.tgz",
        "integrity": "sha512-pyVD9AaGLxtg6srb2Ng6ynWJqkHU9bEM087AKck0w8QwDarTfNcpIYoU8x8Hv2Icm8u6kFJM18Dag8lyqGkviw==",
        "dev": true
      },
      "is-color-stop": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/is-color-stop/-/is-color-stop-1.1.0.tgz",
        "integrity": "sha1-z/9HGu5N1cnhWFmPvhKWe1za00U=",
        "dev": true,
        "requires": {
          "css-color-names": "^0.0.4",
          "hex-color-regex": "^1.1.0",
          "hsl-regex": "^1.0.0",
          "hsla-regex": "^1.0.0",
          "rgb-regex": "^1.0.1",
          "rgba-regex": "^1.0.0"
        }
      },
      "is-data-descriptor": {
        "version": "0.1.4",
        "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
        "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
        "dev": true,
        "requires": {
          "kind-of": "^3.0.2"
        },
        "dependencies": {
          "kind-of": {
            "version": "3.2.2",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
            "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
            "dev": true,
            "requires": {
              "is-buffer": "^1.1.5"
            }
          }
        }
      },
      "is-date-object": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.0.2.tgz",
        "integrity": "sha512-USlDT524woQ08aoZFzh3/Z6ch9Y/EWXEHQ/AaRN0SkKq4t2Jw2R2339tSXmwuVoY7LLlBCbOIlx2myP/L5zk0g==",
        "dev": true
      },
      "is-descriptor": {
        "version": "0.1.6",
        "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
        "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
        "dev": true,
        "requires": {
          "is-accessor-descriptor": "^0.1.6",
          "is-data-descriptor": "^0.1.4",
          "kind-of": "^5.0.0"
        },
        "dependencies": {
          "kind-of": {
            "version": "5.1.0",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
            "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
            "dev": true
          }
        }
      },
      "is-directory": {
        "version": "0.3.1",
        "resolved": "https://registry.npmjs.org/is-directory/-/is-directory-0.3.1.tgz",
        "integrity": "sha1-YTObbyR1/Hcv2cnYP1yFddwVSuE=",
        "dev": true
      },
      "is-extendable": {
        "version": "0.1.1",
        "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
        "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",
        "dev": true
      },
      "is-extglob": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
        "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI=",
        "dev": true
      },
      "is-glob": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.1.tgz",
        "integrity": "sha512-5G0tKtBTFImOqDnLB2hG6Bp2qcKEFduo4tZu9MT/H6NQv/ghhy30o55ufafxJ/LdH79LLs2Kfrn85TLKyA7BUg==",
        "dev": true,
        "requires": {
          "is-extglob": "^2.1.1"
        }
      },
      "is-html": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/is-html/-/is-html-1.1.0.tgz",
        "integrity": "sha1-4E8cGNOUhRETlvmgJz6rUa8hhGQ=",
        "dev": true,
        "requires": {
          "html-tags": "^1.0.0"
        }
      },
      "is-number": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
        "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
        "dev": true,
        "requires": {
          "kind-of": "^3.0.2"
        },
        "dependencies": {
          "kind-of": {
            "version": "3.2.2",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
            "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
            "dev": true,
            "requires": {
              "is-buffer": "^1.1.5"
            }
          }
        }
      },
      "is-obj": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/is-obj/-/is-obj-2.0.0.tgz",
        "integrity": "sha512-drqDG3cbczxxEJRoOXcOjtdp1J/lyp1mNn0xaznRs8+muBhgQcrnbspox5X5fOw0HnMnbfDzvnEMEtqDEJEo8w==",
        "dev": true
      },
      "is-plain-object": {
        "version": "2.0.4",
        "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",
        "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",
        "dev": true,
        "requires": {
          "isobject": "^3.0.1"
        }
      },
      "is-regex": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.1.1.tgz",
        "integrity": "sha512-1+QkEcxiLlB7VEyFtyBg94e08OAsvq7FUBgApTq/w2ymCLyKJgDPsybBENVtA7XCQEgEXxKPonG+mvYRxh/LIg==",
        "dev": true,
        "requires": {
          "has-symbols": "^1.0.1"
        }
      },
      "is-resolvable": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/is-resolvable/-/is-resolvable-1.1.0.tgz",
        "integrity": "sha512-qgDYXFSR5WvEfuS5dMj6oTMEbrrSaM0CrFk2Yiq/gXnBvD9pMa2jGXxyhGLfvhZpuMZe18CJpFxAt3CRs42NMg==",
        "dev": true
      },
      "is-svg": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/is-svg/-/is-svg-3.0.0.tgz",
        "integrity": "sha512-gi4iHK53LR2ujhLVVj+37Ykh9GLqYHX6JOVXbLAucaG/Cqw9xwdFOjDM2qeifLs1sF1npXXFvDu0r5HNgCMrzQ==",
        "dev": true,
        "requires": {
          "html-comment-regex": "^1.1.0"
        }
      },
      "is-symbol": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.0.3.tgz",
        "integrity": "sha512-OwijhaRSgqvhm/0ZdAcXNZt9lYdKFpcRDT5ULUuYXPoT794UNOdU+gpT6Rzo7b4V2HUl/op6GqY894AZwv9faQ==",
        "dev": true,
        "requires": {
          "has-symbols": "^1.0.1"
        }
      },
      "is-typedarray": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
        "integrity": "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo=",
        "dev": true
      },
      "is-url": {
        "version": "1.2.4",
        "resolved": "https://registry.npmjs.org/is-url/-/is-url-1.2.4.tgz",
        "integrity": "sha512-ITvGim8FhRiYe4IQ5uHSkj7pVaPDrCTkNd3yq3cV7iZAcJdHTUMPMEHcqSOy9xZ9qFenQCvi+2wjH9a1nXqHww==",
        "dev": true
      },
      "is-windows": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/is-windows/-/is-windows-1.0.2.tgz",
        "integrity": "sha512-eXK1UInq2bPmjyX6e3VHIzMLobc4J94i4AWn+Hpq3OU5KkrRC96OAcR3PRJ/pGu6m8TRnBHP9dkXQVsT/COVIA==",
        "dev": true
      },
      "is-wsl": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-1.1.0.tgz",
        "integrity": "sha1-HxbkqiKwTRM2tmGIpmrzxgDDpm0=",
        "dev": true
      },
      "isarray": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
        "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",
        "dev": true
      },
      "isexe": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
        "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA=",
        "dev": true
      },
      "isobject": {
        "version": "3.0.1",
        "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
        "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
        "dev": true
      },
      "isstream": {
        "version": "0.1.2",
        "resolved": "https://registry.npmjs.org/isstream/-/isstream-0.1.2.tgz",
        "integrity": "sha1-R+Y/evVa+m+S4VAOaQ64uFKcCZo=",
        "dev": true
      },
      "js-tokens": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
        "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
        "dev": true
      },
      "js-yaml": {
        "version": "3.14.0",
        "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.14.0.tgz",
        "integrity": "sha512-/4IbIeHcD9VMHFqDR/gQ7EdZdLimOvW2DdcxFjdyyZ9NsbS+ccrXqVWDtab/lRl5AlUqmpBx8EhPaWR+OtY17A==",
        "dev": true,
        "requires": {
          "argparse": "^1.0.7",
          "esprima": "^4.0.0"
        },
        "dependencies": {
          "esprima": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
            "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==",
            "dev": true
          }
        }
      },
      "jsbn": {
        "version": "0.1.1",
        "resolved": "https://registry.npmjs.org/jsbn/-/jsbn-0.1.1.tgz",
        "integrity": "sha1-peZUwuWi3rXyAdls77yoDA7y9RM=",
        "dev": true
      },
      "jsdom": {
        "version": "14.1.0",
        "resolved": "https://registry.npmjs.org/jsdom/-/jsdom-14.1.0.tgz",
        "integrity": "sha512-O901mfJSuTdwU2w3Sn+74T+RnDVP+FuV5fH8tcPWyqrseRAb0s5xOtPgCFiPOtLcyK7CLIJwPyD83ZqQWvA5ng==",
        "dev": true,
        "requires": {
          "abab": "^2.0.0",
          "acorn": "^6.0.4",
          "acorn-globals": "^4.3.0",
          "array-equal": "^1.0.0",
          "cssom": "^0.3.4",
          "cssstyle": "^1.1.1",
          "data-urls": "^1.1.0",
          "domexception": "^1.0.1",
          "escodegen": "^1.11.0",
          "html-encoding-sniffer": "^1.0.2",
          "nwsapi": "^2.1.3",
          "parse5": "5.1.0",
          "pn": "^1.1.0",
          "request": "^2.88.0",
          "request-promise-native": "^1.0.5",
          "saxes": "^3.1.9",
          "symbol-tree": "^3.2.2",
          "tough-cookie": "^2.5.0",
          "w3c-hr-time": "^1.0.1",
          "w3c-xmlserializer": "^1.1.2",
          "webidl-conversions": "^4.0.2",
          "whatwg-encoding": "^1.0.5",
          "whatwg-mimetype": "^2.3.0",
          "whatwg-url": "^7.0.0",
          "ws": "^6.1.2",
          "xml-name-validator": "^3.0.0"
        },
        "dependencies": {
          "acorn": {
            "version": "6.4.1",
            "resolved": "https://registry.npmjs.org/acorn/-/acorn-6.4.1.tgz",
            "integrity": "sha512-ZVA9k326Nwrj3Cj9jlh3wGFutC2ZornPNARZwsNYqQYgN0EsV2d53w5RN/co65Ohn4sUAUtb1rSUAOD6XN9idA==",
            "dev": true
          },
          "escodegen": {
            "version": "1.14.3",
            "resolved": "https://registry.npmjs.org/escodegen/-/escodegen-1.14.3.tgz",
            "integrity": "sha512-qFcX0XJkdg+PB3xjZZG/wKSuT1PnQWx57+TVSjIMmILd2yC/6ByYElPwJnslDsuWuSAp4AwJGumarAAmJch5Kw==",
            "dev": true,
            "requires": {
              "esprima": "^4.0.1",
              "estraverse": "^4.2.0",
              "esutils": "^2.0.2",
              "optionator": "^0.8.1",
              "source-map": "~0.6.1"
            }
          },
          "esprima": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
            "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==",
            "dev": true
          },
          "ws": {
            "version": "6.2.1",
            "resolved": "https://registry.npmjs.org/ws/-/ws-6.2.1.tgz",
            "integrity": "sha512-GIyAXC2cB7LjvpgMt9EKS2ldqr0MTrORaleiOno6TweZ6r3TKtoFQWay/2PceJ3RuBasOHzXNn5Lrw1X0bEjqA==",
            "dev": true,
            "requires": {
              "async-limiter": "~1.0.0"
            }
          }
        }
      },
      "jsesc": {
        "version": "2.5.2",
        "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-2.5.2.tgz",
        "integrity": "sha512-OYu7XEzjkCQ3C5Ps3QIZsQfNpqoJyZZA99wd9aWd05NCtC5pWOkShK2mkL6HXQR6/Cy2lbNdPlZBpuQHXE63gA==",
        "dev": true
      },
      "json-parse-better-errors": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/json-parse-better-errors/-/json-parse-better-errors-1.0.2.tgz",
        "integrity": "sha512-mrqyZKfX5EhL7hvqcV6WG1yYjnjeuYDzDhhcAAUrq8Po85NBQBJP+ZDUT75qZQ98IkUoBqdkExkukOU7Ts2wrw==",
        "dev": true
      },
      "json-schema": {
        "version": "0.2.3",
        "resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.2.3.tgz",
        "integrity": "sha1-tIDIkuWaLwWVTOcnvT8qTogvnhM=",
        "dev": true
      },
      "json-schema-traverse": {
        "version": "0.4.1",
        "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
        "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
        "dev": true
      },
      "json-stringify-safe": {
        "version": "5.0.1",
        "resolved": "https://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz",
        "integrity": "sha1-Epai1Y/UXxmg9s4B1lcB4sc1tus=",
        "dev": true
      },
      "json5": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.1.tgz",
        "integrity": "sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==",
        "dev": true,
        "requires": {
          "minimist": "^1.2.0"
        }
      },
      "jsprim": {
        "version": "1.4.1",
        "resolved": "https://registry.npmjs.org/jsprim/-/jsprim-1.4.1.tgz",
        "integrity": "sha1-MT5mvB5cwG5Di8G3SZwuXFastqI=",
        "dev": true,
        "requires": {
          "assert-plus": "1.0.0",
          "extsprintf": "1.3.0",
          "json-schema": "0.2.3",
          "verror": "1.10.0"
        }
      },
      "kind-of": {
        "version": "6.0.3",
        "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
        "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
        "dev": true
      },
      "leaflet": {
        "version": "1.6.0",
        "resolved": "https://registry.npmjs.org/leaflet/-/leaflet-1.6.0.tgz",
        "integrity": "sha512-CPkhyqWUKZKFJ6K8umN5/D2wrJ2+/8UIpXppY7QDnUZW5bZL5+SEI2J7GBpwh4LIupOKqbNSQXgqmrEJopHVNQ=="
      },
      "leven": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/leven/-/leven-3.1.0.tgz",
        "integrity": "sha512-qsda+H8jTaUaN/x5vzW2rzc+8Rw4TAQ/4KjB46IwK5VH+IlVeeeje/EoZRpiXvIqjFgK84QffqPztGI3VBLG1A==",
        "dev": true
      },
      "levenary": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/levenary/-/levenary-1.1.1.tgz",
        "integrity": "sha512-mkAdOIt79FD6irqjYSs4rdbnlT5vRonMEvBVPVb3XmevfS8kgRXwfes0dhPdEtzTWD/1eNE/Bm/G1iRt6DcnQQ==",
        "dev": true,
        "requires": {
          "leven": "^3.1.0"
        }
      },
      "levn": {
        "version": "0.3.0",
        "resolved": "https://registry.npmjs.org/levn/-/levn-0.3.0.tgz",
        "integrity": "sha1-OwmSTt+fCDwEkP3UwLxEIeBHZO4=",
        "dev": true,
        "requires": {
          "prelude-ls": "~1.1.2",
          "type-check": "~0.3.2"
        }
      },
      "lodash": {
        "version": "4.17.20",
        "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.20.tgz",
        "integrity": "sha512-PlhdFcillOINfeV7Ni6oF1TAEayyZBoZ8bcshTHqOYJYlrqzRK5hagpagky5o4HfCzzd1TRkXPMFq6cKk9rGmA==",
        "dev": true
      },
      "lodash-es": {
        "version": "4.17.15",
        "resolved": "https://registry.npmjs.org/lodash-es/-/lodash-es-4.17.15.tgz",
        "integrity": "sha512-rlrc3yU3+JNOpZ9zj5pQtxnx2THmvRykwL4Xlxoa8I9lHBlVbbyPhgyPMioxVZ4NqyxaVVtaJnzsyOidQIhyyQ=="
      },
      "lodash.clone": {
        "version": "4.5.0",
        "resolved": "https://registry.npmjs.org/lodash.clone/-/lodash.clone-4.5.0.tgz",
        "integrity": "sha1-GVhwRQ9aExkkeN9Lw9I9LeoZB7Y=",
        "dev": true
      },
      "lodash.memoize": {
        "version": "4.1.2",
        "resolved": "https://registry.npmjs.org/lodash.memoize/-/lodash.memoize-4.1.2.tgz",
        "integrity": "sha1-vMbEmkKihA7Zl/Mj6tpezRguC/4=",
        "dev": true
      },
      "lodash.sortby": {
        "version": "4.7.0",
        "resolved": "https://registry.npmjs.org/lodash.sortby/-/lodash.sortby-4.7.0.tgz",
        "integrity": "sha1-7dFMgk4sycHgsKG0K7UhBRakJDg=",
        "dev": true
      },
      "lodash.uniq": {
        "version": "4.5.0",
        "resolved": "https://registry.npmjs.org/lodash.uniq/-/lodash.uniq-4.5.0.tgz",
        "integrity": "sha1-0CJTc662Uq3BvILklFM5qEJ1R3M=",
        "dev": true
      },
      "log-symbols": {
        "version": "2.2.0",
        "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-2.2.0.tgz",
        "integrity": "sha512-VeIAFslyIerEJLXHziedo2basKbMKtTw3vfn5IzG0XTjhAVEJyNHnL2p7vc+wBDSdQuUpNw3M2u6xb9QsAY5Eg==",
        "dev": true,
        "requires": {
          "chalk": "^2.0.1"
        }
      },
      "loose-envify": {
        "version": "1.4.0",
        "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
        "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
        "dev": true,
        "requires": {
          "js-tokens": "^3.0.0 || ^4.0.0"
        }
      },
      "magic-string": {
        "version": "0.22.5",
        "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.22.5.tgz",
        "integrity": "sha512-oreip9rJZkzvA8Qzk9HFs8fZGF/u7H/gtrE8EN6RjKJ9kh2HlC+yQ2QezifqTZfGyiuAV0dRv5a+y/8gBb1m9w==",
        "dev": true,
        "requires": {
          "vlq": "^0.2.2"
        }
      },
      "map-cache": {
        "version": "0.2.2",
        "resolved": "https://registry.npmjs.org/map-cache/-/map-cache-0.2.2.tgz",
        "integrity": "sha1-wyq9C9ZSXZsFFkW7TyasXcmKDb8=",
        "dev": true
      },
      "map-visit": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/map-visit/-/map-visit-1.0.0.tgz",
        "integrity": "sha1-7Nyo8TFE5mDxtb1B8S80edmN+48=",
        "dev": true,
        "requires": {
          "object-visit": "^1.0.0"
        }
      },
      "md5.js": {
        "version": "1.3.5",
        "resolved": "https://registry.npmjs.org/md5.js/-/md5.js-1.3.5.tgz",
        "integrity": "sha512-xitP+WxNPcTTOgnTJcrhM0xvdPepipPSf3I8EIpGKeFLjt3PlJLIDG3u8EX53ZIubkb+5U2+3rELYpEhHhzdkg==",
        "dev": true,
        "requires": {
          "hash-base": "^3.0.0",
          "inherits": "^2.0.1",
          "safe-buffer": "^5.1.2"
        }
      },
      "mdn-data": {
        "version": "2.0.4",
        "resolved": "https://registry.npmjs.org/mdn-data/-/mdn-data-2.0.4.tgz",
        "integrity": "sha512-iV3XNKw06j5Q7mi6h+9vbx23Tv7JkjEVgKHW4pimwyDGWm0OIQntJJ+u1C6mg6mK1EaTv42XQ7w76yuzH7M2cA==",
        "dev": true
      },
      "merge-source-map": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/merge-source-map/-/merge-source-map-1.0.4.tgz",
        "integrity": "sha1-pd5GU42uhNQRTMXqArR3KmNGcB8=",
        "dev": true,
        "requires": {
          "source-map": "^0.5.6"
        },
        "dependencies": {
          "source-map": {
            "version": "0.5.7",
            "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
            "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
            "dev": true
          }
        }
      },
      "merge2": {
        "version": "1.4.1",
        "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
        "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
        "dev": true
      },
      "micromatch": {
        "version": "3.1.10",
        "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
        "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
        "dev": true,
        "requires": {
          "arr-diff": "^4.0.0",
          "array-unique": "^0.3.2",
          "braces": "^2.3.1",
          "define-property": "^2.0.2",
          "extend-shallow": "^3.0.2",
          "extglob": "^2.0.4",
          "fragment-cache": "^0.2.1",
          "kind-of": "^6.0.2",
          "nanomatch": "^1.2.9",
          "object.pick": "^1.3.0",
          "regex-not": "^1.0.0",
          "snapdragon": "^0.8.1",
          "to-regex": "^3.0.2"
        }
      },
      "miller-rabin": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/miller-rabin/-/miller-rabin-4.0.1.tgz",
        "integrity": "sha512-115fLhvZVqWwHPbClyntxEVfVDfl9DLLTuJvq3g2O/Oxi8AiNouAHvDSzHS0viUJc+V5vm3eq91Xwqn9dp4jRA==",
        "dev": true,
        "requires": {
          "bn.js": "^4.0.0",
          "brorand": "^1.0.1"
        },
        "dependencies": {
          "bn.js": {
            "version": "4.11.9",
            "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
            "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
            "dev": true
          }
        }
      },
      "mime": {
        "version": "1.6.0",
        "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
        "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==",
        "dev": true
      },
      "mime-db": {
        "version": "1.44.0",
        "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.44.0.tgz",
        "integrity": "sha512-/NOTfLrsPBVeH7YtFPgsVWveuL+4SjjYxaQ1xtM1KMFj7HdxlBlxeyNLzhyJVx7r4rZGJAZ/6lkKCitSc/Nmpg==",
        "dev": true
      },
      "mime-types": {
        "version": "2.1.27",
        "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.27.tgz",
        "integrity": "sha512-JIhqnCasI9yD+SsmkquHBxTSEuZdQX5BuQnS2Vc7puQQQ+8yiP5AY5uWhpdv4YL4VM5c6iliiYWPgJ/nJQLp7w==",
        "dev": true,
        "requires": {
          "mime-db": "1.44.0"
        }
      },
      "mimic-fn": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-1.2.0.tgz",
        "integrity": "sha512-jf84uxzwiuiIVKiOLpfYk7N46TSy8ubTonmneY9vrpHNAnp0QBt2BxWV9dO3/j+BoVAb+a5G6YDPW3M5HOdMWQ==",
        "dev": true
      },
      "minimalistic-assert": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/minimalistic-assert/-/minimalistic-assert-1.0.1.tgz",
        "integrity": "sha512-UtJcAD4yEaGtjPezWuO9wC4nwUnVH/8/Im3yEHQP4b67cXlD/Qr9hdITCU1xDbSEXg2XKNaP8jsReV7vQd00/A==",
        "dev": true
      },
      "minimalistic-crypto-utils": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/minimalistic-crypto-utils/-/minimalistic-crypto-utils-1.0.1.tgz",
        "integrity": "sha1-9sAMHAsIIkblxNmd+4x8CDsrWCo=",
        "dev": true
      },
      "minimatch": {
        "version": "3.0.4",
        "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
        "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
        "dev": true,
        "requires": {
          "brace-expansion": "^1.1.7"
        }
      },
      "minimist": {
        "version": "1.2.5",
        "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.5.tgz",
        "integrity": "sha512-FM9nNUYrRBAELZQT3xeZQ7fmMOBg6nWNmJKTcgsJeaLstP/UODVpGsr5OhXhhXg6f+qtJ8uiZ+PUxkDWcgIXLw==",
        "dev": true
      },
      "mixin-deep": {
        "version": "1.3.2",
        "resolved": "https://registry.npmjs.org/mixin-deep/-/mixin-deep-1.3.2.tgz",
        "integrity": "sha512-WRoDn//mXBiJ1H40rqa3vH0toePwSsGb45iInWlTySa+Uu4k3tYUSxa2v1KqAiLtvlrSzaExqS1gtk96A9zvEA==",
        "dev": true,
        "requires": {
          "for-in": "^1.0.2",
          "is-extendable": "^1.0.1"
        },
        "dependencies": {
          "is-extendable": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
            "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
            "dev": true,
            "requires": {
              "is-plain-object": "^2.0.4"
            }
          }
        }
      },
      "mkdirp": {
        "version": "0.5.5",
        "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
        "integrity": "sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==",
        "dev": true,
        "requires": {
          "minimist": "^1.2.5"
        }
      },
      "ms": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
        "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
        "dev": true
      },
      "nan": {
        "version": "2.14.1",
        "resolved": "https://registry.npmjs.org/nan/-/nan-2.14.1.tgz",
        "integrity": "sha512-isWHgVjnFjh2x2yuJ/tj3JbwoHu3UC2dX5G/88Cm24yB6YopVgxvBObDY7n5xW6ExmFhJpSEQqFPvq9zaXc8Jw==",
        "dev": true,
        "optional": true
      },
      "nanomatch": {
        "version": "1.2.13",
        "resolved": "https://registry.npmjs.org/nanomatch/-/nanomatch-1.2.13.tgz",
        "integrity": "sha512-fpoe2T0RbHwBTBUOftAfBPaDEi06ufaUai0mE6Yn1kacc3SnTErfb/h+X94VXzI64rKFHYImXSvdwGGCmwOqCA==",
        "dev": true,
        "requires": {
          "arr-diff": "^4.0.0",
          "array-unique": "^0.3.2",
          "define-property": "^2.0.2",
          "extend-shallow": "^3.0.2",
          "fragment-cache": "^0.2.1",
          "is-windows": "^1.0.2",
          "kind-of": "^6.0.2",
          "object.pick": "^1.3.0",
          "regex-not": "^1.0.0",
          "snapdragon": "^0.8.1",
          "to-regex": "^3.0.1"
        }
      },
      "nice-try": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/nice-try/-/nice-try-1.0.5.tgz",
        "integrity": "sha512-1nh45deeb5olNY7eX82BkPO7SSxR5SSYJiPTrTdFUVYwAl8CKMA5N9PjTYkHiRjisVcxcQ1HXdLhx2qxxJzLNQ==",
        "dev": true
      },
      "node-addon-api": {
        "version": "1.7.2",
        "resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-1.7.2.tgz",
        "integrity": "sha512-ibPK3iA+vaY1eEjESkQkM0BbCqFOaZMiXRTtdB0u7b4djtY6JnsjvPdUHVMg6xQt3B8fpTTWHI9A+ADjM9frzg==",
        "dev": true
      },
      "node-forge": {
        "version": "0.7.6",
        "resolved": "https://registry.npmjs.org/node-forge/-/node-forge-0.7.6.tgz",
        "integrity": "sha512-sol30LUpz1jQFBjOKwbjxijiE3b6pjd74YwfD0fJOKPjF+fONKb2Yg8rYgS6+bK6VDl+/wfr4IYpC7jDzLUIfw==",
        "dev": true
      },
      "node-libs-browser": {
        "version": "2.2.1",
        "resolved": "https://registry.npmjs.org/node-libs-browser/-/node-libs-browser-2.2.1.tgz",
        "integrity": "sha512-h/zcD8H9kaDZ9ALUWwlBUDo6TKF8a7qBSCSEGfjTVIYeqsioSKaAX+BN7NgiMGp6iSIXZ3PxgCu8KS3b71YK5Q==",
        "dev": true,
        "requires": {
          "assert": "^1.1.1",
          "browserify-zlib": "^0.2.0",
          "buffer": "^4.3.0",
          "console-browserify": "^1.1.0",
          "constants-browserify": "^1.0.0",
          "crypto-browserify": "^3.11.0",
          "domain-browser": "^1.1.1",
          "events": "^3.0.0",
          "https-browserify": "^1.0.0",
          "os-browserify": "^0.3.0",
          "path-browserify": "0.0.1",
          "process": "^0.11.10",
          "punycode": "^1.2.4",
          "querystring-es3": "^0.2.0",
          "readable-stream": "^2.3.3",
          "stream-browserify": "^2.0.1",
          "stream-http": "^2.7.2",
          "string_decoder": "^1.0.0",
          "timers-browserify": "^2.0.4",
          "tty-browserify": "0.0.0",
          "url": "^0.11.0",
          "util": "^0.11.0",
          "vm-browserify": "^1.0.1"
        },
        "dependencies": {
          "punycode": {
            "version": "1.4.1",
            "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.4.1.tgz",
            "integrity": "sha1-wNWmOycYgArY4esPpSachN1BhF4=",
            "dev": true
          }
        }
      },
      "node-releases": {
        "version": "1.1.60",
        "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-1.1.60.tgz",
        "integrity": "sha512-gsO4vjEdQaTusZAEebUWp2a5d7dF5DYoIpDG7WySnk7BuZDW+GPpHXoXXuYawRBr/9t5q54tirPz79kFIWg4dA==",
        "dev": true
      },
      "normalize-html-whitespace": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/normalize-html-whitespace/-/normalize-html-whitespace-1.0.0.tgz",
        "integrity": "sha512-9ui7CGtOOlehQu0t/OhhlmDyc71mKVlv+4vF+me4iZLPrNtRL2xoquEdfZxasC/bdQi/Hr3iTrpyRKIG+ocabA==",
        "dev": true
      },
      "normalize-path": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
        "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
        "dev": true
      },
      "normalize-url": {
        "version": "3.3.0",
        "resolved": "https://registry.npmjs.org/normalize-url/-/normalize-url-3.3.0.tgz",
        "integrity": "sha512-U+JJi7duF1o+u2pynbp2zXDW2/PADgC30f0GsHZtRh+HOcXHnw137TrNlyxxRvWW5fjKd3bcLHPxofWuCjaeZg==",
        "dev": true
      },
      "nth-check": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/nth-check/-/nth-check-1.0.2.tgz",
        "integrity": "sha512-WeBOdju8SnzPN5vTUJYxYUxLeXpCaVP5i5e0LF8fg7WORF2Wd7wFX/pk0tYZk7s8T+J7VLy0Da6J1+wCT0AtHg==",
        "dev": true,
        "requires": {
          "boolbase": "~1.0.0"
        }
      },
      "nwsapi": {
        "version": "2.2.0",
        "resolved": "https://registry.npmjs.org/nwsapi/-/nwsapi-2.2.0.tgz",
        "integrity": "sha512-h2AatdwYH+JHiZpv7pt/gSX1XoRGb7L/qSIeuqA6GwYoF9w1vP1cw42TO0aI2pNyshRK5893hNSl+1//vHK7hQ==",
        "dev": true
      },
      "oauth-sign": {
        "version": "0.9.0",
        "resolved": "https://registry.npmjs.org/oauth-sign/-/oauth-sign-0.9.0.tgz",
        "integrity": "sha512-fexhUFFPTGV8ybAtSIGbV6gOkSv8UtRbDBnAyLQw4QPKkgNlsH2ByPGtMUqdWkos6YCRmAqViwgZrJc/mRDzZQ==",
        "dev": true
      },
      "object-assign": {
        "version": "4.1.1",
        "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
        "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM=",
        "dev": true
      },
      "object-copy": {
        "version": "0.1.0",
        "resolved": "https://registry.npmjs.org/object-copy/-/object-copy-0.1.0.tgz",
        "integrity": "sha1-fn2Fi3gb18mRpBupde04EnVOmYw=",
        "dev": true,
        "requires": {
          "copy-descriptor": "^0.1.0",
          "define-property": "^0.2.5",
          "kind-of": "^3.0.3"
        },
        "dependencies": {
          "define-property": {
            "version": "0.2.5",
            "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
            "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
            "dev": true,
            "requires": {
              "is-descriptor": "^0.1.0"
            }
          },
          "kind-of": {
            "version": "3.2.2",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
            "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
            "dev": true,
            "requires": {
              "is-buffer": "^1.1.5"
            }
          }
        }
      },
      "object-inspect": {
        "version": "1.4.1",
        "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.4.1.tgz",
        "integrity": "sha512-wqdhLpfCUbEsoEwl3FXwGyv8ief1k/1aUdIPCqVnupM6e8l63BEJdiF/0swtn04/8p05tG/T0FrpTlfwvljOdw==",
        "dev": true
      },
      "object-keys": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
        "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
        "dev": true
      },
      "object-visit": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/object-visit/-/object-visit-1.0.1.tgz",
        "integrity": "sha1-95xEk68MU3e1n+OdOV5BBC3QRbs=",
        "dev": true,
        "requires": {
          "isobject": "^3.0.0"
        }
      },
      "object.assign": {
        "version": "4.1.0",
        "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.0.tgz",
        "integrity": "sha512-exHJeq6kBKj58mqGyTQ9DFvrZC/eR6OwxzoM9YRoGBqrXYonaFyGiFMuc9VZrXf7DarreEwMpurG3dd+CNyW5w==",
        "dev": true,
        "requires": {
          "define-properties": "^1.1.2",
          "function-bind": "^1.1.1",
          "has-symbols": "^1.0.0",
          "object-keys": "^1.0.11"
        }
      },
      "object.getownpropertydescriptors": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/object.getownpropertydescriptors/-/object.getownpropertydescriptors-2.1.0.tgz",
        "integrity": "sha512-Z53Oah9A3TdLoblT7VKJaTDdXdT+lQO+cNpKVnya5JDe9uLvzu1YyY1yFDFrcxrlRgWrEFH0jJtD/IbuwjcEVg==",
        "dev": true,
        "requires": {
          "define-properties": "^1.1.3",
          "es-abstract": "^1.17.0-next.1"
        }
      },
      "object.pick": {
        "version": "1.3.0",
        "resolved": "https://registry.npmjs.org/object.pick/-/object.pick-1.3.0.tgz",
        "integrity": "sha1-h6EKxMFpS9Lhy/U1kaZhQftd10c=",
        "dev": true,
        "requires": {
          "isobject": "^3.0.1"
        }
      },
      "object.values": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/object.values/-/object.values-1.1.1.tgz",
        "integrity": "sha512-WTa54g2K8iu0kmS/us18jEmdv1a4Wi//BZ/DTVYEcH0XhLM5NYdpDHja3gt57VrZLcNAO2WGA+KpWsDBaHt6eA==",
        "dev": true,
        "requires": {
          "define-properties": "^1.1.3",
          "es-abstract": "^1.17.0-next.1",
          "function-bind": "^1.1.1",
          "has": "^1.0.3"
        }
      },
      "on-finished": {
        "version": "2.3.0",
        "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
        "integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",
        "dev": true,
        "requires": {
          "ee-first": "1.1.1"
        }
      },
      "once": {
        "version": "1.4.0",
        "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
        "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
        "dev": true,
        "requires": {
          "wrappy": "1"
        }
      },
      "onetime": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/onetime/-/onetime-2.0.1.tgz",
        "integrity": "sha1-BnQoIw/WdEOyeUsiu6UotoZ5YtQ=",
        "dev": true,
        "requires": {
          "mimic-fn": "^1.0.0"
        }
      },
      "opn": {
        "version": "5.5.0",
        "resolved": "https://registry.npmjs.org/opn/-/opn-5.5.0.tgz",
        "integrity": "sha512-PqHpggC9bLV0VeWcdKhkpxY+3JTzetLSqTCWL/z/tFIbI6G8JCjondXklT1JinczLz2Xib62sSp0T/gKT4KksA==",
        "dev": true,
        "requires": {
          "is-wsl": "^1.1.0"
        }
      },
      "optionator": {
        "version": "0.8.3",
        "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.8.3.tgz",
        "integrity": "sha512-+IW9pACdk3XWmmTXG8m3upGUJst5XRGzxMRjXzAuJ1XnIFNvfhjjIuYkDvysnPQ7qzqVzLt78BCruntqRhWQbA==",
        "dev": true,
        "requires": {
          "deep-is": "~0.1.3",
          "fast-levenshtein": "~2.0.6",
          "levn": "~0.3.0",
          "prelude-ls": "~1.1.2",
          "type-check": "~0.3.2",
          "word-wrap": "~1.2.3"
        }
      },
      "ora": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/ora/-/ora-2.1.0.tgz",
        "integrity": "sha512-hNNlAd3gfv/iPmsNxYoAPLvxg7HuPozww7fFonMZvL84tP6Ox5igfk5j/+a9rtJJwqMgKK+JgWsAQik5o0HTLA==",
        "dev": true,
        "requires": {
          "chalk": "^2.3.1",
          "cli-cursor": "^2.1.0",
          "cli-spinners": "^1.1.0",
          "log-symbols": "^2.2.0",
          "strip-ansi": "^4.0.0",
          "wcwidth": "^1.0.1"
        }
      },
      "os-browserify": {
        "version": "0.3.0",
        "resolved": "https://registry.npmjs.org/os-browserify/-/os-browserify-0.3.0.tgz",
        "integrity": "sha1-hUNzx/XCMVkU/Jv8a9gjj92h7Cc=",
        "dev": true
      },
      "pako": {
        "version": "0.2.9",
        "resolved": "https://registry.npmjs.org/pako/-/pako-0.2.9.tgz",
        "integrity": "sha1-8/dSL073gjSNqBYbrZ7P1Rv4OnU=",
        "dev": true
      },
      "parcel": {
        "version": "1.12.4",
        "resolved": "https://registry.npmjs.org/parcel/-/parcel-1.12.4.tgz",
        "integrity": "sha512-qfc74e2/R4pCoU6L/ZZnK9k3iDS6ir4uHea0e9th9w52eehcAGf2ido/iABq9PBXdsIOe4NSY3oUm7Khe7+S3w==",
        "dev": true,
        "requires": {
          "@babel/code-frame": "^7.0.0",
          "@babel/core": "^7.4.4",
          "@babel/generator": "^7.4.4",
          "@babel/parser": "^7.4.4",
          "@babel/plugin-transform-flow-strip-types": "^7.4.4",
          "@babel/plugin-transform-modules-commonjs": "^7.4.4",
          "@babel/plugin-transform-react-jsx": "^7.0.0",
          "@babel/preset-env": "^7.4.4",
          "@babel/runtime": "^7.4.4",
          "@babel/template": "^7.4.4",
          "@babel/traverse": "^7.4.4",
          "@babel/types": "^7.4.4",
          "@iarna/toml": "^2.2.0",
          "@parcel/fs": "^1.11.0",
          "@parcel/logger": "^1.11.1",
          "@parcel/utils": "^1.11.0",
          "@parcel/watcher": "^1.12.1",
          "@parcel/workers": "^1.11.0",
          "ansi-to-html": "^0.6.4",
          "babylon-walk": "^1.0.2",
          "browserslist": "^4.1.0",
          "chalk": "^2.1.0",
          "clone": "^2.1.1",
          "command-exists": "^1.2.6",
          "commander": "^2.11.0",
          "core-js": "^2.6.5",
          "cross-spawn": "^6.0.4",
          "css-modules-loader-core": "^1.1.0",
          "cssnano": "^4.0.0",
          "deasync": "^0.1.14",
          "dotenv": "^5.0.0",
          "dotenv-expand": "^5.1.0",
          "envinfo": "^7.3.1",
          "fast-glob": "^2.2.2",
          "filesize": "^3.6.0",
          "get-port": "^3.2.0",
          "htmlnano": "^0.2.2",
          "is-glob": "^4.0.0",
          "is-url": "^1.2.2",
          "js-yaml": "^3.10.0",
          "json5": "^1.0.1",
          "micromatch": "^3.0.4",
          "mkdirp": "^0.5.1",
          "node-forge": "^0.7.1",
          "node-libs-browser": "^2.0.0",
          "opn": "^5.1.0",
          "postcss": "^7.0.11",
          "postcss-value-parser": "^3.3.1",
          "posthtml": "^0.11.2",
          "posthtml-parser": "^0.4.0",
          "posthtml-render": "^1.1.3",
          "resolve": "^1.4.0",
          "semver": "^5.4.1",
          "serialize-to-js": "^3.0.0",
          "serve-static": "^1.12.4",
          "source-map": "0.6.1",
          "terser": "^3.7.3",
          "v8-compile-cache": "^2.0.0",
          "ws": "^5.1.1"
        },
        "dependencies": {
          "core-js": {
            "version": "2.6.11",
            "resolved": "https://registry.npmjs.org/core-js/-/core-js-2.6.11.tgz",
            "integrity": "sha512-5wjnpaT/3dV+XB4borEsnAYQchn00XSgTAWKDkEqv+K8KevjbzmofK6hfJ9TZIlpj2N0xQpazy7PiRQiWHqzWg==",
            "dev": true
          }
        }
      },
      "parse-asn1": {
        "version": "5.1.6",
        "resolved": "https://registry.npmjs.org/parse-asn1/-/parse-asn1-5.1.6.tgz",
        "integrity": "sha512-RnZRo1EPU6JBnra2vGHj0yhp6ebyjBZpmUCLHWiFhxlzvBCCpAuZ7elsBp1PVAbQN0/04VD/19rfzlBSwLstMw==",
        "dev": true,
        "requires": {
          "asn1.js": "^5.2.0",
          "browserify-aes": "^1.0.0",
          "evp_bytestokey": "^1.0.0",
          "pbkdf2": "^3.0.3",
          "safe-buffer": "^5.1.1"
        }
      },
      "parse-json": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-4.0.0.tgz",
        "integrity": "sha1-vjX1Qlvh9/bHRxhPmKeIy5lHfuA=",
        "dev": true,
        "requires": {
          "error-ex": "^1.3.1",
          "json-parse-better-errors": "^1.0.1"
        }
      },
      "parse5": {
        "version": "5.1.0",
        "resolved": "https://registry.npmjs.org/parse5/-/parse5-5.1.0.tgz",
        "integrity": "sha512-fxNG2sQjHvlVAYmzBZS9YlDp6PTSSDwa98vkD4QgVDDCAo84z5X1t5XyJQ62ImdLXx5NdIIfihey6xpum9/gRQ==",
        "dev": true
      },
      "parseurl": {
        "version": "1.3.3",
        "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
        "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
        "dev": true
      },
      "pascalcase": {
        "version": "0.1.1",
        "resolved": "https://registry.npmjs.org/pascalcase/-/pascalcase-0.1.1.tgz",
        "integrity": "sha1-s2PlXoAGym/iF4TS2yK9FdeRfxQ=",
        "dev": true
      },
      "path-browserify": {
        "version": "0.0.1",
        "resolved": "https://registry.npmjs.org/path-browserify/-/path-browserify-0.0.1.tgz",
        "integrity": "sha512-BapA40NHICOS+USX9SN4tyhq+A2RrN/Ws5F0Z5aMHDp98Fl86lX8Oti8B7uN93L4Ifv4fHOEA+pQw87gmMO/lQ==",
        "dev": true
      },
      "path-dirname": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/path-dirname/-/path-dirname-1.0.2.tgz",
        "integrity": "sha1-zDPSTVJeCZpTiMAzbG4yuRYGCeA=",
        "dev": true
      },
      "path-is-absolute": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
        "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18=",
        "dev": true
      },
      "path-key": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz",
        "integrity": "sha1-QRyttXTFoUDTpLGRDUDYDMn0C0A=",
        "dev": true
      },
      "path-parse": {
        "version": "1.0.6",
        "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.6.tgz",
        "integrity": "sha512-GSmOT2EbHrINBf9SR7CDELwlJ8AENk3Qn7OikK4nFYAu3Ote2+JYNVvkpAEQm3/TLNEJFD/xZJjzyxg3KBWOzw==",
        "dev": true
      },
      "pbkdf2": {
        "version": "3.1.1",
        "resolved": "https://registry.npmjs.org/pbkdf2/-/pbkdf2-3.1.1.tgz",
        "integrity": "sha512-4Ejy1OPxi9f2tt1rRV7Go7zmfDQ+ZectEQz3VGUQhgq62HtIRPDyG/JtnwIxs6x3uNMwo2V7q1fMvKjb+Tnpqg==",
        "dev": true,
        "requires": {
          "create-hash": "^1.1.2",
          "create-hmac": "^1.1.4",
          "ripemd160": "^2.0.1",
          "safe-buffer": "^5.0.1",
          "sha.js": "^2.4.8"
        }
      },
      "performance-now": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
        "integrity": "sha1-Ywn04OX6kT7BxpMHrjZLSzd8nns=",
        "dev": true
      },
      "physical-cpu-count": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/physical-cpu-count/-/physical-cpu-count-2.0.0.tgz",
        "integrity": "sha1-GN4vl+S/epVRrXURlCtUlverpmA=",
        "dev": true
      },
      "pn": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/pn/-/pn-1.1.0.tgz",
        "integrity": "sha512-2qHaIQr2VLRFoxe2nASzsV6ef4yOOH+Fi9FBOVH6cqeSgUnoyySPZkxzLuzd+RYOQTRpROA0ztTMqxROKSb/nA==",
        "dev": true
      },
      "posix-character-classes": {
        "version": "0.1.1",
        "resolved": "https://registry.npmjs.org/posix-character-classes/-/posix-character-classes-0.1.1.tgz",
        "integrity": "sha1-AerA/jta9xoqbAL+q7jB/vfgDqs=",
        "dev": true
      },
      "postcss": {
        "version": "7.0.32",
        "resolved": "https://registry.npmjs.org/postcss/-/postcss-7.0.32.tgz",
        "integrity": "sha512-03eXong5NLnNCD05xscnGKGDZ98CyzoqPSMjOe6SuoQY7Z2hIj0Ld1g/O/UQRuOle2aRtiIRDg9tDcTGAkLfKw==",
        "dev": true,
        "requires": {
          "chalk": "^2.4.2",
          "source-map": "^0.6.1",
          "supports-color": "^6.1.0"
        },
        "dependencies": {
          "supports-color": {
            "version": "6.1.0",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
            "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
            "dev": true,
            "requires": {
              "has-flag": "^3.0.0"
            }
          }
        }
      },
      "postcss-calc": {
        "version": "7.0.3",
        "resolved": "https://registry.npmjs.org/postcss-calc/-/postcss-calc-7.0.3.tgz",
        "integrity": "sha512-IB/EAEmZhIMEIhG7Ov4x+l47UaXOS1n2f4FBUk/aKllQhtSCxWhTzn0nJgkqN7fo/jcWySvWTSB6Syk9L+31bA==",
        "dev": true,
        "requires": {
          "postcss": "^7.0.27",
          "postcss-selector-parser": "^6.0.2",
          "postcss-value-parser": "^4.0.2"
        },
        "dependencies": {
          "postcss-value-parser": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.1.0.tgz",
            "integrity": "sha512-97DXOFbQJhk71ne5/Mt6cOu6yxsSfM0QGQyl0L25Gca4yGWEGJaig7l7gbCX623VqTBNGLRLaVUCnNkcedlRSQ==",
            "dev": true
          }
        }
      },
      "postcss-colormin": {
        "version": "4.0.3",
        "resolved": "https://registry.npmjs.org/postcss-colormin/-/postcss-colormin-4.0.3.tgz",
        "integrity": "sha512-WyQFAdDZpExQh32j0U0feWisZ0dmOtPl44qYmJKkq9xFWY3p+4qnRzCHeNrkeRhwPHz9bQ3mo0/yVkaply0MNw==",
        "dev": true,
        "requires": {
          "browserslist": "^4.0.0",
          "color": "^3.0.0",
          "has": "^1.0.0",
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0"
        }
      },
      "postcss-convert-values": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/postcss-convert-values/-/postcss-convert-values-4.0.1.tgz",
        "integrity": "sha512-Kisdo1y77KUC0Jmn0OXU/COOJbzM8cImvw1ZFsBgBgMgb1iL23Zs/LXRe3r+EZqM3vGYKdQ2YJVQ5VkJI+zEJQ==",
        "dev": true,
        "requires": {
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0"
        }
      },
      "postcss-discard-comments": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/postcss-discard-comments/-/postcss-discard-comments-4.0.2.tgz",
        "integrity": "sha512-RJutN259iuRf3IW7GZyLM5Sw4GLTOH8FmsXBnv8Ab/Tc2k4SR4qbV4DNbyyY4+Sjo362SyDmW2DQ7lBSChrpkg==",
        "dev": true,
        "requires": {
          "postcss": "^7.0.0"
        }
      },
      "postcss-discard-duplicates": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/postcss-discard-duplicates/-/postcss-discard-duplicates-4.0.2.tgz",
        "integrity": "sha512-ZNQfR1gPNAiXZhgENFfEglF93pciw0WxMkJeVmw8eF+JZBbMD7jp6C67GqJAXVZP2BWbOztKfbsdmMp/k8c6oQ==",
        "dev": true,
        "requires": {
          "postcss": "^7.0.0"
        }
      },
      "postcss-discard-empty": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/postcss-discard-empty/-/postcss-discard-empty-4.0.1.tgz",
        "integrity": "sha512-B9miTzbznhDjTfjvipfHoqbWKwd0Mj+/fL5s1QOz06wufguil+Xheo4XpOnc4NqKYBCNqqEzgPv2aPBIJLox0w==",
        "dev": true,
        "requires": {
          "postcss": "^7.0.0"
        }
      },
      "postcss-discard-overridden": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/postcss-discard-overridden/-/postcss-discard-overridden-4.0.1.tgz",
        "integrity": "sha512-IYY2bEDD7g1XM1IDEsUT4//iEYCxAmP5oDSFMVU/JVvT7gh+l4fmjciLqGgwjdWpQIdb0Che2VX00QObS5+cTg==",
        "dev": true,
        "requires": {
          "postcss": "^7.0.0"
        }
      },
      "postcss-merge-longhand": {
        "version": "4.0.11",
        "resolved": "https://registry.npmjs.org/postcss-merge-longhand/-/postcss-merge-longhand-4.0.11.tgz",
        "integrity": "sha512-alx/zmoeXvJjp7L4mxEMjh8lxVlDFX1gqWHzaaQewwMZiVhLo42TEClKaeHbRf6J7j82ZOdTJ808RtN0ZOZwvw==",
        "dev": true,
        "requires": {
          "css-color-names": "0.0.4",
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0",
          "stylehacks": "^4.0.0"
        }
      },
      "postcss-merge-rules": {
        "version": "4.0.3",
        "resolved": "https://registry.npmjs.org/postcss-merge-rules/-/postcss-merge-rules-4.0.3.tgz",
        "integrity": "sha512-U7e3r1SbvYzO0Jr3UT/zKBVgYYyhAz0aitvGIYOYK5CPmkNih+WDSsS5tvPrJ8YMQYlEMvsZIiqmn7HdFUaeEQ==",
        "dev": true,
        "requires": {
          "browserslist": "^4.0.0",
          "caniuse-api": "^3.0.0",
          "cssnano-util-same-parent": "^4.0.0",
          "postcss": "^7.0.0",
          "postcss-selector-parser": "^3.0.0",
          "vendors": "^1.0.0"
        },
        "dependencies": {
          "postcss-selector-parser": {
            "version": "3.1.2",
            "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-3.1.2.tgz",
            "integrity": "sha512-h7fJ/5uWuRVyOtkO45pnt1Ih40CEleeyCHzipqAZO2e5H20g25Y48uYnFUiShvY4rZWNJ/Bib/KVPmanaCtOhA==",
            "dev": true,
            "requires": {
              "dot-prop": "^5.2.0",
              "indexes-of": "^1.0.1",
              "uniq": "^1.0.1"
            }
          }
        }
      },
      "postcss-minify-font-values": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/postcss-minify-font-values/-/postcss-minify-font-values-4.0.2.tgz",
        "integrity": "sha512-j85oO6OnRU9zPf04+PZv1LYIYOprWm6IA6zkXkrJXyRveDEuQggG6tvoy8ir8ZwjLxLuGfNkCZEQG7zan+Hbtg==",
        "dev": true,
        "requires": {
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0"
        }
      },
      "postcss-minify-gradients": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/postcss-minify-gradients/-/postcss-minify-gradients-4.0.2.tgz",
        "integrity": "sha512-qKPfwlONdcf/AndP1U8SJ/uzIJtowHlMaSioKzebAXSG4iJthlWC9iSWznQcX4f66gIWX44RSA841HTHj3wK+Q==",
        "dev": true,
        "requires": {
          "cssnano-util-get-arguments": "^4.0.0",
          "is-color-stop": "^1.0.0",
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0"
        }
      },
      "postcss-minify-params": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/postcss-minify-params/-/postcss-minify-params-4.0.2.tgz",
        "integrity": "sha512-G7eWyzEx0xL4/wiBBJxJOz48zAKV2WG3iZOqVhPet/9geefm/Px5uo1fzlHu+DOjT+m0Mmiz3jkQzVHe6wxAWg==",
        "dev": true,
        "requires": {
          "alphanum-sort": "^1.0.0",
          "browserslist": "^4.0.0",
          "cssnano-util-get-arguments": "^4.0.0",
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0",
          "uniqs": "^2.0.0"
        }
      },
      "postcss-minify-selectors": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/postcss-minify-selectors/-/postcss-minify-selectors-4.0.2.tgz",
        "integrity": "sha512-D5S1iViljXBj9kflQo4YutWnJmwm8VvIsU1GeXJGiG9j8CIg9zs4voPMdQDUmIxetUOh60VilsNzCiAFTOqu3g==",
        "dev": true,
        "requires": {
          "alphanum-sort": "^1.0.0",
          "has": "^1.0.0",
          "postcss": "^7.0.0",
          "postcss-selector-parser": "^3.0.0"
        },
        "dependencies": {
          "postcss-selector-parser": {
            "version": "3.1.2",
            "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-3.1.2.tgz",
            "integrity": "sha512-h7fJ/5uWuRVyOtkO45pnt1Ih40CEleeyCHzipqAZO2e5H20g25Y48uYnFUiShvY4rZWNJ/Bib/KVPmanaCtOhA==",
            "dev": true,
            "requires": {
              "dot-prop": "^5.2.0",
              "indexes-of": "^1.0.1",
              "uniq": "^1.0.1"
            }
          }
        }
      },
      "postcss-modules-extract-imports": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/postcss-modules-extract-imports/-/postcss-modules-extract-imports-1.1.0.tgz",
        "integrity": "sha1-thTJcgvmgW6u41+zpfqh26agXds=",
        "dev": true,
        "requires": {
          "postcss": "^6.0.1"
        },
        "dependencies": {
          "postcss": {
            "version": "6.0.23",
            "resolved": "https://registry.npmjs.org/postcss/-/postcss-6.0.23.tgz",
            "integrity": "sha512-soOk1h6J3VMTZtVeVpv15/Hpdl2cBLX3CAw4TAbkpTJiNPk9YP/zWcD1ND+xEtvyuuvKzbxliTOIyvkSeSJ6ag==",
            "dev": true,
            "requires": {
              "chalk": "^2.4.1",
              "source-map": "^0.6.1",
              "supports-color": "^5.4.0"
            }
          }
        }
      },
      "postcss-modules-local-by-default": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/postcss-modules-local-by-default/-/postcss-modules-local-by-default-1.2.0.tgz",
        "integrity": "sha1-99gMOYxaOT+nlkRmvRlQCn1hwGk=",
        "dev": true,
        "requires": {
          "css-selector-tokenizer": "^0.7.0",
          "postcss": "^6.0.1"
        },
        "dependencies": {
          "postcss": {
            "version": "6.0.23",
            "resolved": "https://registry.npmjs.org/postcss/-/postcss-6.0.23.tgz",
            "integrity": "sha512-soOk1h6J3VMTZtVeVpv15/Hpdl2cBLX3CAw4TAbkpTJiNPk9YP/zWcD1ND+xEtvyuuvKzbxliTOIyvkSeSJ6ag==",
            "dev": true,
            "requires": {
              "chalk": "^2.4.1",
              "source-map": "^0.6.1",
              "supports-color": "^5.4.0"
            }
          }
        }
      },
      "postcss-modules-scope": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/postcss-modules-scope/-/postcss-modules-scope-1.1.0.tgz",
        "integrity": "sha1-1upkmUx5+XtipytCb75gVqGUu5A=",
        "dev": true,
        "requires": {
          "css-selector-tokenizer": "^0.7.0",
          "postcss": "^6.0.1"
        },
        "dependencies": {
          "postcss": {
            "version": "6.0.23",
            "resolved": "https://registry.npmjs.org/postcss/-/postcss-6.0.23.tgz",
            "integrity": "sha512-soOk1h6J3VMTZtVeVpv15/Hpdl2cBLX3CAw4TAbkpTJiNPk9YP/zWcD1ND+xEtvyuuvKzbxliTOIyvkSeSJ6ag==",
            "dev": true,
            "requires": {
              "chalk": "^2.4.1",
              "source-map": "^0.6.1",
              "supports-color": "^5.4.0"
            }
          }
        }
      },
      "postcss-modules-values": {
        "version": "1.3.0",
        "resolved": "https://registry.npmjs.org/postcss-modules-values/-/postcss-modules-values-1.3.0.tgz",
        "integrity": "sha1-7P+p1+GSUYOJ9CrQ6D9yrsRW6iA=",
        "dev": true,
        "requires": {
          "icss-replace-symbols": "^1.1.0",
          "postcss": "^6.0.1"
        },
        "dependencies": {
          "postcss": {
            "version": "6.0.23",
            "resolved": "https://registry.npmjs.org/postcss/-/postcss-6.0.23.tgz",
            "integrity": "sha512-soOk1h6J3VMTZtVeVpv15/Hpdl2cBLX3CAw4TAbkpTJiNPk9YP/zWcD1ND+xEtvyuuvKzbxliTOIyvkSeSJ6ag==",
            "dev": true,
            "requires": {
              "chalk": "^2.4.1",
              "source-map": "^0.6.1",
              "supports-color": "^5.4.0"
            }
          }
        }
      },
      "postcss-normalize-charset": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/postcss-normalize-charset/-/postcss-normalize-charset-4.0.1.tgz",
        "integrity": "sha512-gMXCrrlWh6G27U0hF3vNvR3w8I1s2wOBILvA87iNXaPvSNo5uZAMYsZG7XjCUf1eVxuPfyL4TJ7++SGZLc9A3g==",
        "dev": true,
        "requires": {
          "postcss": "^7.0.0"
        }
      },
      "postcss-normalize-display-values": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/postcss-normalize-display-values/-/postcss-normalize-display-values-4.0.2.tgz",
        "integrity": "sha512-3F2jcsaMW7+VtRMAqf/3m4cPFhPD3EFRgNs18u+k3lTJJlVe7d0YPO+bnwqo2xg8YiRpDXJI2u8A0wqJxMsQuQ==",
        "dev": true,
        "requires": {
          "cssnano-util-get-match": "^4.0.0",
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0"
        }
      },
      "postcss-normalize-positions": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/postcss-normalize-positions/-/postcss-normalize-positions-4.0.2.tgz",
        "integrity": "sha512-Dlf3/9AxpxE+NF1fJxYDeggi5WwV35MXGFnnoccP/9qDtFrTArZ0D0R+iKcg5WsUd8nUYMIl8yXDCtcrT8JrdA==",
        "dev": true,
        "requires": {
          "cssnano-util-get-arguments": "^4.0.0",
          "has": "^1.0.0",
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0"
        }
      },
      "postcss-normalize-repeat-style": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/postcss-normalize-repeat-style/-/postcss-normalize-repeat-style-4.0.2.tgz",
        "integrity": "sha512-qvigdYYMpSuoFs3Is/f5nHdRLJN/ITA7huIoCyqqENJe9PvPmLhNLMu7QTjPdtnVf6OcYYO5SHonx4+fbJE1+Q==",
        "dev": true,
        "requires": {
          "cssnano-util-get-arguments": "^4.0.0",
          "cssnano-util-get-match": "^4.0.0",
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0"
        }
      },
      "postcss-normalize-string": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/postcss-normalize-string/-/postcss-normalize-string-4.0.2.tgz",
        "integrity": "sha512-RrERod97Dnwqq49WNz8qo66ps0swYZDSb6rM57kN2J+aoyEAJfZ6bMx0sx/F9TIEX0xthPGCmeyiam/jXif0eA==",
        "dev": true,
        "requires": {
          "has": "^1.0.0",
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0"
        }
      },
      "postcss-normalize-timing-functions": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/postcss-normalize-timing-functions/-/postcss-normalize-timing-functions-4.0.2.tgz",
        "integrity": "sha512-acwJY95edP762e++00Ehq9L4sZCEcOPyaHwoaFOhIwWCDfik6YvqsYNxckee65JHLKzuNSSmAdxwD2Cud1Z54A==",
        "dev": true,
        "requires": {
          "cssnano-util-get-match": "^4.0.0",
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0"
        }
      },
      "postcss-normalize-unicode": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/postcss-normalize-unicode/-/postcss-normalize-unicode-4.0.1.tgz",
        "integrity": "sha512-od18Uq2wCYn+vZ/qCOeutvHjB5jm57ToxRaMeNuf0nWVHaP9Hua56QyMF6fs/4FSUnVIw0CBPsU0K4LnBPwYwg==",
        "dev": true,
        "requires": {
          "browserslist": "^4.0.0",
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0"
        }
      },
      "postcss-normalize-url": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/postcss-normalize-url/-/postcss-normalize-url-4.0.1.tgz",
        "integrity": "sha512-p5oVaF4+IHwu7VpMan/SSpmpYxcJMtkGppYf0VbdH5B6hN8YNmVyJLuY9FmLQTzY3fag5ESUUHDqM+heid0UVA==",
        "dev": true,
        "requires": {
          "is-absolute-url": "^2.0.0",
          "normalize-url": "^3.0.0",
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0"
        }
      },
      "postcss-normalize-whitespace": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/postcss-normalize-whitespace/-/postcss-normalize-whitespace-4.0.2.tgz",
        "integrity": "sha512-tO8QIgrsI3p95r8fyqKV+ufKlSHh9hMJqACqbv2XknufqEDhDvbguXGBBqxw9nsQoXWf0qOqppziKJKHMD4GtA==",
        "dev": true,
        "requires": {
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0"
        }
      },
      "postcss-ordered-values": {
        "version": "4.1.2",
        "resolved": "https://registry.npmjs.org/postcss-ordered-values/-/postcss-ordered-values-4.1.2.tgz",
        "integrity": "sha512-2fCObh5UanxvSxeXrtLtlwVThBvHn6MQcu4ksNT2tsaV2Fg76R2CV98W7wNSlX+5/pFwEyaDwKLLoEV7uRybAw==",
        "dev": true,
        "requires": {
          "cssnano-util-get-arguments": "^4.0.0",
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0"
        }
      },
      "postcss-reduce-initial": {
        "version": "4.0.3",
        "resolved": "https://registry.npmjs.org/postcss-reduce-initial/-/postcss-reduce-initial-4.0.3.tgz",
        "integrity": "sha512-gKWmR5aUulSjbzOfD9AlJiHCGH6AEVLaM0AV+aSioxUDd16qXP1PCh8d1/BGVvpdWn8k/HiK7n6TjeoXN1F7DA==",
        "dev": true,
        "requires": {
          "browserslist": "^4.0.0",
          "caniuse-api": "^3.0.0",
          "has": "^1.0.0",
          "postcss": "^7.0.0"
        }
      },
      "postcss-reduce-transforms": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/postcss-reduce-transforms/-/postcss-reduce-transforms-4.0.2.tgz",
        "integrity": "sha512-EEVig1Q2QJ4ELpJXMZR8Vt5DQx8/mo+dGWSR7vWXqcob2gQLyQGsionYcGKATXvQzMPn6DSN1vTN7yFximdIAg==",
        "dev": true,
        "requires": {
          "cssnano-util-get-match": "^4.0.0",
          "has": "^1.0.0",
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0"
        }
      },
      "postcss-selector-parser": {
        "version": "6.0.2",
        "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.0.2.tgz",
        "integrity": "sha512-36P2QR59jDTOAiIkqEprfJDsoNrvwFei3eCqKd1Y0tUsBimsq39BLp7RD+JWny3WgB1zGhJX8XVePwm9k4wdBg==",
        "dev": true,
        "requires": {
          "cssesc": "^3.0.0",
          "indexes-of": "^1.0.1",
          "uniq": "^1.0.1"
        }
      },
      "postcss-svgo": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/postcss-svgo/-/postcss-svgo-4.0.2.tgz",
        "integrity": "sha512-C6wyjo3VwFm0QgBy+Fu7gCYOkCmgmClghO+pjcxvrcBKtiKt0uCF+hvbMO1fyv5BMImRK90SMb+dwUnfbGd+jw==",
        "dev": true,
        "requires": {
          "is-svg": "^3.0.0",
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0",
          "svgo": "^1.0.0"
        }
      },
      "postcss-unique-selectors": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/postcss-unique-selectors/-/postcss-unique-selectors-4.0.1.tgz",
        "integrity": "sha512-+JanVaryLo9QwZjKrmJgkI4Fn8SBgRO6WXQBJi7KiAVPlmxikB5Jzc4EvXMT2H0/m0RjrVVm9rGNhZddm/8Spg==",
        "dev": true,
        "requires": {
          "alphanum-sort": "^1.0.0",
          "postcss": "^7.0.0",
          "uniqs": "^2.0.0"
        }
      },
      "postcss-value-parser": {
        "version": "3.3.1",
        "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
        "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ==",
        "dev": true
      },
      "posthtml": {
        "version": "0.11.6",
        "resolved": "https://registry.npmjs.org/posthtml/-/posthtml-0.11.6.tgz",
        "integrity": "sha512-C2hrAPzmRdpuL3iH0TDdQ6XCc9M7Dcc3zEW5BLerY65G4tWWszwv6nG/ksi6ul5i2mx22ubdljgktXCtNkydkw==",
        "dev": true,
        "requires": {
          "posthtml-parser": "^0.4.1",
          "posthtml-render": "^1.1.5"
        }
      },
      "posthtml-parser": {
        "version": "0.4.2",
        "resolved": "https://registry.npmjs.org/posthtml-parser/-/posthtml-parser-0.4.2.tgz",
        "integrity": "sha512-BUIorsYJTvS9UhXxPTzupIztOMVNPa/HtAm9KHni9z6qEfiJ1bpOBL5DfUOL9XAc3XkLIEzBzpph+Zbm4AdRAg==",
        "dev": true,
        "requires": {
          "htmlparser2": "^3.9.2"
        }
      },
      "posthtml-render": {
        "version": "1.2.3",
        "resolved": "https://registry.npmjs.org/posthtml-render/-/posthtml-render-1.2.3.tgz",
        "integrity": "sha512-rGGayND//VwTlsYKNqdILsA7U/XP0WJa6SMcdAEoqc2WRM5QExplGg/h9qbTuHz7mc2PvaXU+6iNxItvr5aHMg==",
        "dev": true
      },
      "prelude-ls": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.1.2.tgz",
        "integrity": "sha1-IZMqVJ9eUv/ZqCf1cOBL5iqX2lQ=",
        "dev": true
      },
      "process": {
        "version": "0.11.10",
        "resolved": "https://registry.npmjs.org/process/-/process-0.11.10.tgz",
        "integrity": "sha1-czIwDoQBYb2j5podHZGn1LwW8YI=",
        "dev": true
      },
      "process-nextick-args": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
        "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==",
        "dev": true
      },
      "psl": {
        "version": "1.8.0",
        "resolved": "https://registry.npmjs.org/psl/-/psl-1.8.0.tgz",
        "integrity": "sha512-RIdOzyoavK+hA18OGGWDqUTsCLhtA7IcZ/6NCs4fFJaHBDab+pDDmDIByWFRQJq2Cd7r1OoQxBGKOaztq+hjIQ==",
        "dev": true
      },
      "public-encrypt": {
        "version": "4.0.3",
        "resolved": "https://registry.npmjs.org/public-encrypt/-/public-encrypt-4.0.3.tgz",
        "integrity": "sha512-zVpa8oKZSz5bTMTFClc1fQOnyyEzpl5ozpi1B5YcvBrdohMjH2rfsBtyXcuNuwjsDIXmBYlF2N5FlJYhR29t8Q==",
        "dev": true,
        "requires": {
          "bn.js": "^4.1.0",
          "browserify-rsa": "^4.0.0",
          "create-hash": "^1.1.0",
          "parse-asn1": "^5.0.0",
          "randombytes": "^2.0.1",
          "safe-buffer": "^5.1.2"
        },
        "dependencies": {
          "bn.js": {
            "version": "4.11.9",
            "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
            "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
            "dev": true
          }
        }
      },
      "punycode": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
        "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A==",
        "dev": true
      },
      "purgecss": {
        "version": "2.3.0",
        "resolved": "https://registry.npmjs.org/purgecss/-/purgecss-2.3.0.tgz",
        "integrity": "sha512-BE5CROfVGsx2XIhxGuZAT7rTH9lLeQx/6M0P7DTXQH4IUc3BBzs9JUzt4yzGf3JrH9enkeq6YJBe9CTtkm1WmQ==",
        "dev": true,
        "requires": {
          "commander": "^5.0.0",
          "glob": "^7.0.0",
          "postcss": "7.0.32",
          "postcss-selector-parser": "^6.0.2"
        },
        "dependencies": {
          "commander": {
            "version": "5.1.0",
            "resolved": "https://registry.npmjs.org/commander/-/commander-5.1.0.tgz",
            "integrity": "sha512-P0CysNDQ7rtVw4QIQtm+MRxV66vKFSvlsQvGYXZWR3qFU0jlMKHZZZgw8e+8DSah4UDKMqnknRDQz+xuQXQ/Zg==",
            "dev": true
          }
        }
      },
      "q": {
        "version": "1.5.1",
        "resolved": "https://registry.npmjs.org/q/-/q-1.5.1.tgz",
        "integrity": "sha1-fjL3W0E4EpHQRhHxvxQQmsAGUdc=",
        "dev": true
      },
      "qs": {
        "version": "6.5.2",
        "resolved": "https://registry.npmjs.org/qs/-/qs-6.5.2.tgz",
        "integrity": "sha512-N5ZAX4/LxJmF+7wN74pUD6qAh9/wnvdQcjq9TZjevvXzSUo7bfmw91saqMjzGS2xq91/odN2dW/WOl7qQHNDGA==",
        "dev": true
      },
      "querystring": {
        "version": "0.2.0",
        "resolved": "https://registry.npmjs.org/querystring/-/querystring-0.2.0.tgz",
        "integrity": "sha1-sgmEkgO7Jd+CDadW50cAWHhSFiA=",
        "dev": true
      },
      "querystring-es3": {
        "version": "0.2.1",
        "resolved": "https://registry.npmjs.org/querystring-es3/-/querystring-es3-0.2.1.tgz",
        "integrity": "sha1-nsYfeQSYdXB9aUFFlv2Qek1xHnM=",
        "dev": true
      },
      "quote-stream": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/quote-stream/-/quote-stream-1.0.2.tgz",
        "integrity": "sha1-hJY/jJwmuULhU/7rU6rnRlK34LI=",
        "dev": true,
        "requires": {
          "buffer-equal": "0.0.1",
          "minimist": "^1.1.3",
          "through2": "^2.0.0"
        }
      },
      "randombytes": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/randombytes/-/randombytes-2.1.0.tgz",
        "integrity": "sha512-vYl3iOX+4CKUWuxGi9Ukhie6fsqXqS9FE2Zaic4tNFD2N2QQaXOMFbuKK4QmDHC0JO6B1Zp41J0LpT0oR68amQ==",
        "dev": true,
        "requires": {
          "safe-buffer": "^5.1.0"
        }
      },
      "randomfill": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/randomfill/-/randomfill-1.0.4.tgz",
        "integrity": "sha512-87lcbR8+MhcWcUiQ+9e+Rwx8MyR2P7qnt15ynUlbm3TU/fjbgz4GsvfSUDTemtCCtVCqb4ZcEFlyPNTh9bBTLw==",
        "dev": true,
        "requires": {
          "randombytes": "^2.0.5",
          "safe-buffer": "^5.1.0"
        }
      },
      "range-parser": {
        "version": "1.2.1",
        "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
        "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
        "dev": true
      },
      "readable-stream": {
        "version": "2.3.7",
        "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
        "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
        "dev": true,
        "requires": {
          "core-util-is": "~1.0.0",
          "inherits": "~2.0.3",
          "isarray": "~1.0.0",
          "process-nextick-args": "~2.0.0",
          "safe-buffer": "~5.1.1",
          "string_decoder": "~1.1.1",
          "util-deprecate": "~1.0.1"
        }
      },
      "readdirp": {
        "version": "2.2.1",
        "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-2.2.1.tgz",
        "integrity": "sha512-1JU/8q+VgFZyxwrJ+SVIOsh+KywWGpds3NTqikiKpDMZWScmAYyKIgqkO+ARvNWJfXeXR1zxz7aHF4u4CyH6vQ==",
        "dev": true,
        "requires": {
          "graceful-fs": "^4.1.11",
          "micromatch": "^3.1.10",
          "readable-stream": "^2.0.2"
        }
      },
      "regenerate": {
        "version": "1.4.1",
        "resolved": "https://registry.npmjs.org/regenerate/-/regenerate-1.4.1.tgz",
        "integrity": "sha512-j2+C8+NtXQgEKWk49MMP5P/u2GhnahTtVkRIHr5R5lVRlbKvmQ+oS+A5aLKWp2ma5VkT8sh6v+v4hbH0YHR66A==",
        "dev": true
      },
      "regenerate-unicode-properties": {
        "version": "8.2.0",
        "resolved": "https://registry.npmjs.org/regenerate-unicode-properties/-/regenerate-unicode-properties-8.2.0.tgz",
        "integrity": "sha512-F9DjY1vKLo/tPePDycuH3dn9H1OTPIkVD9Kz4LODu+F2C75mgjAJ7x/gwy6ZcSNRAAkhNlJSOHRe8k3p+K9WhA==",
        "dev": true,
        "requires": {
          "regenerate": "^1.4.0"
        }
      },
      "regenerator-runtime": {
        "version": "0.13.7",
        "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.13.7.tgz",
        "integrity": "sha512-a54FxoJDIr27pgf7IgeQGxmqUNYrcV338lf/6gH456HZ/PhX+5BcwHXG9ajESmwe6WRO0tAzRUrRmNONWgkrew=="
      },
      "regenerator-transform": {
        "version": "0.14.5",
        "resolved": "https://registry.npmjs.org/regenerator-transform/-/regenerator-transform-0.14.5.tgz",
        "integrity": "sha512-eOf6vka5IO151Jfsw2NO9WpGX58W6wWmefK3I1zEGr0lOD0u8rwPaNqQL1aRxUaxLeKO3ArNh3VYg1KbaD+FFw==",
        "dev": true,
        "requires": {
          "@babel/runtime": "^7.8.4"
        }
      },
      "regex-not": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/regex-not/-/regex-not-1.0.2.tgz",
        "integrity": "sha512-J6SDjUgDxQj5NusnOtdFxDwN/+HWykR8GELwctJ7mdqhcyy1xEc4SRFHUXvxTp661YaVKAjfRLZ9cCqS6tn32A==",
        "dev": true,
        "requires": {
          "extend-shallow": "^3.0.2",
          "safe-regex": "^1.1.0"
        }
      },
      "regexpu-core": {
        "version": "4.7.0",
        "resolved": "https://registry.npmjs.org/regexpu-core/-/regexpu-core-4.7.0.tgz",
        "integrity": "sha512-TQ4KXRnIn6tz6tjnrXEkD/sshygKH/j5KzK86X8MkeHyZ8qst/LZ89j3X4/8HEIfHANTFIP/AbXakeRhWIl5YQ==",
        "dev": true,
        "requires": {
          "regenerate": "^1.4.0",
          "regenerate-unicode-properties": "^8.2.0",
          "regjsgen": "^0.5.1",
          "regjsparser": "^0.6.4",
          "unicode-match-property-ecmascript": "^1.0.4",
          "unicode-match-property-value-ecmascript": "^1.2.0"
        }
      },
      "regjsgen": {
        "version": "0.5.2",
        "resolved": "https://registry.npmjs.org/regjsgen/-/regjsgen-0.5.2.tgz",
        "integrity": "sha512-OFFT3MfrH90xIW8OOSyUrk6QHD5E9JOTeGodiJeBS3J6IwlgzJMNE/1bZklWz5oTg+9dCMyEetclvCVXOPoN3A==",
        "dev": true
      },
      "regjsparser": {
        "version": "0.6.4",
        "resolved": "https://registry.npmjs.org/regjsparser/-/regjsparser-0.6.4.tgz",
        "integrity": "sha512-64O87/dPDgfk8/RQqC4gkZoGyyWFIEUTTh80CU6CWuK5vkCGyekIx+oKcEIYtP/RAxSQltCZHCNu/mdd7fqlJw==",
        "dev": true,
        "requires": {
          "jsesc": "~0.5.0"
        },
        "dependencies": {
          "jsesc": {
            "version": "0.5.0",
            "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-0.5.0.tgz",
            "integrity": "sha1-597mbjXW/Bb3EP6R1c9p9w8IkR0=",
            "dev": true
          }
        }
      },
      "remove-trailing-separator": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/remove-trailing-separator/-/remove-trailing-separator-1.1.0.tgz",
        "integrity": "sha1-wkvOKig62tW8P1jg1IJJuSN52O8=",
        "dev": true
      },
      "repeat-element": {
        "version": "1.1.3",
        "resolved": "https://registry.npmjs.org/repeat-element/-/repeat-element-1.1.3.tgz",
        "integrity": "sha512-ahGq0ZnV5m5XtZLMb+vP76kcAM5nkLqk0lpqAuojSKGgQtn4eRi4ZZGm2olo2zKFH+sMsWaqOCW1dqAnOru72g==",
        "dev": true
      },
      "repeat-string": {
        "version": "1.6.1",
        "resolved": "https://registry.npmjs.org/repeat-string/-/repeat-string-1.6.1.tgz",
        "integrity": "sha1-jcrkcOHIirwtYA//Sndihtp15jc=",
        "dev": true
      },
      "request": {
        "version": "2.88.2",
        "resolved": "https://registry.npmjs.org/request/-/request-2.88.2.tgz",
        "integrity": "sha512-MsvtOrfG9ZcrOwAW+Qi+F6HbD0CWXEh9ou77uOb7FM2WPhwT7smM833PzanhJLsgXjN89Ir6V2PczXNnMpwKhw==",
        "dev": true,
        "requires": {
          "aws-sign2": "~0.7.0",
          "aws4": "^1.8.0",
          "caseless": "~0.12.0",
          "combined-stream": "~1.0.6",
          "extend": "~3.0.2",
          "forever-agent": "~0.6.1",
          "form-data": "~2.3.2",
          "har-validator": "~5.1.3",
          "http-signature": "~1.2.0",
          "is-typedarray": "~1.0.0",
          "isstream": "~0.1.2",
          "json-stringify-safe": "~5.0.1",
          "mime-types": "~2.1.19",
          "oauth-sign": "~0.9.0",
          "performance-now": "^2.1.0",
          "qs": "~6.5.2",
          "safe-buffer": "^5.1.2",
          "tough-cookie": "~2.5.0",
          "tunnel-agent": "^0.6.0",
          "uuid": "^3.3.2"
        }
      },
      "request-promise-core": {
        "version": "1.1.4",
        "resolved": "https://registry.npmjs.org/request-promise-core/-/request-promise-core-1.1.4.tgz",
        "integrity": "sha512-TTbAfBBRdWD7aNNOoVOBH4pN/KigV6LyapYNNlAPA8JwbovRti1E88m3sYAwsLi5ryhPKsE9APwnjFTgdUjTpw==",
        "dev": true,
        "requires": {
          "lodash": "^4.17.19"
        }
      },
      "request-promise-native": {
        "version": "1.0.9",
        "resolved": "https://registry.npmjs.org/request-promise-native/-/request-promise-native-1.0.9.tgz",
        "integrity": "sha512-wcW+sIUiWnKgNY0dqCpOZkUbF/I+YPi+f09JZIDa39Ec+q82CpSYniDp+ISgTTbKmnpJWASeJBPZmoxH84wt3g==",
        "dev": true,
        "requires": {
          "request-promise-core": "1.1.4",
          "stealthy-require": "^1.1.1",
          "tough-cookie": "^2.3.3"
        }
      },
      "resolve": {
        "version": "1.17.0",
        "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.17.0.tgz",
        "integrity": "sha512-ic+7JYiV8Vi2yzQGFWOkiZD5Z9z7O2Zhm9XMaTxdJExKasieFCr+yXZ/WmXsckHiKl12ar0y6XiXDx3m4RHn1w==",
        "dev": true,
        "requires": {
          "path-parse": "^1.0.6"
        }
      },
      "resolve-from": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-3.0.0.tgz",
        "integrity": "sha1-six699nWiBvItuZTM17rywoYh0g=",
        "dev": true
      },
      "resolve-url": {
        "version": "0.2.1",
        "resolved": "https://registry.npmjs.org/resolve-url/-/resolve-url-0.2.1.tgz",
        "integrity": "sha1-LGN/53yJOv0qZj/iGqkIAGjiBSo=",
        "dev": true
      },
      "restore-cursor": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-2.0.0.tgz",
        "integrity": "sha1-n37ih/gv0ybU/RYpI9YhKe7g368=",
        "dev": true,
        "requires": {
          "onetime": "^2.0.0",
          "signal-exit": "^3.0.2"
        }
      },
      "ret": {
        "version": "0.1.15",
        "resolved": "https://registry.npmjs.org/ret/-/ret-0.1.15.tgz",
        "integrity": "sha512-TTlYpa+OL+vMMNG24xSlQGEJ3B/RzEfUlLct7b5G/ytav+wPrplCpVMFuwzXbkecJrb6IYo1iFb0S9v37754mg==",
        "dev": true
      },
      "rgb-regex": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/rgb-regex/-/rgb-regex-1.0.1.tgz",
        "integrity": "sha1-wODWiC3w4jviVKR16O3UGRX+rrE=",
        "dev": true
      },
      "rgba-regex": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/rgba-regex/-/rgba-regex-1.0.0.tgz",
        "integrity": "sha1-QzdOLiyglosO8VI0YLfXMP8i7rM=",
        "dev": true
      },
      "rimraf": {
        "version": "2.7.1",
        "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
        "integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
        "dev": true,
        "requires": {
          "glob": "^7.1.3"
        }
      },
      "ripemd160": {
        "version": "2.0.2",
        "resolved": "https://registry.npmjs.org/ripemd160/-/ripemd160-2.0.2.tgz",
        "integrity": "sha512-ii4iagi25WusVoiC4B4lq7pbXfAp3D9v5CwfkY33vffw2+pkDjY1D8GaN7spsxvCSx8dkPqOZCEZyfxcmJG2IA==",
        "dev": true,
        "requires": {
          "hash-base": "^3.0.0",
          "inherits": "^2.0.1"
        }
      },
      "safe-buffer": {
        "version": "5.1.2",
        "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
        "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
        "dev": true
      },
      "safe-regex": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/safe-regex/-/safe-regex-1.1.0.tgz",
        "integrity": "sha1-QKNmnzsHfR6UPURinhV91IAjvy4=",
        "dev": true,
        "requires": {
          "ret": "~0.1.10"
        }
      },
      "safer-buffer": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
        "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
        "dev": true
      },
      "sax": {
        "version": "1.2.4",
        "resolved": "https://registry.npmjs.org/sax/-/sax-1.2.4.tgz",
        "integrity": "sha512-NqVDv9TpANUjFm0N8uM5GxL36UgKi9/atZw+x7YFnQ8ckwFGKrl4xX4yWtrey3UJm5nP1kUbnYgLopqWNSRhWw==",
        "dev": true
      },
      "saxes": {
        "version": "3.1.11",
        "resolved": "https://registry.npmjs.org/saxes/-/saxes-3.1.11.tgz",
        "integrity": "sha512-Ydydq3zC+WYDJK1+gRxRapLIED9PWeSuuS41wqyoRmzvhhh9nc+QQrVMKJYzJFULazeGhzSV0QleN2wD3boh2g==",
        "dev": true,
        "requires": {
          "xmlchars": "^2.1.1"
        }
      },
      "semver": {
        "version": "5.7.1",
        "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
        "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
        "dev": true
      },
      "send": {
        "version": "0.17.1",
        "resolved": "https://registry.npmjs.org/send/-/send-0.17.1.tgz",
        "integrity": "sha512-BsVKsiGcQMFwT8UxypobUKyv7irCNRHk1T0G680vk88yf6LBByGcZJOTJCrTP2xVN6yI+XjPJcNuE3V4fT9sAg==",
        "dev": true,
        "requires": {
          "debug": "2.6.9",
          "depd": "~1.1.2",
          "destroy": "~1.0.4",
          "encodeurl": "~1.0.2",
          "escape-html": "~1.0.3",
          "etag": "~1.8.1",
          "fresh": "0.5.2",
          "http-errors": "~1.7.2",
          "mime": "1.6.0",
          "ms": "2.1.1",
          "on-finished": "~2.3.0",
          "range-parser": "~1.2.1",
          "statuses": "~1.5.0"
        },
        "dependencies": {
          "debug": {
            "version": "2.6.9",
            "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
            "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
            "dev": true,
            "requires": {
              "ms": "2.0.0"
            },
            "dependencies": {
              "ms": {
                "version": "2.0.0",
                "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
                "dev": true
              }
            }
          },
          "ms": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
            "integrity": "sha512-tgp+dl5cGk28utYktBsrFqA7HKgrhgPsg6Z/EfhWI4gl1Hwq8B/GmY/0oXZ6nF8hDVesS/FpnYaD/kOWhYQvyg==",
            "dev": true
          }
        }
      },
      "serialize-to-js": {
        "version": "3.1.1",
        "resolved": "https://registry.npmjs.org/serialize-to-js/-/serialize-to-js-3.1.1.tgz",
        "integrity": "sha512-F+NGU0UHMBO4Q965tjw7rvieNVjlH6Lqi2emq/Lc9LUURYJbiCzmpi4Cy1OOjjVPtxu0c+NE85LU6968Wko5ZA==",
        "dev": true
      },
      "serve-static": {
        "version": "1.14.1",
        "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.14.1.tgz",
        "integrity": "sha512-JMrvUwE54emCYWlTI+hGrGv5I8dEwmco/00EvkzIIsR7MqrHonbD9pO2MOfFnpFntl7ecpZs+3mW+XbQZu9QCg==",
        "dev": true,
        "requires": {
          "encodeurl": "~1.0.2",
          "escape-html": "~1.0.3",
          "parseurl": "~1.3.3",
          "send": "0.17.1"
        }
      },
      "set-value": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/set-value/-/set-value-2.0.1.tgz",
        "integrity": "sha512-JxHc1weCN68wRY0fhCoXpyK55m/XPHafOmK4UWD7m2CI14GMcFypt4w/0+NV5f/ZMby2F6S2wwA7fgynh9gWSw==",
        "dev": true,
        "requires": {
          "extend-shallow": "^2.0.1",
          "is-extendable": "^0.1.1",
          "is-plain-object": "^2.0.3",
          "split-string": "^3.0.1"
        },
        "dependencies": {
          "extend-shallow": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
            "dev": true,
            "requires": {
              "is-extendable": "^0.1.0"
            }
          }
        }
      },
      "setimmediate": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/setimmediate/-/setimmediate-1.0.5.tgz",
        "integrity": "sha1-KQy7Iy4waULX1+qbg3Mqt4VvgoU=",
        "dev": true
      },
      "setprototypeof": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.1.tgz",
        "integrity": "sha512-JvdAWfbXeIGaZ9cILp38HntZSFSo3mWg6xGcJJsd+d4aRMOqauag1C63dJfDw7OaMYwEbHMOxEZ1lqVRYP2OAw==",
        "dev": true
      },
      "sha.js": {
        "version": "2.4.11",
        "resolved": "https://registry.npmjs.org/sha.js/-/sha.js-2.4.11.tgz",
        "integrity": "sha512-QMEp5B7cftE7APOjk5Y6xgrbWu+WkLVQwk8JNjZ8nKRciZaByEW6MubieAiToS7+dwvrjGhH8jRXz3MVd0AYqQ==",
        "dev": true,
        "requires": {
          "inherits": "^2.0.1",
          "safe-buffer": "^5.0.1"
        }
      },
      "shallow-copy": {
        "version": "0.0.1",
        "resolved": "https://registry.npmjs.org/shallow-copy/-/shallow-copy-0.0.1.tgz",
        "integrity": "sha1-QV9CcC1z2BAzApLMXuhurhoRoXA=",
        "dev": true
      },
      "shebang-command": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz",
        "integrity": "sha1-RKrGW2lbAzmJaMOfNj/uXer98eo=",
        "dev": true,
        "requires": {
          "shebang-regex": "^1.0.0"
        }
      },
      "shebang-regex": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-1.0.0.tgz",
        "integrity": "sha1-2kL0l0DAtC2yypcoVxyxkMmO/qM=",
        "dev": true
      },
      "signal-exit": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.3.tgz",
        "integrity": "sha512-VUJ49FC8U1OxwZLxIbTTrDvLnf/6TDgxZcK8wxR8zs13xpx7xbG60ndBlhNrFi2EMuFRoeDoJO7wthSLq42EjA==",
        "dev": true
      },
      "simple-swizzle": {
        "version": "0.2.2",
        "resolved": "https://registry.npmjs.org/simple-swizzle/-/simple-swizzle-0.2.2.tgz",
        "integrity": "sha1-pNprY1/8zMoz9w0Xy5JZLeleVXo=",
        "dev": true,
        "requires": {
          "is-arrayish": "^0.3.1"
        },
        "dependencies": {
          "is-arrayish": {
            "version": "0.3.2",
            "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.3.2.tgz",
            "integrity": "sha512-eVRqCvVlZbuw3GrM63ovNSNAeA1K16kaR/LRY/92w0zxQ5/1YzwblUX652i4Xs9RwAGjW9d9y6X88t8OaAJfWQ==",
            "dev": true
          }
        }
      },
      "snapdragon": {
        "version": "0.8.2",
        "resolved": "https://registry.npmjs.org/snapdragon/-/snapdragon-0.8.2.tgz",
        "integrity": "sha512-FtyOnWN/wCHTVXOMwvSv26d+ko5vWlIDD6zoUJ7LW8vh+ZBC8QdljveRP+crNrtBwioEUWy/4dMtbBjA4ioNlg==",
        "dev": true,
        "requires": {
          "base": "^0.11.1",
          "debug": "^2.2.0",
          "define-property": "^0.2.5",
          "extend-shallow": "^2.0.1",
          "map-cache": "^0.2.2",
          "source-map": "^0.5.6",
          "source-map-resolve": "^0.5.0",
          "use": "^3.1.0"
        },
        "dependencies": {
          "debug": {
            "version": "2.6.9",
            "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
            "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
            "dev": true,
            "requires": {
              "ms": "2.0.0"
            }
          },
          "define-property": {
            "version": "0.2.5",
            "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
            "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
            "dev": true,
            "requires": {
              "is-descriptor": "^0.1.0"
            }
          },
          "extend-shallow": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
            "dev": true,
            "requires": {
              "is-extendable": "^0.1.0"
            }
          },
          "ms": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
            "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
            "dev": true
          },
          "source-map": {
            "version": "0.5.7",
            "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
            "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
            "dev": true
          }
        }
      },
      "snapdragon-node": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/snapdragon-node/-/snapdragon-node-2.1.1.tgz",
        "integrity": "sha512-O27l4xaMYt/RSQ5TR3vpWCAB5Kb/czIcqUFOM/C4fYcLnbZUc1PkjTAMjof2pBWaSTwOUd6qUHcFGVGj7aIwnw==",
        "dev": true,
        "requires": {
          "define-property": "^1.0.0",
          "isobject": "^3.0.0",
          "snapdragon-util": "^3.0.1"
        },
        "dependencies": {
          "define-property": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
            "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
            "dev": true,
            "requires": {
              "is-descriptor": "^1.0.0"
            }
          },
          "is-accessor-descriptor": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
            "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
            "dev": true,
            "requires": {
              "kind-of": "^6.0.0"
            }
          },
          "is-data-descriptor": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
            "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
            "dev": true,
            "requires": {
              "kind-of": "^6.0.0"
            }
          },
          "is-descriptor": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
            "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
            "dev": true,
            "requires": {
              "is-accessor-descriptor": "^1.0.0",
              "is-data-descriptor": "^1.0.0",
              "kind-of": "^6.0.2"
            }
          }
        }
      },
      "snapdragon-util": {
        "version": "3.0.1",
        "resolved": "https://registry.npmjs.org/snapdragon-util/-/snapdragon-util-3.0.1.tgz",
        "integrity": "sha512-mbKkMdQKsjX4BAL4bRYTj21edOf8cN7XHdYUJEe+Zn99hVEYcMvKPct1IqNe7+AZPirn8BCDOQBHQZknqmKlZQ==",
        "dev": true,
        "requires": {
          "kind-of": "^3.2.0"
        },
        "dependencies": {
          "kind-of": {
            "version": "3.2.2",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
            "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
            "dev": true,
            "requires": {
              "is-buffer": "^1.1.5"
            }
          }
        }
      },
      "source-map": {
        "version": "0.6.1",
        "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
        "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
        "dev": true
      },
      "source-map-resolve": {
        "version": "0.5.3",
        "resolved": "https://registry.npmjs.org/source-map-resolve/-/source-map-resolve-0.5.3.tgz",
        "integrity": "sha512-Htz+RnsXWk5+P2slx5Jh3Q66vhQj1Cllm0zvnaY98+NFx+Dv2CF/f5O/t8x+KaNdrdIAsruNzoh/KpialbqAnw==",
        "dev": true,
        "requires": {
          "atob": "^2.1.2",
          "decode-uri-component": "^0.2.0",
          "resolve-url": "^0.2.1",
          "source-map-url": "^0.4.0",
          "urix": "^0.1.0"
        }
      },
      "source-map-support": {
        "version": "0.5.19",
        "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.19.tgz",
        "integrity": "sha512-Wonm7zOCIJzBGQdB+thsPar0kYuCIzYvxZwlBa87yi/Mdjv7Tip2cyVbLj5o0cFPN4EVkuTwb3GDDyUx2DGnGw==",
        "dev": true,
        "requires": {
          "buffer-from": "^1.0.0",
          "source-map": "^0.6.0"
        }
      },
      "source-map-url": {
        "version": "0.4.0",
        "resolved": "https://registry.npmjs.org/source-map-url/-/source-map-url-0.4.0.tgz",
        "integrity": "sha1-PpNdfd1zYxuXZZlW1VEo6HtQhKM=",
        "dev": true
      },
      "split-string": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/split-string/-/split-string-3.1.0.tgz",
        "integrity": "sha512-NzNVhJDYpwceVVii8/Hu6DKfD2G+NrQHlS/V/qgv763EYudVwEcMQNxd2lh+0VrUByXN/oJkl5grOhYWvQUYiw==",
        "dev": true,
        "requires": {
          "extend-shallow": "^3.0.0"
        }
      },
      "sprintf-js": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
        "integrity": "sha1-BOaSb2YolTVPPdAVIDYzuFcpfiw=",
        "dev": true
      },
      "sshpk": {
        "version": "1.16.1",
        "resolved": "https://registry.npmjs.org/sshpk/-/sshpk-1.16.1.tgz",
        "integrity": "sha512-HXXqVUq7+pcKeLqqZj6mHFUMvXtOJt1uoUx09pFW6011inTMxqI8BA8PM95myrIyyKwdnzjdFjLiE6KBPVtJIg==",
        "dev": true,
        "requires": {
          "asn1": "~0.2.3",
          "assert-plus": "^1.0.0",
          "bcrypt-pbkdf": "^1.0.0",
          "dashdash": "^1.12.0",
          "ecc-jsbn": "~0.1.1",
          "getpass": "^0.1.1",
          "jsbn": "~0.1.0",
          "safer-buffer": "^2.0.2",
          "tweetnacl": "~0.14.0"
        }
      },
      "stable": {
        "version": "0.1.8",
        "resolved": "https://registry.npmjs.org/stable/-/stable-0.1.8.tgz",
        "integrity": "sha512-ji9qxRnOVfcuLDySj9qzhGSEFVobyt1kIOSkj1qZzYLzq7Tos/oUUWvotUPQLlrsidqsK6tBH89Bc9kL5zHA6w==",
        "dev": true
      },
      "static-eval": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/static-eval/-/static-eval-2.1.0.tgz",
        "integrity": "sha512-agtxZ/kWSsCkI5E4QifRwsaPs0P0JmZV6dkLz6ILYfFYQGn+5plctanRN+IC8dJRiFkyXHrwEE3W9Wmx67uDbw==",
        "dev": true,
        "requires": {
          "escodegen": "^1.11.1"
        },
        "dependencies": {
          "escodegen": {
            "version": "1.14.3",
            "resolved": "https://registry.npmjs.org/escodegen/-/escodegen-1.14.3.tgz",
            "integrity": "sha512-qFcX0XJkdg+PB3xjZZG/wKSuT1PnQWx57+TVSjIMmILd2yC/6ByYElPwJnslDsuWuSAp4AwJGumarAAmJch5Kw==",
            "dev": true,
            "requires": {
              "esprima": "^4.0.1",
              "estraverse": "^4.2.0",
              "esutils": "^2.0.2",
              "optionator": "^0.8.1",
              "source-map": "~0.6.1"
            }
          },
          "esprima": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
            "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==",
            "dev": true
          }
        }
      },
      "static-extend": {
        "version": "0.1.2",
        "resolved": "https://registry.npmjs.org/static-extend/-/static-extend-0.1.2.tgz",
        "integrity": "sha1-YICcOcv/VTNyJv1eC1IPNB8ftcY=",
        "dev": true,
        "requires": {
          "define-property": "^0.2.5",
          "object-copy": "^0.1.0"
        },
        "dependencies": {
          "define-property": {
            "version": "0.2.5",
            "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
            "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
            "dev": true,
            "requires": {
              "is-descriptor": "^0.1.0"
            }
          }
        }
      },
      "static-module": {
        "version": "2.2.5",
        "resolved": "https://registry.npmjs.org/static-module/-/static-module-2.2.5.tgz",
        "integrity": "sha512-D8vv82E/Kpmz3TXHKG8PPsCPg+RAX6cbCOyvjM6x04qZtQ47EtJFVwRsdov3n5d6/6ynrOY9XB4JkaZwB2xoRQ==",
        "dev": true,
        "requires": {
          "concat-stream": "~1.6.0",
          "convert-source-map": "^1.5.1",
          "duplexer2": "~0.1.4",
          "escodegen": "~1.9.0",
          "falafel": "^2.1.0",
          "has": "^1.0.1",
          "magic-string": "^0.22.4",
          "merge-source-map": "1.0.4",
          "object-inspect": "~1.4.0",
          "quote-stream": "~1.0.2",
          "readable-stream": "~2.3.3",
          "shallow-copy": "~0.0.1",
          "static-eval": "^2.0.0",
          "through2": "~2.0.3"
        }
      },
      "statuses": {
        "version": "1.5.0",
        "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
        "integrity": "sha1-Fhx9rBd2Wf2YEfQ3cfqZOBR4Yow=",
        "dev": true
      },
      "stealthy-require": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/stealthy-require/-/stealthy-require-1.1.1.tgz",
        "integrity": "sha1-NbCYdbT/SfJqd35QmzCQoyJr8ks=",
        "dev": true
      },
      "stream-browserify": {
        "version": "2.0.2",
        "resolved": "https://registry.npmjs.org/stream-browserify/-/stream-browserify-2.0.2.tgz",
        "integrity": "sha512-nX6hmklHs/gr2FuxYDltq8fJA1GDlxKQCz8O/IM4atRqBH8OORmBNgfvW5gG10GT/qQ9u0CzIvr2X5Pkt6ntqg==",
        "dev": true,
        "requires": {
          "inherits": "~2.0.1",
          "readable-stream": "^2.0.2"
        }
      },
      "stream-http": {
        "version": "2.8.3",
        "resolved": "https://registry.npmjs.org/stream-http/-/stream-http-2.8.3.tgz",
        "integrity": "sha512-+TSkfINHDo4J+ZobQLWiMouQYB+UVYFttRA94FpEzzJ7ZdqcL4uUUQ7WkdkI4DSozGmgBUE/a47L+38PenXhUw==",
        "dev": true,
        "requires": {
          "builtin-status-codes": "^3.0.0",
          "inherits": "^2.0.1",
          "readable-stream": "^2.3.6",
          "to-arraybuffer": "^1.0.0",
          "xtend": "^4.0.0"
        }
      },
      "string.prototype.trimend": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.1.tgz",
        "integrity": "sha512-LRPxFUaTtpqYsTeNKaFOw3R4bxIzWOnbQ837QfBylo8jIxtcbK/A/sMV7Q+OAV/vWo+7s25pOE10KYSjaSO06g==",
        "dev": true,
        "requires": {
          "define-properties": "^1.1.3",
          "es-abstract": "^1.17.5"
        }
      },
      "string.prototype.trimstart": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.1.tgz",
        "integrity": "sha512-XxZn+QpvrBI1FOcg6dIpxUPgWCPuNXvMD72aaRaUQv1eD4e/Qy8i/hFTe0BUmD60p/QA6bh1avmuPTfNjqVWRw==",
        "dev": true,
        "requires": {
          "define-properties": "^1.1.3",
          "es-abstract": "^1.17.5"
        }
      },
      "string_decoder": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
        "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
        "dev": true,
        "requires": {
          "safe-buffer": "~5.1.0"
        }
      },
      "strip-ansi": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
        "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
        "dev": true,
        "requires": {
          "ansi-regex": "^3.0.0"
        }
      },
      "stylehacks": {
        "version": "4.0.3",
        "resolved": "https://registry.npmjs.org/stylehacks/-/stylehacks-4.0.3.tgz",
        "integrity": "sha512-7GlLk9JwlElY4Y6a/rmbH2MhVlTyVmiJd1PfTCqFaIBEGMYNsrO/v3SeGTdhBThLg4Z+NbOk/qFMwCa+J+3p/g==",
        "dev": true,
        "requires": {
          "browserslist": "^4.0.0",
          "postcss": "^7.0.0",
          "postcss-selector-parser": "^3.0.0"
        },
        "dependencies": {
          "postcss-selector-parser": {
            "version": "3.1.2",
            "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-3.1.2.tgz",
            "integrity": "sha512-h7fJ/5uWuRVyOtkO45pnt1Ih40CEleeyCHzipqAZO2e5H20g25Y48uYnFUiShvY4rZWNJ/Bib/KVPmanaCtOhA==",
            "dev": true,
            "requires": {
              "dot-prop": "^5.2.0",
              "indexes-of": "^1.0.1",
              "uniq": "^1.0.1"
            }
          }
        }
      },
      "supports-color": {
        "version": "5.5.0",
        "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
        "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
        "dev": true,
        "requires": {
          "has-flag": "^3.0.0"
        }
      },
      "svgo": {
        "version": "1.3.2",
        "resolved": "https://registry.npmjs.org/svgo/-/svgo-1.3.2.tgz",
        "integrity": "sha512-yhy/sQYxR5BkC98CY7o31VGsg014AKLEPxdfhora76l36hD9Rdy5NZA/Ocn6yayNPgSamYdtX2rFJdcv07AYVw==",
        "dev": true,
        "requires": {
          "chalk": "^2.4.1",
          "coa": "^2.0.2",
          "css-select": "^2.0.0",
          "css-select-base-adapter": "^0.1.1",
          "css-tree": "1.0.0-alpha.37",
          "csso": "^4.0.2",
          "js-yaml": "^3.13.1",
          "mkdirp": "~0.5.1",
          "object.values": "^1.1.0",
          "sax": "~1.2.4",
          "stable": "^0.1.8",
          "unquote": "~1.1.1",
          "util.promisify": "~1.0.0"
        }
      },
      "symbol-tree": {
        "version": "3.2.4",
        "resolved": "https://registry.npmjs.org/symbol-tree/-/symbol-tree-3.2.4.tgz",
        "integrity": "sha512-9QNk5KwDF+Bvz+PyObkmSYjI5ksVUYtjW7AU22r2NKcfLJcXp96hkDWU3+XndOsUb+AQ9QhfzfCT2O+CNWT5Tw==",
        "dev": true
      },
      "terser": {
        "version": "3.17.0",
        "resolved": "https://registry.npmjs.org/terser/-/terser-3.17.0.tgz",
        "integrity": "sha512-/FQzzPJmCpjAH9Xvk2paiWrFq+5M6aVOf+2KRbwhByISDX/EujxsK+BAvrhb6H+2rtrLCHK9N01wO014vrIwVQ==",
        "dev": true,
        "requires": {
          "commander": "^2.19.0",
          "source-map": "~0.6.1",
          "source-map-support": "~0.5.10"
        }
      },
      "through2": {
        "version": "2.0.5",
        "resolved": "https://registry.npmjs.org/through2/-/through2-2.0.5.tgz",
        "integrity": "sha512-/mrRod8xqpA+IHSLyGCQ2s8SPHiCDEeQJSep1jqLYeEUClOFG2Qsh+4FU6G9VeqpZnGW/Su8LQGc4YKni5rYSQ==",
        "dev": true,
        "requires": {
          "readable-stream": "~2.3.6",
          "xtend": "~4.0.1"
        }
      },
      "timers-browserify": {
        "version": "2.0.11",
        "resolved": "https://registry.npmjs.org/timers-browserify/-/timers-browserify-2.0.11.tgz",
        "integrity": "sha512-60aV6sgJ5YEbzUdn9c8kYGIqOubPoUdqQCul3SBAsRCZ40s6Y5cMcrW4dt3/k/EsbLVJNl9n6Vz3fTc+k2GeKQ==",
        "dev": true,
        "requires": {
          "setimmediate": "^1.0.4"
        }
      },
      "timsort": {
        "version": "0.3.0",
        "resolved": "https://registry.npmjs.org/timsort/-/timsort-0.3.0.tgz",
        "integrity": "sha1-QFQRqOfmM5/mTbmiNN4R3DHgK9Q=",
        "dev": true
      },
      "tiny-inflate": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/tiny-inflate/-/tiny-inflate-1.0.3.tgz",
        "integrity": "sha512-pkY1fj1cKHb2seWDy0B16HeWyczlJA9/WW3u3c4z/NiWDsO3DOU5D7nhTLE9CF0yXv/QZFY7sEJmj24dK+Rrqw==",
        "dev": true
      },
      "to-arraybuffer": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/to-arraybuffer/-/to-arraybuffer-1.0.1.tgz",
        "integrity": "sha1-fSKbH8xjfkZsoIEYCDanqr/4P0M=",
        "dev": true
      },
      "to-fast-properties": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-2.0.0.tgz",
        "integrity": "sha1-3F5pjL0HkmW8c+A3doGk5Og/YW4=",
        "dev": true
      },
      "to-object-path": {
        "version": "0.3.0",
        "resolved": "https://registry.npmjs.org/to-object-path/-/to-object-path-0.3.0.tgz",
        "integrity": "sha1-KXWIt7Dn4KwI4E5nL4XB9JmeF68=",
        "dev": true,
        "requires": {
          "kind-of": "^3.0.2"
        },
        "dependencies": {
          "kind-of": {
            "version": "3.2.2",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
            "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
            "dev": true,
            "requires": {
              "is-buffer": "^1.1.5"
            }
          }
        }
      },
      "to-regex": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/to-regex/-/to-regex-3.0.2.tgz",
        "integrity": "sha512-FWtleNAtZ/Ki2qtqej2CXTOayOH9bHDQF+Q48VpWyDXjbYxA4Yz8iDB31zXOBUlOHHKidDbqGVrTUvQMPmBGBw==",
        "dev": true,
        "requires": {
          "define-property": "^2.0.2",
          "extend-shallow": "^3.0.2",
          "regex-not": "^1.0.2",
          "safe-regex": "^1.1.0"
        }
      },
      "to-regex-range": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",
        "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
        "dev": true,
        "requires": {
          "is-number": "^3.0.0",
          "repeat-string": "^1.6.1"
        }
      },
      "toidentifier": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.0.tgz",
        "integrity": "sha512-yaOH/Pk/VEhBWWTlhI+qXxDFXlejDGcQipMlyxda9nthulaxLZUNcUqFxokp0vcYnvteJln5FNQDRrxj3YcbVw==",
        "dev": true
      },
      "tough-cookie": {
        "version": "2.5.0",
        "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.5.0.tgz",
        "integrity": "sha512-nlLsUzgm1kfLXSXfRZMc1KLAugd4hqJHDTvc2hDIwS3mZAfMEuMbc03SujMF+GEcpaX/qboeycw6iO8JwVv2+g==",
        "dev": true,
        "requires": {
          "psl": "^1.1.28",
          "punycode": "^2.1.1"
        }
      },
      "tr46": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/tr46/-/tr46-1.0.1.tgz",
        "integrity": "sha1-qLE/1r/SSJUZZ0zN5VujaTtwbQk=",
        "dev": true,
        "requires": {
          "punycode": "^2.1.0"
        }
      },
      "tty-browserify": {
        "version": "0.0.0",
        "resolved": "https://registry.npmjs.org/tty-browserify/-/tty-browserify-0.0.0.tgz",
        "integrity": "sha1-oVe6QC2iTpv5V/mqadUk7tQpAaY=",
        "dev": true
      },
      "tunnel-agent": {
        "version": "0.6.0",
        "resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
        "integrity": "sha1-J6XeoGs2sEoKmWZ3SykIaPD8QP0=",
        "dev": true,
        "requires": {
          "safe-buffer": "^5.0.1"
        }
      },
      "tweetnacl": {
        "version": "0.14.5",
        "resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-0.14.5.tgz",
        "integrity": "sha1-WuaBd/GS1EViadEIr6k/+HQ/T2Q=",
        "dev": true
      },
      "type-check": {
        "version": "0.3.2",
        "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.3.2.tgz",
        "integrity": "sha1-WITKtRLPHTVeP7eE8wgEsrUg23I=",
        "dev": true,
        "requires": {
          "prelude-ls": "~1.1.2"
        }
      },
      "typedarray": {
        "version": "0.0.6",
        "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",
        "integrity": "sha1-hnrHTjhkGHsdPUfZlqeOxciDB3c=",
        "dev": true
      },
      "uncss": {
        "version": "0.17.3",
        "resolved": "https://registry.npmjs.org/uncss/-/uncss-0.17.3.tgz",
        "integrity": "sha512-ksdDWl81YWvF/X14fOSw4iu8tESDHFIeyKIeDrK6GEVTQvqJc1WlOEXqostNwOCi3qAj++4EaLsdAgPmUbEyog==",
        "dev": true,
        "requires": {
          "commander": "^2.20.0",
          "glob": "^7.1.4",
          "is-absolute-url": "^3.0.1",
          "is-html": "^1.1.0",
          "jsdom": "^14.1.0",
          "lodash": "^4.17.15",
          "postcss": "^7.0.17",
          "postcss-selector-parser": "6.0.2",
          "request": "^2.88.0"
        },
        "dependencies": {
          "is-absolute-url": {
            "version": "3.0.3",
            "resolved": "https://registry.npmjs.org/is-absolute-url/-/is-absolute-url-3.0.3.tgz",
            "integrity": "sha512-opmNIX7uFnS96NtPmhWQgQx6/NYFgsUXYMllcfzwWKUMwfo8kku1TvE6hkNcH+Q1ts5cMVrsY7j0bxXQDciu9Q==",
            "dev": true
          }
        }
      },
      "unicode-canonical-property-names-ecmascript": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/unicode-canonical-property-names-ecmascript/-/unicode-canonical-property-names-ecmascript-1.0.4.tgz",
        "integrity": "sha512-jDrNnXWHd4oHiTZnx/ZG7gtUTVp+gCcTTKr8L0HjlwphROEW3+Him+IpvC+xcJEFegapiMZyZe02CyuOnRmbnQ==",
        "dev": true
      },
      "unicode-match-property-ecmascript": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/unicode-match-property-ecmascript/-/unicode-match-property-ecmascript-1.0.4.tgz",
        "integrity": "sha512-L4Qoh15vTfntsn4P1zqnHulG0LdXgjSO035fEpdtp6YxXhMT51Q6vgM5lYdG/5X3MjS+k/Y9Xw4SFCY9IkR0rg==",
        "dev": true,
        "requires": {
          "unicode-canonical-property-names-ecmascript": "^1.0.4",
          "unicode-property-aliases-ecmascript": "^1.0.4"
        }
      },
      "unicode-match-property-value-ecmascript": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/unicode-match-property-value-ecmascript/-/unicode-match-property-value-ecmascript-1.2.0.tgz",
        "integrity": "sha512-wjuQHGQVofmSJv1uVISKLE5zO2rNGzM/KCYZch/QQvez7C1hUhBIuZ701fYXExuufJFMPhv2SyL8CyoIfMLbIQ==",
        "dev": true
      },
      "unicode-property-aliases-ecmascript": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/unicode-property-aliases-ecmascript/-/unicode-property-aliases-ecmascript-1.1.0.tgz",
        "integrity": "sha512-PqSoPh/pWetQ2phoj5RLiaqIk4kCNwoV3CI+LfGmWLKI3rE3kl1h59XpX2BjgDrmbxD9ARtQobPGU1SguCYuQg==",
        "dev": true
      },
      "unicode-trie": {
        "version": "0.3.1",
        "resolved": "https://registry.npmjs.org/unicode-trie/-/unicode-trie-0.3.1.tgz",
        "integrity": "sha1-1nHd3YkQGgi6w3tqUWEBBgIFIIU=",
        "dev": true,
        "requires": {
          "pako": "^0.2.5",
          "tiny-inflate": "^1.0.0"
        }
      },
      "union-value": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/union-value/-/union-value-1.0.1.tgz",
        "integrity": "sha512-tJfXmxMeWYnczCVs7XAEvIV7ieppALdyepWMkHkwciRpZraG/xwT+s2JN8+pr1+8jCRf80FFzvr+MpQeeoF4Xg==",
        "dev": true,
        "requires": {
          "arr-union": "^3.1.0",
          "get-value": "^2.0.6",
          "is-extendable": "^0.1.1",
          "set-value": "^2.0.1"
        }
      },
      "uniq": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/uniq/-/uniq-1.0.1.tgz",
        "integrity": "sha1-sxxa6CVIRKOoKBVBzisEuGWnNP8=",
        "dev": true
      },
      "uniqs": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/uniqs/-/uniqs-2.0.0.tgz",
        "integrity": "sha1-/+3ks2slKQaW5uFl1KWe25mOawI=",
        "dev": true
      },
      "unquote": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/unquote/-/unquote-1.1.1.tgz",
        "integrity": "sha1-j97XMk7G6IoP+LkF58CYzcCG1UQ=",
        "dev": true
      },
      "unset-value": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/unset-value/-/unset-value-1.0.0.tgz",
        "integrity": "sha1-g3aHP30jNRef+x5vw6jtDfyKtVk=",
        "dev": true,
        "requires": {
          "has-value": "^0.3.1",
          "isobject": "^3.0.0"
        },
        "dependencies": {
          "has-value": {
            "version": "0.3.1",
            "resolved": "https://registry.npmjs.org/has-value/-/has-value-0.3.1.tgz",
            "integrity": "sha1-ex9YutpiyoJ+wKIHgCVlSEWZXh8=",
            "dev": true,
            "requires": {
              "get-value": "^2.0.3",
              "has-values": "^0.1.4",
              "isobject": "^2.0.0"
            },
            "dependencies": {
              "isobject": {
                "version": "2.1.0",
                "resolved": "https://registry.npmjs.org/isobject/-/isobject-2.1.0.tgz",
                "integrity": "sha1-8GVWEJaj8dou9GJy+BXIQNh+DIk=",
                "dev": true,
                "requires": {
                  "isarray": "1.0.0"
                }
              }
            }
          },
          "has-values": {
            "version": "0.1.4",
            "resolved": "https://registry.npmjs.org/has-values/-/has-values-0.1.4.tgz",
            "integrity": "sha1-bWHeldkd/Km5oCCJrThL/49it3E=",
            "dev": true
          }
        }
      },
      "upath": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/upath/-/upath-1.2.0.tgz",
        "integrity": "sha512-aZwGpamFO61g3OlfT7OQCHqhGnW43ieH9WZeP7QxN/G/jS4jfqUkZxoryvJgVPEcrl5NL/ggHsSmLMHuH64Lhg==",
        "dev": true
      },
      "uri-js": {
        "version": "4.2.2",
        "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.2.2.tgz",
        "integrity": "sha512-KY9Frmirql91X2Qgjry0Wd4Y+YTdrdZheS8TFwvkbLWf/G5KNJDCh6pKL5OZctEW4+0Baa5idK2ZQuELRwPznQ==",
        "dev": true,
        "requires": {
          "punycode": "^2.1.0"
        }
      },
      "urix": {
        "version": "0.1.0",
        "resolved": "https://registry.npmjs.org/urix/-/urix-0.1.0.tgz",
        "integrity": "sha1-2pN/emLiH+wf0Y1Js1wpNQZ6bHI=",
        "dev": true
      },
      "url": {
        "version": "0.11.0",
        "resolved": "https://registry.npmjs.org/url/-/url-0.11.0.tgz",
        "integrity": "sha1-ODjpfPxgUh63PFJajlW/3Z4uKPE=",
        "dev": true,
        "requires": {
          "punycode": "1.3.2",
          "querystring": "0.2.0"
        },
        "dependencies": {
          "punycode": {
            "version": "1.3.2",
            "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.3.2.tgz",
            "integrity": "sha1-llOgNvt8HuQjQvIyXM7v6jkmxI0=",
            "dev": true
          }
        }
      },
      "use": {
        "version": "3.1.1",
        "resolved": "https://registry.npmjs.org/use/-/use-3.1.1.tgz",
        "integrity": "sha512-cwESVXlO3url9YWlFW/TA9cshCEhtu7IKJ/p5soJ/gGpj7vbvFrAY/eIioQ6Dw23KjZhYgiIo8HOs1nQ2vr/oQ==",
        "dev": true
      },
      "util": {
        "version": "0.11.1",
        "resolved": "https://registry.npmjs.org/util/-/util-0.11.1.tgz",
        "integrity": "sha512-HShAsny+zS2TZfaXxD9tYj4HQGlBezXZMZuM/S5PKLLoZkShZiGk9o5CzukI1LVHZvjdvZ2Sj1aW/Ndn2NB/HQ==",
        "dev": true,
        "requires": {
          "inherits": "2.0.3"
        },
        "dependencies": {
          "inherits": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
            "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4=",
            "dev": true
          }
        }
      },
      "util-deprecate": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
        "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8=",
        "dev": true
      },
      "util.promisify": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/util.promisify/-/util.promisify-1.0.1.tgz",
        "integrity": "sha512-g9JpC/3He3bm38zsLupWryXHoEcS22YHthuPQSJdMy6KNrzIRzWqcsHzD/WUnqe45whVou4VIsPew37DoXWNrA==",
        "dev": true,
        "requires": {
          "define-properties": "^1.1.3",
          "es-abstract": "^1.17.2",
          "has-symbols": "^1.0.1",
          "object.getownpropertydescriptors": "^2.1.0"
        }
      },
      "uuid": {
        "version": "3.4.0",
        "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.4.0.tgz",
        "integrity": "sha512-HjSDRw6gZE5JMggctHBcjVak08+KEVhSIiDzFnT9S9aegmp85S/bReBVTb4QTFaRNptJ9kuYaNhnbNEOkbKb/A==",
        "dev": true
      },
      "v8-compile-cache": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/v8-compile-cache/-/v8-compile-cache-2.1.1.tgz",
        "integrity": "sha512-8OQ9CL+VWyt3JStj7HX7/ciTL2V3Rl1Wf5OL+SNTm0yK1KvtReVulksyeRnCANHHuUxHlQig+JJDlUhBt1NQDQ==",
        "dev": true
      },
      "vendors": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/vendors/-/vendors-1.0.4.tgz",
        "integrity": "sha512-/juG65kTL4Cy2su4P8HjtkTxk6VmJDiOPBufWniqQ6wknac6jNiXS9vU+hO3wgusiyqWlzTbVHi0dyJqRONg3w==",
        "dev": true
      },
      "verror": {
        "version": "1.10.0",
        "resolved": "https://registry.npmjs.org/verror/-/verror-1.10.0.tgz",
        "integrity": "sha1-OhBcoXBTr1XW4nDB+CiGguGNpAA=",
        "dev": true,
        "requires": {
          "assert-plus": "^1.0.0",
          "core-util-is": "1.0.2",
          "extsprintf": "^1.2.0"
        }
      },
      "vlq": {
        "version": "0.2.3",
        "resolved": "https://registry.npmjs.org/vlq/-/vlq-0.2.3.tgz",
        "integrity": "sha512-DRibZL6DsNhIgYQ+wNdWDL2SL3bKPlVrRiBqV5yuMm++op8W4kGFtaQfCs4KEJn0wBZcHVHJ3eoywX8983k1ow==",
        "dev": true
      },
      "vm-browserify": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/vm-browserify/-/vm-browserify-1.1.2.tgz",
        "integrity": "sha512-2ham8XPWTONajOR0ohOKOHXkm3+gaBmGut3SRuu75xLd/RRaY6vqgh8NBYYk7+RW3u5AtzPQZG8F10LHkl0lAQ==",
        "dev": true
      },
      "w3c-hr-time": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/w3c-hr-time/-/w3c-hr-time-1.0.2.tgz",
        "integrity": "sha512-z8P5DvDNjKDoFIHK7q8r8lackT6l+jo/Ye3HOle7l9nICP9lf1Ci25fy9vHd0JOWewkIFzXIEig3TdKT7JQ5fQ==",
        "dev": true,
        "requires": {
          "browser-process-hrtime": "^1.0.0"
        }
      },
      "w3c-xmlserializer": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/w3c-xmlserializer/-/w3c-xmlserializer-1.1.2.tgz",
        "integrity": "sha512-p10l/ayESzrBMYWRID6xbuCKh2Fp77+sA0doRuGn4tTIMrrZVeqfpKjXHY+oDh3K4nLdPgNwMTVP6Vp4pvqbNg==",
        "dev": true,
        "requires": {
          "domexception": "^1.0.1",
          "webidl-conversions": "^4.0.2",
          "xml-name-validator": "^3.0.0"
        }
      },
      "wcwidth": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/wcwidth/-/wcwidth-1.0.1.tgz",
        "integrity": "sha1-8LDc+RW8X/FSivrbLA4XtTLaL+g=",
        "dev": true,
        "requires": {
          "defaults": "^1.0.3"
        }
      },
      "webidl-conversions": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-4.0.2.tgz",
        "integrity": "sha512-YQ+BmxuTgd6UXZW3+ICGfyqRyHXVlD5GtQr5+qjiNW7bF0cqrzX500HVXPBOvgXb5YnzDd+h0zqyv61KUD7+Sg==",
        "dev": true
      },
      "whatwg-encoding": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/whatwg-encoding/-/whatwg-encoding-1.0.5.tgz",
        "integrity": "sha512-b5lim54JOPN9HtzvK9HFXvBma/rnfFeqsic0hSpjtDbVxR3dJKLc+KB4V6GgiGOvl7CY/KNh8rxSo9DKQrnUEw==",
        "dev": true,
        "requires": {
          "iconv-lite": "0.4.24"
        }
      },
      "whatwg-mimetype": {
        "version": "2.3.0",
        "resolved": "https://registry.npmjs.org/whatwg-mimetype/-/whatwg-mimetype-2.3.0.tgz",
        "integrity": "sha512-M4yMwr6mAnQz76TbJm914+gPpB/nCwvZbJU28cUD6dR004SAxDLOOSUaB1JDRqLtaOV/vi0IC5lEAGFgrjGv/g==",
        "dev": true
      },
      "whatwg-url": {
        "version": "7.1.0",
        "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-7.1.0.tgz",
        "integrity": "sha512-WUu7Rg1DroM7oQvGWfOiAK21n74Gg+T4elXEQYkOhtyLeWiJFoOGLXPKI/9gzIie9CtwVLm8wtw6YJdKyxSjeg==",
        "dev": true,
        "requires": {
          "lodash.sortby": "^4.7.0",
          "tr46": "^1.0.1",
          "webidl-conversions": "^4.0.2"
        }
      },
      "which": {
        "version": "1.3.1",
        "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
        "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
        "dev": true,
        "requires": {
          "isexe": "^2.0.0"
        }
      },
      "word-wrap": {
        "version": "1.2.3",
        "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.3.tgz",
        "integrity": "sha512-Hz/mrNwitNRh/HUAtM/VT/5VH+ygD6DV7mYKZAtHOrbs8U7lvPS6xf7EJKMF0uW1KJCl0H701g3ZGus+muE5vQ==",
        "dev": true
      },
      "wrappy": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
        "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8=",
        "dev": true
      },
      "ws": {
        "version": "5.2.2",
        "resolved": "https://registry.npmjs.org/ws/-/ws-5.2.2.tgz",
        "integrity": "sha512-jaHFD6PFv6UgoIVda6qZllptQsMlDEJkTQcybzzXDYM1XO9Y8em691FGMPmM46WGyLU4z9KMgQN+qrux/nhlHA==",
        "dev": true,
        "requires": {
          "async-limiter": "~1.0.0"
        }
      },
      "xml-name-validator": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/xml-name-validator/-/xml-name-validator-3.0.0.tgz",
        "integrity": "sha512-A5CUptxDsvxKJEU3yO6DuWBSJz/qizqzJKOMIfUJHETbBw/sFaDxgd6fxm1ewUaM0jZ444Fc5vC5ROYurg/4Pw==",
        "dev": true
      },
      "xmlchars": {
        "version": "2.2.0",
        "resolved": "https://registry.npmjs.org/xmlchars/-/xmlchars-2.2.0.tgz",
        "integrity": "sha512-JZnDKK8B0RCDw84FNdDAIpZK+JuJw+s7Lz8nksI7SIuU3UXJJslUthsi+uWBUYOwPFwW7W7PRLRfUKpxjtjFCw==",
        "dev": true
      },
      "xtend": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
        "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==",
        "dev": true
      }
    }
  }