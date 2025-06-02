export interface MediaCard {
  image?: string
  video?: string
  caption: string
}

export interface JourneyStep {
  date: string
  media: MediaCard
  story: string
  todo: string
  mistakes: string
}

export interface Expert {
  id: string
  name: string
  slug: string
  title: string
  photo: string
  about: string
  studies: string[]
  achievements: string[]
  journey: JourneyStep[]
}


export const experts: Expert[] = [
  // Linus Torvalds
  {
    id: "expert-001",
    name: "Linus Torvalds",
    slug: "linus-torvalds",
    title: "Creator of Linux & Git",
    photo: "/images/linus-torvalds.jpg",
    about:
      "Linus Torvalds revolutionized computing by creating the Linux kernel, which powers most of the world's servers and Android devices. He later created the Git version control system, transforming software development workflows globally.",
    studies: [
      "MSc in Computer Science – University of Helsinki",
      "Honorary Doctorate – Stockholm University",
      "IEEE Computer Pioneer Award"
    ],
    achievements: [
      "Created Linux kernel (1991)",
      "Developed Git distributed version control system (2005)",
      "Recipient of Millennium Technology Prize (2012)",
      "Named one of Time Magazine's Most Influential People"
    ],
    journey: [
      {
        date: "1991",
        media: {
          image: "/images/First-Linux-Announcement.jpg",
          caption: "First Linux Announcement"
        },
        story:
          "Announced Linux kernel development as a hobby project on comp.os.minix newsgroup. Initially created for x86 PCs but grew into a universal OS kernel.",
        todo: "Implement POSIX compatibility",
        mistakes: "Underestimated the complexity of hardware compatibility layers"
      },
      {
        date: "1996",
        media: {
          image: "/images/Linux-Mascot-and-Community-Growth.jpg",
          caption: "Linux Mascot and Community Growth"
        },
        story:
          "Linux gained corporate backing from Red Hat and SUSE. Adopted Tux the penguin as official mascot. Kernel development became community-driven.",
        todo: "Improve SMP support for enterprise servers",
        mistakes: "Initially resisted modular kernel design"
      },
      {
        date: "2000",
        media: {
          image: "/images/Commercial-Adoption-Accelerates.jpg",
          caption: "Commercial Adoption Accelerates"
        },
        story:
          "IBM announced $1 billion investment in Linux development. Major corporations began adopting Linux for critical infrastructure.",
        todo: "Enhance security features for enterprise use",
        mistakes: "Public criticism of developers created controversy"
      },
      {
        date: "2005",
        media: {
          image: "/images/Creation-of-Git.png",
          caption: "Creation of Git"
        },
        story:
          "Developed Git to manage Linux kernel development after proprietary SCM tools proved inadequate. Designed for speed, simplicity, and distributed workflows.",
        todo: "Implement robust branching model",
        mistakes: "Initially created complex CLI interface"
      },
      {
        date: "2010",
        media: {
          image: "/images/Linux-Dominates-Computing.jpg",
          caption: "Linux Dominates Computing"
        },
        story:
          "Linux became dominant in servers (90%+ market share), Android devices (based on Linux kernel), and embedded systems. Torvalds focused on kernel maintenance.",
        todo: "Improve power management for mobile devices",
        mistakes: "Resisted corporate governance models"
      },
      {
        date: "2015",
        media: {
          image: "/images/Modern-Kernel-Development.jpg",
          caption: "Modern Kernel Development"
        },
        story:
          "Oversaw transition to more inclusive development model. Kernel reached over 22 million lines of code with contributions from 1,400+ companies.",
        todo: "Enhance security with modern mitigations",
        mistakes: "Initial slow adoption of security best practices"
      },
      {
        date: "2022",
        media: {
          video: "/videos/Linux-30th-Anniversary.mp4",
          caption: "Linux 30th Anniversary"
        },
        story:
          "Celebrated 30 years of Linux development. Kernel powers everything from supercomputers to smart appliances. Maintained original development philosophy.",
        todo: "Adapt to new hardware architectures",
        mistakes: "Occasional communication style caused conflicts"
      }
    ]
  },
  // John Carmack
  {
    id: "expert-002",
    name: "John Carmack",
    slug: "john-carmack",
    title: "Pioneer of 3D Game Graphics",
    photo: "/images/john-carmack.jpg",
    about:
      "John Carmack revolutionized computer graphics and game development through groundbreaking work at id Software. Creator of influential game engines including those powering Doom and Quake series. Currently working on AGI and VR technologies.",
    studies: [
      "Attended University of Missouri–Kansas City (dropped out)",
      "Two Emmy Awards for Technical Achievement",
      "Inducted into AIAS Hall of Fame"
    ],
    achievements: [
      "Created Wolfenstein 3D engine (1992)",
      "Pioneered adaptive tile refresh (Doom, 1993)",
      "Invented Carmack's Reverse shadow algorithm",
      "Key developer of Oculus VR technology"
    ],
    journey: [
      {
        date: "1990",
        media: {
          image: "/images/Commander-Keen-Innovation.jpg",
          caption: "Commander Keen Innovation"
        },
        story:
          "Developed smooth-scrolling technology for PC that enabled platform games. Founded id Software and created Commander Keen series.",
        todo: "Implement EGA graphics support",
        mistakes: "Underestimated market for console ports"
      },
      {
        date: "1992",
        media: {
          image: "/images/Wolfenstein-3D-Breakthrough.jpg",
          caption: "Wolfenstein 3D Breakthrough"
        },
        story:
          "Created first-person shooter genre with Wolfenstein 3D. Developed raycasting technology that enabled real-time 3D on PCs.",
        todo: "Optimize for 386 processors",
        mistakes: "Simple AI limited gameplay depth"
      },
      {
        date: "1993",
        media: {
          image: "/images/Doom-Revolution.jpg",
          caption: "Doom Revolution"
        },
        story:
          "Released Doom featuring texture-mapped 3D environments. Implemented networked multiplayer (deathmatch) and shareware distribution model.",
        todo: "Develop level editor tools",
        mistakes: "Level design tools were primitive initially"
      },
      {
        date: "1996",
        media: {
          image: "/images/True-3D-with-Quake.jpg",
          caption: "True 3D with Quake"
        },
        story:
          "Created first true 3D game engine with Quake. Implemented client-server networking model that became industry standard.",
        todo: "Implement hardware acceleration",
        mistakes: "Delayed release due to engine rewrite"
      },
      {
        date: "2004",
        media: {
          image: "/images/Doom-3-Lighting-Tech.jpg",
          caption: "Doom 3 Lighting Tech"
        },
        story:
          "Developed unified lighting/shadow system for Doom 3. Pioneered normal mapping and stencil shadow techniques.",
        todo: "Optimize for consumer GPUs",
        mistakes: "Overly dark aesthetic limited appeal"
      },
      {
        date: "2013",
        media: {
          image: "/images/CTO-at-Oculus-VR.jpg",
          caption: "CTO at Oculus VR"
        },
        story:
          "Joined Oculus VR as CTO. Led development of positional tracking and low-latency rendering critical for consumer VR.",
        todo: "Reduce motion sickness in VR",
        mistakes: "Initially underestimated ergonomic challenges"
      },
      {
        date: "2019",
        media: {
          video: "/videos/AGI-Research-at-Keen-Technologies.mp4",
          caption: "AGI Research at Keen Technologies"
        },
        story:
          "Founded Keen Technologies focused on Artificial General Intelligence. Applying game development approaches to AI architecture.",
        todo: "Develop neuro-symbolic AI frameworks",
        mistakes: "Public timeline predictions were overly optimistic"
      }
    ]
  },
  // Guido van Rossum
  {
    id: "expert-003",
    name: "Guido van Rossum",
    slug: "guido-van-rossum",
    title: "Creator of Python Programming Language",
    photo: "/images/guido-van-rossum.jpg",
    about:
      "Guido van Rossum created Python in 1989, designing it as an easy-to-read language emphasizing code readability. Python has become one of the world's most popular programming languages, powering major platforms from Google to NASA.",
    studies: [
      "MSc in Mathematics & Computer Science – University of Amsterdam",
      "Award for the Advancement of Free Software (2001)",
      "NLUUG Award (2003)"
    ],
    achievements: [
      "Created Python programming language (1989)",
      "Authored Python's first implementation",
      "Established Python Software Foundation",
      "Developed ABC programming language predecessor"
    ],
    journey: [
      {
        date: "1989",
        media: {
          image: "/images/Christmas-Holiday-Project.jpg",
          caption: "Christmas Holiday Project"
        },
        story:
          "Started Python as a hobby project during Christmas break. Wanted to create a language bridging C and shell scripting with ABC-inspired readability.",
        todo: "Implement exception handling",
        mistakes: "Used indentation for blocks which was controversial"
      },
      {
        date: "1991",
        media: {
          image: "/images/First-Public-Release.jpg",
          caption: "First Public Release"
        },
        story:
          "Released Python 0.9.0 to alt.sources newsgroup. Featured exception handling, functions, and core data types. Adopted open-source model early.",
        todo: "Add support for modules",
        mistakes: "Limited documentation initially"
      },
      {
        date: "2000",
        media: {
          image: "/images/Python-2.0-and-Community.png",
          caption: "Python 2.0 and Community"
        },
        story:
          "Released Python 2.0 with list comprehensions and garbage collector. Established Python Software Foundation to steward language development.",
        todo: "Develop unicode support",
        mistakes: "Delayed unicode implementation"
      },
      {
        date: "2008",
        media: {
          image: "/images/Python-3-Breakthrough.png",
          caption: "Python 3 Breakthrough"
        },
        story:
          "Led development of Python 3.0, a backward-incompatible release fixing fundamental design issues. Included major syntax cleanup and library reorganization.",
        todo: "Improve asynchronous features",
        mistakes: "Underestimated migration challenges from Python 2"
      },
      {
        date: "2013",
        media: {
          image: "/images/Systems-Architect-at-Dropbox.jpg",
          caption: "Systems Architect at Dropbox"
        },
        story:
          'Joined Dropbox as "Benevolent Dictator for Life" while continuing Python guidance. Helped scale infrastructure handling exabytes of data.',
        todo: "Optimize Python for large-scale systems",
        mistakes: "Initial Python 3 adoption slower than expected"
      },
      {
        date: "2018",
        media: {
          image: "/images/Stepping-Down-as-BDFL.png",
          caption: "Stepping Down as BDFL"
        },
        story:
          "Stepped back from Python leadership role after PEP 572 controversy. Initiated governance model with leadership council instead of single BDFL.",
        todo: "Establish sustainable governance model",
        mistakes: "Community management challenges with PEP decisions"
      },
      {
        date: "2020",
        media: {
          video: "/videos/Developer-Division-at-Microsoft.mp4",
          caption: "Developer Division at Microsoft"
        },
        story:
          "Joined Microsoft as Distinguished Engineer. Focused on making Python faster through performance optimizations (faster CPython project).",
        todo: "Achieve 5x speed improvement in CPython",
        mistakes: "Initial performance gains required breaking changes"
      }
    ]
  }
];

// Helper function to get expert by slug
export function getExpertBySlug(slug: string): Expert | undefined {
  return experts.find((expert) => expert.slug === slug)
}

// Helper function to get all expert slugs for static generation
export function getAllExpertSlugs(): string[] {
  return experts.map((expert) => expert.slug)
}
//