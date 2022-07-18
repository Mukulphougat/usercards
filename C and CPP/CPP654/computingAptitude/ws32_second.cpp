//
// Created by mukul on 29-04-2022.
//
#include "iostream"
#include "vector"
using namespace std;

vector<vector<int>> diskTower(vector<int> &arr)
{

    int n = arr.size();
    vector<vector<int>> res;
    vector<int> aux(n + 1, 0);
    int expected = n;
    for (int i = 0; i < n; i++)
    {
        int a = arr[i];
        aux[a] = 1;
        vector<int> tmp;
        while (expected >= 1 && aux[expected] == 1)
        {
            tmp.push_back(expected);
            expected--;
        }

        res.push_back(tmp);
    }

    return res;
}

int main()
{

    int N = 5;

    vector<int> arr = {4, 5, 1, 2, 3};

    vector<vector<int>> res = diskTower(arr);
    for (int i = 0; i < res.size(); i++)
    {
        for (int j = 0; j < res[i].size(); j++)
        {
            cout << res[i][j] << " ";
        }
        cout << "\n";
    }

    return 0;
}

