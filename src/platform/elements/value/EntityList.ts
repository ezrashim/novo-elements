// NG2
import { Component, Input, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'novo-entity-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div *ngFor="let entity of data.data" class="entity">
            <a *ngIf="entity.isLinkable" (click)="openLink(entity)">
                <i class="bhi-circle {{ entity.class }}"></i>{{ entity | render : meta }}
            </a>
            <span *ngIf="!entity.isLinkable">
                {{ entity | render : meta }}
            </span>
        </div>
    `
})
export class EntityList implements OnInit {
    @Input() data: any;
    @Input() meta: any;
    baseEntity: string = '';
    ENTITY_SHORT_NAMES: any = {
        Lead: 'lead',
        ClientContact: 'contact',
        ClientContact1: 'contact',
        ClientContact2: 'contact',
        ClientContact3: 'contact',
        ClientContact4: 'contact',
        ClientContact5: 'contact',
        ClientCorporation: 'company',
        ClientCorporation1: 'company',
        ClientCorporation2: 'company',
        ClientCorporation3: 'company',
        ClientCorporation4: 'company',
        ClientCorporation5: 'company',
        Opportunity: 'opportunity',
        Task: 'task',
        Note: 'note',
        CorporateUser: 'user',
        Candidate: 'candidate',
        JobOrder: 'job',
        JobOrder1: 'job',
        JobOrder2: 'job',
        JobOrder3: 'job',
        JobOrder4: 'job',
        JobOrder5: 'job',
        Placement: 'placement',
        JobSubmission: 'submission',
        CandidateReference: 'references',
        DistributionList: 'distributionList',
        Appointment: 'appointment',
    };

    constructor() {
    }

    ngOnInit(): any {
        this.meta.type = 'TO_ONE';
        this.baseEntity = this.meta.associatedEntity.entity;
        for (let entity of this.data.data) {
            entity.isLinkable = this.isLinkable(entity);
            entity.class = this.getClass(entity);
        }
    }

    getClass(entity: any): any {
        return this.ENTITY_SHORT_NAMES[entity.personSubtype];
    }

    openLink(entity: any): void {
        entity.openLink(entity);
    }

    isLinkable(entity: any): boolean {
        return entity.openLink;
    }
}
