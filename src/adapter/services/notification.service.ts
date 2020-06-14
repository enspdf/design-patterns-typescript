import INotification from '../providers/notification.interface';

class NotificationService {
    constructor(private providers: INotification[]) { };

    public post(title: string, message: string): void {
        this.providers.forEach(provider => {
            provider.post(title, message);
        });
    };
};

export default NotificationService;