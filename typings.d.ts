interface Message {
    text: string;
    createdAt: admin.firestore.Timestamp;
    user: {
        _id: any;
        name: any;
        avatar: string;
    };
}

