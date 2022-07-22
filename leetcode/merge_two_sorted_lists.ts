// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeTwoLists0(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let p1: ListNode | null = list1;
    let p2: ListNode | null = list2;
    let r = new ListNode(0, null);
    let q: ListNode | null = r;

    while (p1 && p2) {
        if (p1.val < p2.val) {
            q.next = p1;
            p1 = p1.next;
        } else {
            q.next = p2;
            p2 = p2.next;
        }
        q = q.next;
    }

    if (p1) {
        q.next = p1;
    }

    if (p2) {
        q.next = p2;
    }

    return r.next;
};

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) return list2;
    if (!list2) return list1;
    let [a, b] = [list1, list2];
    if (list1.val > list2.val) {
        [a, b] = [list2, list1];
    }
    let tail = mergeTwoLists(a.next, b);
    a.next = tail;
    return a;
}

function a2List(a: number[]) {
    let head: ListNode | null = null;
    for (let i = a.length - 1; i >= 0; i--) {
        let node: ListNode = new ListNode(a[i], head);
        head = node;
    }
    return head;
}

function printList(list: ListNode | null) {
    let p = list;
    while (p) {
        process.stdout.write(`${p.val} `);
        p = p.next;
    }
    process.stdout.write(".\n");
}

// printList(a2List([]));
// printList(a2List([3]));
// printList(a2List([3, 1, 4]));

printList(mergeTwoLists(a2List([]), a2List([])));
printList(mergeTwoLists(a2List([]), a2List([0])));
printList(mergeTwoLists(a2List([1, 2, 4]), a2List([1, 3, 4])));

printList(mergeTwoLists(a2List([3]), a2List([])));
printList(mergeTwoLists(a2List([]), a2List([3])));
printList(mergeTwoLists(a2List([3]), a2List([3])));
printList(mergeTwoLists(a2List([2]), a2List([3])));
printList(mergeTwoLists(a2List([3]), a2List([2])));
printList(mergeTwoLists(a2List([3]), a2List([1, 2])));
printList(mergeTwoLists(a2List([3]), a2List([2, 3])));
printList(mergeTwoLists(a2List([3]), a2List([2, 4])));
printList(mergeTwoLists(a2List([3]), a2List([3, 4])));
printList(mergeTwoLists(a2List([3]), a2List([5, 7])));
printList(mergeTwoLists(a2List([1]), a2List([2])));
printList(mergeTwoLists(a2List([1, 2]), a2List([3])));
printList(mergeTwoLists(a2List([2, 3]), a2List([3])));
printList(mergeTwoLists(a2List([2, 4]), a2List([3])));
printList(mergeTwoLists(a2List([3, 4]), a2List([3])));
printList(mergeTwoLists(a2List([5, 7]), a2List([3])));
printList(mergeTwoLists(a2List([1, 2]), a2List([3, 5])));
printList(mergeTwoLists(a2List([1, 3]), a2List([3, 5])));
printList(mergeTwoLists(a2List([1, 4]), a2List([3, 5])));
printList(mergeTwoLists(a2List([1, 5]), a2List([3, 5])));
printList(mergeTwoLists(a2List([1, 7]), a2List([3, 5])));
printList(mergeTwoLists(a2List([3, 4]), a2List([3, 5])));
printList(mergeTwoLists(a2List([3, 5]), a2List([3, 5])));
printList(mergeTwoLists(a2List([3, 7]), a2List([3, 5])));
printList(mergeTwoLists(a2List([4, 5]), a2List([3, 5])));
printList(mergeTwoLists(a2List([4, 7]), a2List([3, 5])));
printList(mergeTwoLists(a2List([5, 5]), a2List([3, 5])));
printList(mergeTwoLists(a2List([5, 7]), a2List([3, 5])));
printList(mergeTwoLists(a2List([3, 3]), a2List([3, 5])));
printList(mergeTwoLists(a2List([3, 3, 3]), a2List([3, 5])));
printList(mergeTwoLists(a2List([5, 5, 5]), a2List([3, 5])));
printList(mergeTwoLists(a2List([3, 5]), a2List([3, 3])));
printList(mergeTwoLists(a2List([3, 5]), a2List([3, 3, 3])));
printList(mergeTwoLists(a2List([1, 2, 8, 11]), a2List([3, 5, 7])));
