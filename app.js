function Round(number){
    this.number = number;
    this.points = 0;
}

function Points(){
    this.round1 = [new Round(1), new Round(2), new Round(3), new Round(4), new Round(5), new Round(6), new Round(7), new Round(8), new Round(9), new Round('Half')];
    this.round2 = [new Round(10), new Round(11), new Round(12), new Round(13), new Round(14), new Round(15), new Round(16), new Round(17), new Round(18), new Round('Wager')];
    this.total = function(){
        t = 0;
        for(i in this.round1){
            t += parseInt(this.round1[i].points);
        }
        for(i in this.round2){
            t += parseInt(this.round2[i].points);
        }
        return t
    };
}

function TeamCtrl($scope) {
    $scope.teams = [{name:'Test', points:new Points()}];

    $scope.addTeam = function(){
        $scope.teams.push({name:$scope.teamName, points:new Points()});
        $scope.teamName = '';
    };

}
