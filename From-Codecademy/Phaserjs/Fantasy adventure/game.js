let gameState = {};

function preload() {
    // load in background and characters
    this.load.image(
        "bg",
        "https://content.codecademy.com/projects/learn-phaser/cyoa/background.png"
    );
    this.load.image(
        "knight",
        "https://content.codecademy.com/projects/learn-phaser/cyoa/knight.png"
    );
    this.load.image(
        "orc",
        "https://content.codecademy.com/projects/learn-phaser/cyoa/orc.png"
    );
    this.load.image(
        "wizard",
        "https://content.codecademy.com/projects/learn-phaser/cyoa/wizard.png"
    );
}

function renderCharacter(scene, key) {
    if (gameState.character) {
        gameState.character.destroy();
    }
    gameState.character = scene.add.image(270, 340, key);
    gameState.character.setOrigin(0.5, 1);
    gameState.character.setScale(0.7);
}

function create() {
    gameState.background = this.add.image(0, 0, "bg");
    gameState.background.setOrigin(0, 0);
    renderCharacter(this, "knight");
    initializePage(this);
    const firstPage = fetchPage(1);
    displayPage(this, firstPage);
}

function initializePage(scene) {
    if (!gameState.options) {
        gameState.options = [];
    }

    if (!gameState.narrative_background) {
        gameState.narrative_background = scene.add.rectangle(
            10,
            360,
            430,
            170,
            0x000
        );
        gameState.narrative_background.setOrigin(0, 0);
    }
}

function destroyPage() {
    if (gameState.narrative) {
        gameState.narrative.destroy();
    }

    for (let option of gameState.options) {
        option.optionBox.destroy();
        option.optionText.destroy();
    }

    gameState.options = [];
}

function displayPage(scene, page) {
    const narrativeStyle = {
        fill: "#ffffff",
        fontStyle: "italic",
        align: "center",
        wordWrap: { width: 340 },
        lineSpacing: 8,
    };

    renderCharacter(scene, page.character);

    gameState.narrative = scene.add.text(65, 380, page.narrative, narrativeStyle);

    for (let i = 0; i < page.options.length; i++) {
        let option = page.options[i];

        const optionBox = scene.add.rectangle(
            40 + i * 130,
            470,
            110,
            40,
            0xb39c0e,
            0
        );
        optionBox.strokeColor = 0xb39c0e;
        optionBox.strokeWeight = 2;
        optionBox.strokeAlpha = 1;
        optionBox.isStroked = true;
        optionBox.setOrigin(0, 0);

        const baseX = 40 + i * 130;
        const optionText = scene.add.text(baseX, 480, option.option, {
            fontSize: 14,
            fill: "#b39c0e",
            align: "center",
            wordWrap: { width: 110 },
        });
        const optionTextBounds = optionText.getBounds();

        optionText.setX(optionTextBounds.x + 55 - optionTextBounds.width / 2);
        optionText.setY(optionTextBounds.y + 10 - optionTextBounds.height / 2);

        optionBox.setInteractive();
        optionBox.on(
            "pointerup",
            function () {
                const newPage = this.option.nextPage;
                if (newPage !== undefined) {
                    destroyPage();
                    displayPage(scene, fetchPage(newPage));
                }
            },
            { option }
        );

        optionBox.on(
            "pointerover",
            function () {
                this.optionBox.setStrokeStyle(2, 0xffe014, 1);
                this.optionText.setColor("#ffe014");
            },
            { optionBox, optionText }
        );

        optionBox.on(
            "pointerout",
            function () {
                this.optionBox.setStrokeStyle(1, 0xb38c03, 1);
                this.optionText.setColor("#b39c0e");
            },
            { optionBox, optionText }
        );

        gameState.options.push({ optionBox, optionText });
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: "phaser-game",
    backgroundColor: 0xfea0fd,
    width: 450,
    height: 550,
    scene: {
        preload,
        create,
    },
};

const game = new Phaser.Game(config);

function fetchPage(page) {
    const pages = [
        {
            character: "orc",
            page: 1,
            narrative: "Orc: Hello?",
            options: [
                { option: "Say Hi", nextPage: 2 },
                { option: "Ignore", nextPage: 41 },
            ],
        },
        {
            character: "orc",
            page: 41,
            narrative: "Orc: Uhm. Excuse me?!",
            options: [
                { option: "Say Hi", nextPage: 2 },
                { option: "Continue Ignoring", nextPage: 3 },
            ],
        },
        {
            character: "orc",
            page: 2,
            narrative:
                "Orc: I need help getting my sugar bowl from the top cabinet. Can you help me?",
            options: [
                { option: "Your... what?", nextPage: 5 },
                { option: "Don't think so", nextPage: 4 },
            ],
        },
        {
            character: "orc",
            page: 5,
            narrative:
                "Orc: My sugar bowl. Am I hard to understand? I can't reach it by myself but I think you could help.",
            options: [
                { option: "How do I help", nextPage: 6 },
                { option: "No I don't think so", nextPage: 4 },
            ],
        },
        {
            character: "orc",
            page: 6,
            narrative: "Orc: If I lift you up there do you think you can grab it?",
            options: [{ option: "Grab it", nextPage: 10 }],
        },
        {
            character: "orc",
            page: 10,
            narrative:
                "Orc: Thank you so much, folks usually just slink away because of my appearance.",
            options: [
                { option: "No problem", nextPage: 11 },
                { option: "Really?", nextPage: 18 },
            ],
        },
        {
            character: "orc",
            page: 18,
            narrative: "Orc: Uhm. Yes? I'm an orc? Did you miss that somehow?",
            options: [{ option: "I guess so", nextPage: 20 }],
        },
        {
            character: "orc",
            page: 20,
            narrative:
                "You and the orc discuss ogre politics while he bakes cookies. You have a perfectly wonderful time.",
            options: [{ option: "Eat cookies", nextPage: 21 }],
        },
        {
            character: "orc",
            page: 21,
            narrative: "The cookies are fantastic.",
            options: [{ option: "Request recipe", nextPage: 19 }],
        },
        {
            character: "orc",
            page: 19,
            narrative:
                "The orc shares his recipe with you. You leave the cave feeling energized from the sugar.\nTHE END",
            options: [{ option: "Play again", nextPage: 1 }],
        },
        {
            character: "knight",
            page: 11,
            narrative: "Knight: Hey. Did you help out that orc?",
            options: [
                { option: "Yes", nextPage: 12 },
                { option: "No", nextPage: 23 },
            ],
        },
        {
            character: "knight",
            page: 23,
            narrative: "Knight: OK Good.",
            options: [
                { option: "Actually...", nextPage: 12 },
                { option: "Leave", nextPage: 24 },
            ],
        },
        {
            character: "knight",
            page: 24,
            narrative:
                "You walk out of the cave. What a weird adventure you went on today!\nTHE END",
            options: [{ option: "Play again", nextPage: 1 }],
        },
        {
            character: "knight",
            page: 12,
            narrative:
                "Knight: You really shouldn't have. How will the orc ever learn?",
            options: [
                { option: "I guess.", nextPage: 14 },
                { option: "Who are you?", nextPage: 13 },
            ],
        },
        {
            character: "knight",
            page: 13,
            narrative: "Knight: Just an interested party.",
            options: [
                { option: "Whatever.", nextPage: 25 },
                { option: "You're right", nextPage: 17 },
            ],
        },
        {
            character: "knight",
            page: 25,
            narrative: "Knight: I know what's best for orcs.",
            options: [{ option: "I guess.", nextPage: 14 }],
        },
        {
            character: "knight",
            page: 17,
            narrative:
                "Knight: I'm glad you agree. These orcs can't be coddled. I'm on a mission to make sure they're strong. Can I count on you?",
            options: [
                { option: "I'm in", nextPage: 15 },
                { option: "Absolutely not", nextPage: 26 },
            ],
        },
        {
            character: "knight",
            page: 15,
            narrative:
                "Knight: Great. We will teach the orcs how to be strong and self-reliant! Together!",
            options: [{ option: "Yay!", nextPage: 27 }],
        },
        {
            character: "knight",
            page: 27,
            narrative:
                "You and the knight go around pulling chairs out from under orcs and stealing their stepladders. You feel like a jerk.\nTHE END",
            options: [{ option: "Play again", nextPage: 1 }],
        },
        {
            character: "knight",
            page: 26,
            narrative: "Knight: It's your loss.",
            options: [{ option: "Leave", nextPage: 24 }],
        },
        {
            character: "orc",
            page: 3,
            narrative:
                "You walk away and the orc continues on with his day.\nTHE END",
            options: [{ option: "Play again", nextPage: 1 }],
        },
        {
            character: "orc",
            page: 4,
            narrative: "Orc: Okay then. Sorry to bother you.",
            options: [{ option: "Leave", nextPage: 3 }],
        },
    ];
    return pages.filter((p) => p.page === page)[0];
}