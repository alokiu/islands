(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    function solution(map) {
        var numberIsland = 1;
        var island = new Array();
        var noIsland = new Array();

        for (var i = 0; i < map.length; i++){
            for (var j = 0; j < map[0].length; j++){
                if (map[i][j] == 1){
                    numberIsland++;
                    var oldNumberIsland = numberIsland;

                    if(i!=0 && map[i-1][j] !=0){
                        oldNumberIsland = map[i-1][j];
                    }

                    if(j!=0 && map[i][j-1] !=0 && oldNumberIsland > map[i][j-1]){
                        oldNumberIsland = map[i][j-1];
                    }
                    if(i!=0 && j!=0 && map[i-1][j] > 1 && map[i][j-1] > 1 && map[i-1][j]!=map[i][j-1]){
                        if(map[i][j-1] < map[i-1][j]){
                            noIsland.push(map[i-1][j]);
                        }
                        else{
                            noIsland.push(map[i][j-1]);
                        }
                    }
                    island.push(oldNumberIsland);
                    map[i][j] = oldNumberIsland;
                }           
            }
        }
        function uniqueVal(value, index, self) { 
            return self.indexOf(value) === index;
        }
        return island.filter(uniqueVal).length - noIsland.filter(uniqueVal).length;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
