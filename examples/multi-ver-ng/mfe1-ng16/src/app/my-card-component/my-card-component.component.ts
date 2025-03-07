import { Component, EventEmitter, Input, Output, VERSION, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-my-card-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-card-component.component.html',
  styleUrls: ['./my-card-component.component.css']
})
export class MyCardComponent {
  public readonly version = VERSION.full;
  public user: any;

  @Input()
  public inputText?: string;

  @Input()
  public inputUserId?: number;

  @Output("message-sent")
  public messageSentEvent: EventEmitter<string> = new EventEmitter<string>();

  public sendMessage(): void {
    this.messageSentEvent.emit(`Received Input: '${this.user.username ?? this.inputText}' and Page: ${this.inputUserId} at ${new Date()}`);
  }

  constructor(private userService: UserService) {}

  // Detect input changes
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['inputUserId']?.currentValue) {
      this.fetchUsers(this.inputUserId!);
    }
  }

  private fetchUsers(id: number): void {
    this.userService.getUserById(id).subscribe({
      next: (user) => {
        this.user = user;
      },
      error: (err) => {
        console.error('API Error:', err);
      },
    });
  }
}
