import './whack-the-goblin.css';

export default class WhackTheGoblin {
    static _getRandomHole(current, min=0, max=15) {
        let result = Math.floor(Math.random() * (max - min + 1)) + min;

        while (result === current) {
            result = Math.floor(Math.random() * (max - min + 1)) + min;
        }

        return result;
    }

    static startWhacking()  {
        const body = document.body;
        const container = document.createElement('div');

		container.classList.add('container');

        for (let i = 0; i < 16; i++) {
            const hole = document.createElement('div');

            hole.classList.add('hole');
            container.append(hole);
        }

        body.append(container);

        const battleField = body.querySelector('.container').children;
        let holeNum = this._getRandomHole(-1);

        setInterval(() => {
            battleField[holeNum].classList.remove('goblin');
            holeNum = this._getRandomHole(holeNum);
            battleField[holeNum].classList.add('goblin');
        }, 2000);

    }
}