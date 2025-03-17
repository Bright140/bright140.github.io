#include <iostream>
using namespace std;
int main() {
    int m,n,i,j,k=0;
    cin >>m>>n;
    int a[m][n],b[m][n];
    for(i=0;i<m;i++) {
        for(j=0;j<n;j++) {
            cin >>a[i][j];
        }
    }
    for(i=0;i<m;i++) {
        for(j=0;j<n;j++) {
            cin >>b[i][j];
        }
    }
    for(i=0;i<m;i++) {
        for(j=0;j<n;j++) {
            if(a[i][j]==b[i][j]) {
                k++;
            }
        }
    }
    if(k==(m*n)) {
        cout <<"Yes";
    } else {
        cout <<"No";
    }
    return 0;
}