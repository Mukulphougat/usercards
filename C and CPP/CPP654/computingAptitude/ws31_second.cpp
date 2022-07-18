//
// Created by mukul on 22-04-2022.
//
#include "iostream"
using namespace std;
int main(){
    int g,d=0;
    string c;
    cin>>g;
    cin>>c;
    for(int i=0;i<g-1;i++)
    {
        if(c[i]=='H'&&c[i+1]!='.')
        {
            cout<<"NO"<<endl;
            d=1;
            break;
        }
        if(c[i]=='.')
            c[i]='B';
    }
    if(d==0)
    {
        cout<<"YES"<<endl;
        if(c[g-1]=='.')
            c[g-1]='B';
        cout<<c<<endl;
    }
}

