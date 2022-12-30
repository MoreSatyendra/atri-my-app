import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "headerHome": {
      "callbacks": {}
    },
    "Flex1": {
      "callbacks": {}
    },
    "Flex2": {
      "callbacks": {}
    },
    "Flex3": {
      "callbacks": {}
    },
    "Flex5": {
      "callbacks": {}
    },
    "heroBanner": {
      "callbacks": {}
    },
    "Flex57": {
      "callbacks": {}
    },
    "Flex58": {
      "callbacks": {}
    },
    "Flex59": {
      "callbacks": {}
    },
    "Flex243": {
      "callbacks": {}
    },
    "Flex60": {
      "callbacks": {}
    },
    "TrustedBy": {
      "callbacks": {}
    },
    "Flex62": {
      "callbacks": {}
    },
    "logoContainer": {
      "callbacks": {}
    },
    "Services": {
      "callbacks": {}
    },
    "servicesContainer": {
      "callbacks": {}
    },
    "Flex65": {
      "callbacks": {}
    },
    "Flex66": {
      "callbacks": {}
    },
    "Flex70": {
      "callbacks": {}
    },
    "Flex71": {
      "callbacks": {}
    },
    "about": {
      "callbacks": {}
    },
    "Flex73": {
      "callbacks": {}
    },
    "Flex74": {
      "callbacks": {}
    },
    "Flex76": {
      "callbacks": {}
    },
    "Flex77": {
      "callbacks": {}
    },
    "Flex75": {
      "callbacks": {}
    },
    "Flex78": {
      "callbacks": {}
    },
    "Flex79": {
      "callbacks": {}
    },
    "experince": {
      "callbacks": {}
    },
    "Flex82": {
      "callbacks": {}
    },
    "Flex84": {
      "callbacks": {}
    },
    "Flex86": {
      "callbacks": {}
    },
    "Flex85": {
      "callbacks": {}
    },
    "Flex87": {
      "callbacks": {}
    },
    "Flex90": {
      "callbacks": {}
    },
    "Flex88": {
      "callbacks": {}
    },
    "Flex89": {
      "callbacks": {}
    },
    "Flex96": {
      "callbacks": {}
    },
    "Flex94": {
      "callbacks": {}
    },
    "Flex95": {
      "callbacks": {}
    },
    "Flex129": {
      "callbacks": {}
    },
    "Flex126": {
      "callbacks": {}
    },
    "Flex121": {
      "callbacks": {}
    },
    "Flex134": {
      "callbacks": {}
    },
    "Flex133": {
      "callbacks": {}
    },
    "Flex127": {
      "callbacks": {}
    },
    "Flex123": {
      "callbacks": {}
    },
    "Flex132": {
      "callbacks": {}
    },
    "Flex131": {
      "callbacks": {}
    },
    "Flex128": {
      "callbacks": {}
    },
    "Flex124": {
      "callbacks": {}
    },
    "Flex125": {
      "callbacks": {}
    },
    "Flex130": {
      "callbacks": {}
    },
    "FAQ": {
      "callbacks": {}
    },
    "Flex158": {
      "callbacks": {}
    },
    "Flex160": {
      "callbacks": {}
    },
    "Flex157": {
      "callbacks": {}
    },
    "Flex155": {
      "callbacks": {}
    },
    "Flex148": {
      "callbacks": {}
    },
    "Flex149": {
      "callbacks": {}
    },
    "Flex163": {
      "callbacks": {}
    },
    "Flex161": {
      "callbacks": {}
    },
    "Flex162": {
      "callbacks": {}
    },
    "Flex169": {
      "callbacks": {}
    },
    "Flex167": {
      "callbacks": {}
    },
    "Flex168": {
      "callbacks": {}
    },
    "Flex172": {
      "callbacks": {}
    },
    "Flex170": {
      "callbacks": {}
    },
    "Flex171": {
      "callbacks": {}
    },
    "Flex186": {
      "callbacks": {}
    },
    "Flex182": {
      "callbacks": {}
    },
    "Flex174": {
      "callbacks": {}
    },
    "Flex175": {
      "callbacks": {}
    },
    "Flex183": {
      "callbacks": {}
    },
    "Flex176": {
      "callbacks": {}
    },
    "Flex177": {
      "callbacks": {}
    },
    "Flex184": {
      "callbacks": {}
    },
    "Flex178": {
      "callbacks": {}
    },
    "Flex179": {
      "callbacks": {}
    },
    "Flex185": {
      "callbacks": {}
    },
    "Flex180": {
      "callbacks": {}
    },
    "Flex181": {
      "callbacks": {}
    },
    "Flex173": {
      "callbacks": {}
    },
    "Footer": {
      "callbacks": {}
    },
    "Flex215": {
      "callbacks": {}
    },
    "Flex213": {
      "callbacks": {}
    },
    "Flex214": {
      "callbacks": {}
    },
    "Flex211": {
      "callbacks": {}
    },
    "Flex203": {
      "callbacks": {}
    },
    "Flex204": {
      "callbacks": {}
    },
    "Flex205": {
      "callbacks": {}
    },
    "Flex212": {
      "callbacks": {}
    },
    "Flex201": {
      "callbacks": {}
    },
    "Flex210": {
      "callbacks": {}
    },
    "testimonial": {
      "callbacks": {}
    },
    "Flex240": {
      "callbacks": {}
    },
    "Flex239": {
      "callbacks": {}
    },
    "Flex238": {
      "callbacks": {}
    },
    "Flex232": {
      "callbacks": {}
    },
    "Flex220": {
      "callbacks": {}
    },
    "Flex217": {
      "callbacks": {}
    },
    "Flex242": {
      "callbacks": {}
    },
    "blog": {
      "callbacks": {}
    },
    "Flex272": {
      "callbacks": {}
    },
    "Flex269": {
      "callbacks": {}
    },
    "Flex267": {
      "callbacks": {}
    },
    "Flex259": {
      "callbacks": {}
    },
    "Flex285": {
      "callbacks": {}
    },
    "Flex284": {
      "callbacks": {}
    },
    "Flex287": {
      "callbacks": {}
    },
    "Flex286": {
      "callbacks": {}
    },
    "Flex289": {
      "callbacks": {}
    },
    "Flex288": {
      "callbacks": {}
    },
    "Flex291": {
      "callbacks": {}
    },
    "Flex290": {
      "callbacks": {}
    },
    "Flex270": {
      "callbacks": {}
    },
    "Flex292": {
      "callbacks": {}
    },
    "project": {
      "callbacks": {}
    },
    "Flex280": {
      "callbacks": {}
    },
    "Flex278": {
      "callbacks": {}
    },
    "Flex274": {
      "callbacks": {}
    },
    "Flex293": {
      "callbacks": {}
    },
    "Flex275": {
      "callbacks": {}
    },
    "Flex294": {
      "callbacks": {}
    },
    "Flex295": {
      "callbacks": {}
    },
    "Flex296": {
      "callbacks": {}
    },
    "Flex302": {
      "callbacks": {}
    },
    "Flex301": {
      "callbacks": {}
    },
    "Flex300": {
      "callbacks": {}
    },
    "Flex305": {
      "callbacks": {}
    },
    "Flex304": {
      "callbacks": {}
    },
    "Flex303": {
      "callbacks": {}
    },
    "Flex308": {
      "callbacks": {}
    },
    "Flex307": {
      "callbacks": {}
    },
    "Flex306": {
      "callbacks": {}
    },
    "Flex311": {
      "callbacks": {}
    },
    "Flex310": {
      "callbacks": {}
    },
    "Flex309": {
      "callbacks": {}
    },
    "Flex279": {
      "callbacks": {}
    },
    "Flex276": {
      "callbacks": {}
    },
    "Flex282": {
      "callbacks": {}
    },
    "Flex277": {
      "callbacks": {}
    },
    "Flex283": {
      "callbacks": {}
    },
    "TextBox6": {
      "custom": {
        "text": "Portfolio Creator"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox2": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/about"
            }
          }
        ]
      }
    },
    "TextBox3": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/services"
            }
          }
        ]
      }
    },
    "TextBox4": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/project"
            }
          }
        ]
      }
    },
    "TextBox5": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/blog"
            }
          }
        ]
      }
    },
    "TextBox1": {
      "custom": {
        "text": "Book a Call"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/contact"
            }
          }
        ]
      }
    },
    "Image1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons8-right-arrow-50.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/contact"
            }
          }
        ]
      }
    },
    "Image29": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/user1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox52": {
      "custom": {
        "text": "Hi! I'm Jack, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox51": {
      "custom": {
        "text": "Download CV"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image30": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons8-right-arrow-50.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button1": {
      "custom": {
        "text": "Submit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button4": {
      "custom": {
        "text": "Submit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox49": {
      "custom": {
        "text": "I design products"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox50": {
      "custom": {
        "text": "that delight and inspire people."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox53": {
      "custom": {
        "text": "Trusted by"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image31": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo1.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image32": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo4.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image33": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo3.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image34": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox54": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox55": {
      "custom": {
        "text": "Design that solves problem, one product at a time."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox56": {
      "custom": {
        "text": "Faster, better products that your users love. Here 's all the services I provide:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox57": {
      "custom": {
        "text": "What I can do for you"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image35": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icon3.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "UnorderedList1": {
      "custom": {
        "type": "circle",
        "titleColor": "#000000d9",
        "descriptionColor": "#00000073",
        "items": [
          {
            "title": "Design Strategy"
          },
          {
            "title": "Web and Mobile App Design",
            "description": "",
            "icon": ""
          },
          {
            "title": "Front-end Development",
            "description": "",
            "icon": ""
          }
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "UnorderedList2": {
      "custom": {
        "type": "circle",
        "titleColor": "#000000d9",
        "descriptionColor": "#00000073",
        "items": [
          {
            "title": "Sketch"
          },
          {
            "title": "Webflow",
            "description": "",
            "icon": ""
          },
          {
            "title": "Figma",
            "description": "",
            "icon": ""
          }
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image36": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icon1.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox58": {
      "custom": {
        "text": "Applications I'm fluant in"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox59": {
      "custom": {
        "text": "Every designer need the right tools to do perfect job. Thankfully, I'm multilingual"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "UnorderedList3": {
      "custom": {
        "type": "circle",
        "titleColor": "#000000d9",
        "descriptionColor": "#00000073",
        "items": [
          {
            "title": "Design Strategy"
          },
          {
            "title": "Web and Mobile App Design",
            "description": "",
            "icon": ""
          },
          {
            "title": "Front-end Development",
            "description": "",
            "icon": ""
          }
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image37": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icon2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox60": {
      "custom": {
        "text": "What you can expect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox61": {
      "custom": {
        "text": "I design products that are more than pretty. I make them shippable and usable."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox62": {
      "custom": {
        "text": "That's me!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox63": {
      "custom": {
        "text": "PRODUCT DESIGNER"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox64": {
      "custom": {
        "text": "Over the past 12 years, I've worked with a diverse range of clients, from startups to Fortune 500 companies. I love crafting interfaces that delight users and help businesses grow."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image38": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/img2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image39": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/img3.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image40": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/img1.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image41": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/img4.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox65": {
      "custom": {
        "text": "📚 Education"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox66": {
      "custom": {
        "text": "MSc (Human Computer Innteraction)"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox67": {
      "custom": {
        "text": "Standford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox68": {
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image43": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/upArrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image44": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/upArrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox69": {
      "custom": {
        "text": "• 2013-2014"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox70": {
      "custom": {
        "text": "MIT Summer School"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox71": {
      "custom": {
        "text": "UX Training Bootcamp"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image46": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/upArrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox75": {
      "custom": {
        "text": "• 2009-2012"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox76": {
      "custom": {
        "text": "California State University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox77": {
      "custom": {
        "text": "BSc in Software Engineering"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox110": {
      "custom": {
        "text": "💼  Work Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox103": {
      "custom": {
        "text": "• April 2016 - May 2017"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image54": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/upArrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image59": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/workIcon3.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox113": {
      "custom": {
        "text": "UI Designer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox114": {
      "custom": {
        "text": "Kingdom"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox106": {
      "custom": {
        "text": "• April 2016 - May 2017"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image55": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/upArrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image58": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/workIcon2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox111": {
      "custom": {
        "text": "Information Architect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox112": {
      "custom": {
        "text": "MusicMash"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image56": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/upArrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox107": {
      "custom": {
        "text": "• April 2019 - Current"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image57": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/workIcon1.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox108": {
      "custom": {
        "text": "SpaceFleet"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox109": {
      "custom": {
        "text": "Senior Product Manager"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image68": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/downArrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox131": {
      "custom": {
        "text": "What type of projects do you take on?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox132": {
      "custom": {
        "text": "I usually work on B2C software, that's my forte--where I shine best. But I also have about 15 B2B software products in my portfolio. I do end-to-end product design + branding"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox137": {
      "custom": {
        "text": "I only charge hourly for my ongoing projects that need work on the regular. One-time projects are charged upfront to keep it transparent and clean! My hourly rate is $100."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox138": {
      "custom": {
        "text": "What is your hourly rate?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image69": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/downArrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox141": {
      "custom": {
        "text": "I work Pacific Standard Time, but I'm always ready to help out in emergencies, no matter the hour."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox142": {
      "custom": {
        "text": "What time-zone do you work in?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image71": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/downArrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox143": {
      "custom": {
        "text": "Depends on the scope of the project, really. Some projects take less than a week. Some take months. The best way to find out is to get on a quick call with me, and discuss it. No strings attached!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox144": {
      "custom": {
        "text": "What is the typical timeline for a project?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image72": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/downArrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image74": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/downArrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox145": {
      "custom": {
        "text": "What if I need help after the project is complete?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox146": {
      "custom": {
        "text": "I always make sure to help out my clients one month after the project ends, for free. For any help post that, we can work out an ongoing arrangement!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image75": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/downArrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox147": {
      "custom": {
        "text": "What metrics do you use to measure success?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox148": {
      "custom": {
        "text": "The best metrics are customer adoption, happiness, task success, and engagement. There are a number of frameworks such as the System Usability Scale that help us understand product performance and I'm happy to help with that."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image76": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/downArrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox149": {
      "custom": {
        "text": "What does your design process look like?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox150": {
      "custom": {
        "text": "I take a problem-forward approach. Whether we're iterating on an existing product or building a new one from scratch, how to solve the user's problem in the simplest way possible is my first concern.  Send me an email to understand my process in depth"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox151": {
      "custom": {
        "text": "I quote a price upfront--so that you know exactly what you're paying and for what, and there are no surprises later. The exact cost of your project depends on the scope and requirements!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox152": {
      "custom": {
        "text": "How do you charge for projects ?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image77": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/downArrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox135": {
      "custom": {
        "text": "Frequenctly asked questions"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox136": {
      "custom": {
        "text": "FAQ"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox169": {
      "custom": {
        "text": "Ready to make something kickass?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox170": {
      "custom": {
        "text": "Let's get on a call."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox153": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox173": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox174": {
      "custom": {
        "text": "Dribbble"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox175": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox176": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox177": {
      "custom": {
        "text": "Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox178": {
      "custom": {
        "text": "Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox179": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox180": {
      "custom": {
        "text": "Twitter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox171": {
      "custom": {
        "text": "4353 Delaware Avenue, San Francisco, USA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox167": {
      "custom": {
        "text": "."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox168": {
      "custom": {
        "text": "Portfolio creator"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image85": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/whiteDownArrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox172": {
      "custom": {
        "text": "hi@thefolio.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox191": {
      "custom": {
        "text": "Word on the street"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox200": {
      "custom": {
        "text": "TESTIMONIALS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image86": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/user3.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox187": {
      "custom": {
        "text": "Jade helped us build a software so intuitive that it didn't need a walkthrough. He solved complex problems with brilliant design."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image95": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/testinomial1.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button2": {
      "custom": {
        "text": "<"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button3": {
      "custom": {
        "text": ">"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox201": {
      "custom": {
        "text": "SpaceFleet"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox202": {
      "custom": {
        "text": "Senior Product Manager"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox217": {
      "custom": {
        "text": "April 16, 2021. 6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox218": {
      "custom": {
        "text": "Design tips for designers, that cover everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image103": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox225": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox227": {
      "custom": {
        "text": "How to build rapport with your web design clients"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox228": {
      "custom": {
        "text": "April 16, 2021. 5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox226": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image108": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox230": {
      "custom": {
        "text": "Top 6 free website mockup tools 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox231": {
      "custom": {
        "text": "April 16, 2021. 5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox229": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image109": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox233": {
      "custom": {
        "text": "Logo design trends to avoid in 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox234": {
      "custom": {
        "text": "April 16, 2021. 7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox232": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image110": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox236": {
      "custom": {
        "text": "22 best UI design tools"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox237": {
      "custom": {
        "text": "April 16, 2021. 7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox235": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image111": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox219": {
      "custom": {
        "text": "BLOGS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox220": {
      "custom": {
        "text": "Latest Blogs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox238": {
      "custom": {
        "text": "View all"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image112": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button7": {
      "custom": {
        "text": ">"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button8": {
      "custom": {
        "text": "<"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image113": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blog1.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox239": {
      "custom": {
        "text": "BRANDING"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox240": {
      "custom": {
        "text": "Soulful Rebrand"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image114": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons8-right-arrow-50.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox241": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image118": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blog2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox246": {
      "custom": {
        "text": "Datadash Product Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox247": {
      "custom": {
        "text": "PRODUCT DESIGN"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox245": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image117": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons8-right-arrow-50.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image120": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blog4.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox249": {
      "custom": {
        "text": "GorrillaX Brand"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox250": {
      "custom": {
        "text": "BRANDING"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox248": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image119": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons8-right-arrow-50.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image122": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blog5.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox252": {
      "custom": {
        "text": "Joggr Website Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox253": {
      "custom": {
        "text": "WEB DESIGN"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox251": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image121": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons8-right-arrow-50.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image124": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blog3.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox255": {
      "custom": {
        "text": "Maize Website Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox256": {
      "custom": {
        "text": "WEB DESIGN"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox254": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image123": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons8-right-arrow-50.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button5": {
      "custom": {
        "text": "Visit all projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button6": {
      "custom": {
        "text": "Visit all projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox222": {
      "custom": {
        "text": "PROJECTS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox223": {
      "custom": {
        "text": "I brings results. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox224": {
      "custom": {
        "text": "My clients are proof. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "about": {},
  "blog": {
    "blogHeader": {
      "callbacks": {}
    },
    "Flex9": {
      "callbacks": {}
    },
    "Flex7": {
      "callbacks": {}
    },
    "Flex6": {
      "callbacks": {}
    },
    "Flex8": {
      "callbacks": {}
    },
    "Flex11": {
      "callbacks": {}
    },
    "Flex13": {
      "callbacks": {}
    },
    "Flex14": {
      "callbacks": {}
    },
    "Flex15": {
      "callbacks": {}
    },
    "Flex46": {
      "callbacks": {}
    },
    "Flex45": {
      "callbacks": {}
    },
    "Flex44": {
      "callbacks": {}
    },
    "Flex49": {
      "callbacks": {}
    },
    "Flex48": {
      "callbacks": {}
    },
    "Flex47": {
      "callbacks": {}
    },
    "Flex52": {
      "callbacks": {}
    },
    "Flex51": {
      "callbacks": {}
    },
    "Flex50": {
      "callbacks": {}
    },
    "Flex55": {
      "callbacks": {}
    },
    "Flex54": {
      "callbacks": {}
    },
    "Flex53": {
      "callbacks": {}
    },
    "TextBox8": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/blog"
            }
          }
        ]
      }
    },
    "TextBox9": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/project"
            }
          }
        ]
      }
    },
    "TextBox10": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/services"
            }
          }
        ]
      }
    },
    "TextBox11": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/about"
            }
          }
        ]
      }
    },
    "Image2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons8-right-arrow-50.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/contact"
            }
          }
        ]
      }
    },
    "TextBox7": {
      "custom": {
        "text": "Book a Call"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/contact"
            }
          }
        ]
      }
    },
    "TextBox12": {
      "custom": {
        "text": "Portfolio Creator"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Image3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blog3.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox14": {
      "custom": {
        "text": "APRIL 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox15": {
      "custom": {
        "text": "Logo design trends to avoid in 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox13": {
      "custom": {
        "text": "View Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image6": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image22": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blog6.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox38": {
      "custom": {
        "text": "22 Best UI design tools"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox39": {
      "custom": {
        "text": "APRIL 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image21": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox37": {
      "custom": {
        "text": "View Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image24": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blog4.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox41": {
      "custom": {
        "text": "Design tips for designers, that cover everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox42": {
      "custom": {
        "text": "APRIL 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image23": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox40": {
      "custom": {
        "text": "View Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image26": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blog1.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox44": {
      "custom": {
        "text": "How to build rapport with your web design clients"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox45": {
      "custom": {
        "text": "APRIL 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image25": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox43": {
      "custom": {
        "text": "View Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image28": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/blog5.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox47": {
      "custom": {
        "text": "Top 6 free websites mockup tools 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox48": {
      "custom": {
        "text": "APRIL 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image27": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox46": {
      "custom": {
        "text": "View Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "project": {},
  "contact": {},
  "services": {}
}};

useStore.setState(desktopModeProps);

export default useStore;
