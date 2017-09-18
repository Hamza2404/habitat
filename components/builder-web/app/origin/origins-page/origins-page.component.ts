// Copyright (c) 2016-2017 Chef Software Inc. and/or applicable contributors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";

import {
    acceptOriginInvitation,
    fetchMyOriginInvitations
} from "./origins-page.actions";
import { AppStore } from "../../AppStore";
import { requireSignIn } from "../../util";
import * as fromOrigins from "../origin.reducers";
import * as origin from "../origin.actions";
import { Origin } from "../origin.model";
import { Observable } from "rxjs/Observable";


@Component({
    template: require("./origins-page.component.html")
})

export class OriginsPageComponent implements OnInit {
    origins: Observable<Origin[]>;

    constructor(private store: Store<fromOrigins.State>, private router: Router) {
        this.origins = store.select(fromOrigins.getOriginCollection);
    }

    // get invitations() { return this.store.getState().origins.myInvitations; }

    // get origins() { return this.store.getState().origins.mine; }

    // get ui() { return this.store.getState().origins.ui.mine; }

    // routeToOrigin(origin) {
    //     this.router.navigate(["/origins", origin]);
    // }

    // acceptInvitation(invitationId, originName) {
    //     this.store.dispatch(acceptOriginInvitation(
    //       invitationId,
    //       originName,
    //         this.store.getState().gitHub.authToken
    //     ));
    // }

    public ngOnInit() {
        // requireSignIn(this);
        this.store.dispatch(new origin.LoadOrigins());
        // this.store.dispatch(fetchMyOrigins(
        //     this.store.getState().gitHub.authToken
        // ));
        // this.store.dispatch(fetchMyOriginInvitations(
        //     this.store.getState().gitHub.authToken
        // ));
    }
}
