//
// Created by mukul on 19-05-2022.
//
#include "iostream"
using namespace std;

int main(){
    long n,lastInput;
    cin >> n;
    while(n--){
        cin>>lastInput;
    }
    if( lastInput % 10 == 0 ) cout<<"Yes";
    else cout<<"No";
}
