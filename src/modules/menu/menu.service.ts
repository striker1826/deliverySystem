import { BadRequestException, Injectable } from "@nestjs/common";
import { FakeMenuRepository } from "../../../test/menu/menu.service.spec";
import { FakeStoreRepository } from "../../../test/store/store.service.spec";

@Injectable()
export class MenuService {
    storeRepository = new FakeStoreRepository();
    menuRepository = new FakeMenuRepository();

    async createMenu(StoreId: number, menuInfo): Promise<void> {
        const store = await this.storeRepository.findStoreById(StoreId);
        if (!store) {
            throw new BadRequestException("존재하지 않는 가게 입니다");
        }
        await this.menuRepository.createMenu(StoreId, menuInfo);
        return;
    }
}
