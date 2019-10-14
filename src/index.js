window.addEventListener("load", () => {
    const $positionTables = document.getElementsByClassName("each-position");
    let i = 0;

    function verifyWinner(figure) {
        if (
            ($positionTables[0].innerText == figure &&
                $positionTables[1].innerText == figure &&
                $positionTables[2].innerText == figure) ||
            ($positionTables[3].innerText == figure &&
                $positionTables[4].innerText == figure &&
                $positionTables[5].innerText == figure) ||
            ($positionTables[3].innerText == figure &&
                $positionTables[4].innerText == figure &&
                $positionTables[5].innerText == figure) ||
            ($positionTables[6].innerText == figure &&
                $positionTables[7].innerText == figure &&
                $positionTables[8].innerText == figure) ||
            ($positionTables[0].innerText == figure &&
                $positionTables[3].innerText == figure &&
                $positionTables[6].innerText == figure) ||
            ($positionTables[1].innerText == figure &&
                $positionTables[4].innerText == figure &&
                $positionTables[7].innerText == figure) ||
            ($positionTables[2].innerText == figure &&
                $positionTables[5].innerText == figure &&
                $positionTables[8].innerText == figure) ||
            ($positionTables[0].innerText == figure &&
                $positionTables[4].innerText == figure &&
                $positionTables[8].innerText == figure) ||
            ($positionTables[2].innerText == figure &&
                $positionTables[4].innerText == figure &&
                $positionTables[6].innerText == figure)
        ) {
            console.log(`${figure} Ganhou!!`);
        }
    }

    function renderMove(e) {
        return new Promise(() => {
            if (!e.innerText) {
                if (i % 2 == 0) {
                    e.innerText = "x";
                } else {
                    e.innerText = "o";
                }
            }
            verifyWinner("x");
            verifyWinner("o");

            i++;

            if (i == 8) {
                console.log("fim de jogo");
            }
        });
    }

    [].forEach.call($positionTables, e => {
        e.addEventListener("click", async function() {
            await renderMove(e);
        });
    });
});
