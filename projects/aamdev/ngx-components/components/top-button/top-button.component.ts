import { ChangeDetectionStrategy, Component, HostListener, Input, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'aamdev-top-button',
  templateUrl: './top-button.component.html',
  styleUrls: ['./top-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopButtonComponent implements OnInit {
  public showButton = false;
  private readonly SCROLL_TO_DISPLAY = 200;
  private readonly TOP_POSITION: [number, number] = [0, 0];

  @Input() text: string = '';
  @Input() showIcon: boolean = true;
  @Input() color: string = '#068fea';

  constructor(
    private readonly viewportScroller: ViewportScroller
  ) { }

  ngOnInit(): void {
    if (this.text) {
      this.showIcon = false;
    }
  }

  @HostListener('window:scroll')
  private onWindowScroll(): void {
    const scrollTop = this.viewportScroller.getScrollPosition();
    this.showButton = scrollTop[1] > this.SCROLL_TO_DISPLAY;
  }

  public scrollToTop(): void {
    this.viewportScroller.scrollToPosition(this.TOP_POSITION);
  }

}
