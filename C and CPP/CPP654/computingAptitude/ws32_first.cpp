//
// Created by mukul on 29-04-2022.
//
#include "iostream"
#include "vector"
using namespace std;
class node {
public:
    int data;
    node* next;
    node(int d){
        this->data = d;
    }

public:
    node() {

    }
};

node* newNode(int d)
{
    node* new_node = new node(d);
    new_node->next = NULL;
    return new_node;
}

node* reverse(node* head,node* prev) {
    if (head == NULL)
        return NULL;

    node* temp;
    node* curr;
    curr = head;

    while (curr != NULL && curr->data % 2 == 0) {
        temp = curr->next;
        curr->next = prev;
        prev = curr;
        curr = temp;
    }

    if (curr != head) {

        head->next = curr;

        curr = reverse(curr, NULL);
        return prev;
    }
    else {
        head->next = reverse(head->next, head);
        return head;
    }
}


void printLinkedList(node* head)
{
    while (head != NULL) {
        cout << head->data << " ";
        head = head->next;
    }
    cout << endl;
}

int main()
{
    int arr[] = { 1, 2, 3, 3, 4, 6, 8, 5 };
    int arr1[] = {1,2,8,9,12,16};

    int n = sizeof(arr) / sizeof(arr[0]);
    node* head = NULL;
    node* p;

    int n1 = sizeof(arr1) / sizeof(arr1[0]);
    node* head1 = NULL;
    node* p1;
    for (int i = 0; i < n; i++) {

        if (head == NULL) {
            p = newNode(arr[i]);
            head = p;
            continue;
        }
        p->next = newNode(arr[i]);
        p = p->next;
    }
    for (int i = 0; i < n1; i++) {

        if (head1 == NULL) {
            p1 = newNode(arr1[i]);
            head1 = p1;
            continue;
        }
        p1->next = newNode(arr1[i]);
        p1 = p1->next;
    }
    head = reverse(head, NULL);
    printLinkedList(head);
    head1 = reverse(head1,NULL);
    printLinkedList(head1);
    return 0;
}
