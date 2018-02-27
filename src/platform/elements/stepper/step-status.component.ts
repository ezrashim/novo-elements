import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewEncapsulation,
  TemplateRef,
  HostBinding,
  Inject,
  forwardRef
} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {NovoStepper} from './stepper.component';
import {NovoStepHeader} from './step-header.component';

@Component({
  selector: 'novo-step-status',
  templateUrl: 'step-status.component.html',
  // encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'novo-step-status'
  },
})
export class NovoStepStatus {
  @Input() state: string;
  
  constructor(@Inject(forwardRef(() => NovoStepper)) stepper: NovoStepper, @Inject(forwardRef(() => NovoStepHeader)) step: NovoStepHeader) {
  }
}
