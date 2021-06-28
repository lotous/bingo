<?php


namespace App\Notifications;
use Illuminate\Auth\Notifications\ResetPassword as Notification;
use Illuminate\Notifications\Messages\MailMessage;


class ResetPasswordNotification extends Notification
{

    /**
     * @var null
     */
    protected $username = null;

    /**
     * @param $name
     */
    public function setName($name) {
        $this->username = $name;
    }

    /**
     * @param mixed $notifiable
     * @return MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage())
            ->subject(__('password.subject', config('app.name')))
            ->greeting(__('password.greeting',  $this->username))
            ->line(__('password.line'))
           // ->action(__('password.button'), route('password.reset.token', $this->token).'?email='.urlencode($notifiable->getEmailForPasswordReset()))
            ->line(__('password.notice'));
    }
}
