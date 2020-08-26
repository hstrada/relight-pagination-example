package example.pagination.relight.services;

import java.util.List;

import example.pagination.relight.entities.Item;

public interface ItemService {

	List<Item> getItemsList(int page, int size);

}
