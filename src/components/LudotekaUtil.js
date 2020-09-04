export default class LudotekaUtil {
    constructor(r, c) {
        this.board = Array(r).fill().map(() => Array(c).fill(0));
        this.winrad = 4;
    }
    depth = (c) => {
        for (let r in this.board) {
            r = parseInt(r);
            if(!this.board[r][c]) return r;
        }
        return -1;
    };
    isWinner = (r, c, p) => {
        const dir = [[0,1],[0,-1],[-1,0],[1,0],[1,1],[-1,-1],[1,-1],[-1,1]];
        for(let [x, y] of dir) {
            let i = 0;
            let match = 0;
            while(i++ < this.winrad) {
                let nx = r + i*x;
                let ny = c + i*y;
                if( this.board[nx] && this.board[nx][ny]) {
                    if( this.board[nx][ny] === p) {
                        match++;
                        // console.log(`check ${i} ... ${nx}_${ny}... ${this.board[nx][ny]} & ${this.board[r][c]}  match=${match}...${JSON.stringify(this.board)}`);
                        if(match===this.winrad-1) {
                            return true;
                        }
                    } else {
                        break;
                    }
                }
            }
        }
        return false;
    };
    input = (arr) => {
        for (let i in arr) {
            i = parseInt(i);
            let p = i % 2 === 0 ? 1 : 2;
            let c = arr[i], r = this.depth(c);
            if (r>-1) {
                this.board[r][c] = p;
                if(this.isWinner(r, c, p)) return p;
            }
        }
        return 0;
    };
    getBoard = () => this.board;
}