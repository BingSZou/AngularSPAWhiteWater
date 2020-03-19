import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-raft-guide-detail",
  templateUrl: "./raft-guide-detail.component.html",
  styleUrls: ["./raft-guide-detail.component.scss"]
})
export class RaftGuideDetailComponent implements OnInit {
  @Input()
  fullName: string;
  @Input()
  profile: string;
  @Input()
  pictureSrc: string;

  constructor() {}

  ngOnInit() {}
}
