import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@app/shared';

import { settingsReducer } from '@app/settings/settings.reducer';
import { SettingsEffects } from '@app/settings/settings.effects';
import { SettingsContainerComponent } from '@app/settings/components/settings-container.component';

@NgModule({
  imports: [
    SharedModule,
    StoreModule.forFeature('settings', settingsReducer),
    EffectsModule.forFeature([SettingsEffects])
  ],
  declarations: [SettingsContainerComponent]
})
export class SettingsModule {}
