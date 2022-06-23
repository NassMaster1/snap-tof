import {Injectable} from "@angular/core";
import {tofsnap} from "../models/tof-snap.model";

@Injectable({
    providedIn: "root"
})
export class TofSnapsService{

  facesnapsTab:tofsnap[]=[ new tofsnap
  (1,'Peaky Blinders', 'Peaky Blinders', new Date(), 100,
    'https://resize.elle.fr/original/var/plain_site/storage/images/loisirs/series/peaky-blinders-saison-6-le-tournage-se-devoile-en-photos/94692025-1-fre-FR/Peaky-Blinders-saison-6-le-tournage-se-devoile-en-photos.jpg','Londres'),
    new tofsnap
    (2,'Tommy Shelby', 'Tommy Shelby', new Date(), 3,
      'https://images4.alphacoders.com/808/thumb-1920-808445.jpg'), new tofsnap
    (3,'Peaky Blinders Femmes', 'Peaky Blinders Femme', new Date(), 3,
      'https://dailymars-cdn-fra1.fra1.digitaloceanspaces.com/wp-content/uploads/2016/09/03.jpg')];

  getAllFacesnaps(){
    return this.facesnapsTab;
  }

  snapTofSnap(facesnapid:number):tofsnap{
    const facesnap=this.facesnapsTab.find(facesnap=>facesnap.id===facesnapid);
    if(!facesnap){
      throw new Error('facesnap not found');
    }else{
      return facesnap;
    }
  }

  snaptofsnapbyID(facesnapid:number,snapsType:'Like'|'UnLike'):void{
    const facesnap=this.snapTofSnap(facesnapid);
    snapsType==='Like'?facesnap.snaps++:facesnap.snaps--;
  }
}


