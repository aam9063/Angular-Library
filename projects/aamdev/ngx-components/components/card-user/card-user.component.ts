import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CardUser, UserName } from './models/card-user';

@Component({
  selector: 'aamdev-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardUserComponent {

  @Input()
  user!: CardUser; // !: Indica que el valor no puede ser nulo y nosotros vamos a controlar que no es indefinido.
  @Input() check: boolean = false;
  @Input() cardType: string = '';
  @Output() checked = new EventEmitter<UserName>();

  public onCheck(): void {
    this.checked.emit(this.user?.name);
  }

}
