//
// Created by mukul on 22-04-2022.
//
#include "iostream"
using namespace std;
int N;
bool isSafe(int** grid, int row, int col) {
    for (int i = 0; i < row; ++i) {
        if ( grid[i][col] == 1 ) {
            return false;
        }
    }
    int i = row;
    int j = col;
    while ( i >= 0 && j >= 0 ) {
        if ( grid[i][j] == 1 ) return false;
        i--;
        j--;
    }
    i = row;
    j = col;
    while ( i >= 0 && j < N ) {
        if ( grid[i][j] == 1 ) return false;
        i--;
        j++;
    }
    return true;
}

bool solve(int** grid, int row){
    if ( row >= N ) return true;
    for (int j = 0; j < N; ++j) {
        if (isSafe(grid,row,j)) {
            grid[row][j] = 1;
            if (solve(grid,row+1)) {
                return true;
            }
            grid[row][j] = 0;
        }
    }
    return false;
}
void printGrid(int** grid){
    for (int i = 0; i < N; ++i) {
        for (int j = 0; j < N; ++j) {
            if ( grid[i][j] == 0 ) cout << " " << "." << " " ;
            else cout << " " << "Q" << " ";
        }
        cout << endl;
    }
}
int main(){
    cin >> N;
    int** grid = new int*[N];
    for (int i = 0; i < N; ++i) {
        grid[i]= new int[N];
        for (int j = 0; j < N; ++j) {
            grid[i][j] = 0;
        }
    }
    if ( solve(grid,0) ) {
        printGrid(grid);
    } else {
        cout << "!No Solution" << endl;
    }
    return 0;
}

